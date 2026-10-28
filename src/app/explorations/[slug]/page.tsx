import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getExplorations, getExploration } from "@/lib/explorations";
import { Eyebrow } from "@/components/ui/primitives";
import { Markdown } from "@/components/ui/markdown";
import { identity } from "@/content/site";
import { siteUrl } from "@/lib/site-url";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;
export function generateStaticParams() { return getExplorations().map(note => ({ slug: note.slug })); }
export async function generateMetadata({ params }: { params: Promise<{slug:string}> }): Promise<Metadata> {
  const {slug} = await params;
  const note = getExploration(slug);
  if (!note) return {};
  return pageMetadata(note.title, note.description, `/explorations/${slug}`, true);
}

export default async function ExplorationPage({ params }: { params: Promise<{slug:string}> }) {
  const {slug} = await params;
  const note = getExploration(slug);
  if (!note) notFound();
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: note.title, description: note.description, author: { "@type": "Person", name: identity.name }, mainEntityOfPage: new URL(`/explorations/${slug}`,siteUrl).href };
  return <><article className="reading-layout"><Link className="back-link" href="/explorations">← All explorations</Link><header className="reading-header"><Eyebrow>{note.topic} · {note.readingTime} min read</Eyebrow><h1>{note.title}</h1><p>{note.description}</p><p className="note-meta">{identity.name}</p></header><Markdown body={note.body} /><footer className="mt-14"><Link className="back-link" href="/explorations">← Continue exploring</Link></footer></article><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g,"\\u003c") }} /></>;
}
