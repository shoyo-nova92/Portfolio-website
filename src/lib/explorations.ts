import "server-only";
import fs from "node:fs";
import path from "node:path";

export type Exploration = { slug: string; title: string; description: string; topic: string; body: string; readingTime: number };
const directory = path.join(process.cwd(), "content", "explorations");

/** Deliberately small local format: title/description/topic metadata, then --- and Markdown. */
export function getExplorations(): Exploration[] {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory).filter(file => file.endsWith(".md")).map(file => {
    const raw = fs.readFileSync(path.join(directory, file), "utf8").replace(/^\uFEFF/, "").replace(/\r\n/g, "\n");
    const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!match) throw new Error(`Invalid exploration frontmatter: ${file}`);
    const meta = Object.fromEntries(match[1].split("\n").filter(Boolean).map(line => {
      const index = line.indexOf(":");
      return [line.slice(0, index).trim(), line.slice(index + 1).trim().replace(/^['"]|['"]$/g, "")];
    }));
    if (!meta.title || !meta.description || !meta.topic) throw new Error(`Missing exploration metadata: ${file}`);
    const body = match[2].trim();
    return {slug: file.replace(/\.md$/, ""), title: meta.title, description: meta.description, topic: meta.topic, body, readingTime: Math.max(1, Math.ceil(body.split(/\s+/).length / 200))};
  }).sort((a,b) => a.title.localeCompare(b.title));
}

export function getExploration(slug: string) {
  return getExplorations().find(note => note.slug === slug);
}
