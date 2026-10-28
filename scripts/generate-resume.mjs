import { spawn } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextCli = path.join(root, "node_modules", "next", "dist", "bin", "next");
const output = path.join(root, "public", "Shourya_Bhardwaj_Resume.pdf");
const port = process.env.RESUME_PORT || "3117";
let server;
let browser;

function latestSourceTime(directory) {
  if (!existsSync(directory)) return 0;
  const stat = statSync(directory);
  if (!stat.isDirectory()) return stat.mtimeMs;
  return Math.max(0, ...readdirSync(directory).map(name => latestSourceTime(path.join(directory, name))));
}

function needsBuild() {
  const buildId = path.join(root, ".next", "BUILD_ID");
  if (!existsSync(buildId)) return true;
  const builtAt = statSync(buildId).mtimeMs;
  return ["src", "content", "next.config.ts", "package.json", ".env.local"].some(file => latestSourceTime(path.join(root, file)) > builtAt);
}

async function runNext(args) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [nextCli, ...args], { cwd: root, stdio: "inherit", windowsHide: true });
    child.once("error", reject);
    child.once("exit", code => code === 0 ? resolve() : reject(new Error(`next ${args[0]} failed (${code})`)));
  });
}

async function waitForServer(url) {
  const deadline = Date.now() + 60000;
  while (Date.now() < deadline) {
    if (server?.exitCode !== null && server?.exitCode !== undefined) throw new Error(`Résumé server exited (${server.exitCode}).`);
    try { const response = await fetch(url); if (response.ok) return; } catch { /* Server is still starting. */ }
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  throw new Error(`Résumé page did not become available at ${url}.`);
}

try {
  let url = process.env.RESUME_URL;
  if (!url) {
    if (needsBuild()) await runNext(["build"]);
    url = `http://127.0.0.1:${port}/resume`;
    server = spawn(process.execPath, [nextCli, "start", "--port", port, "--hostname", "127.0.0.1"], {
      cwd: root, stdio: ["ignore", "pipe", "pipe"], windowsHide: true,
    });
    server.stdout.on("data", chunk => process.stderr.write(chunk));
    server.stderr.on("data", chunk => process.stderr.write(chunk));
    await waitForServer(url);
  }
  browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const response = await page.goto(url, { waitUntil: "networkidle" });
  if (!response?.ok()) throw new Error(`Cannot print résumé: HTTP ${response?.status()}.`);
  await page.emulateMedia({ media: "print", reducedMotion: "reduce" });
  await page.evaluate(() => document.fonts.ready);
  await page.locator("#resume-name").waitFor();
  mkdirSync(path.dirname(output), { recursive: true });
  await page.pdf({ path: output, format: "A4", preferCSSPageSize: true, printBackground: false, displayHeaderFooter: false, tagged: true });
  console.log(`Résumé generated: ${output}`);
} catch (error) {
  console.error(error.message);
  console.error("If Chromium is missing, run: npx playwright install chromium");
  process.exitCode = 1;
} finally {
  await browser?.close();
  if (server && server.exitCode === null) {
    server.kill();
    await new Promise(resolve => { server.once("exit", resolve); setTimeout(resolve, 3000).unref(); });
  }
}
