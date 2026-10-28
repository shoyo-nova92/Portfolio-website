# Shourya Bhardwaj — personal portfolio

A local-first, work-first portfolio featuring Nova and Neurofly, selected visual design, technical explorations, and an interactive printable résumé. Built with Next.js App Router, React, TypeScript, and Tailwind. No database, authentication, CMS, or paid service is required.

## Continue an interrupted session

Tell Codex **continue** in this project. `AGENTS.md` directs every session to read `docs/PROGRESS.md` and resume the earliest unfinished step. `docs/BRIEF.md` preserves the complete original brief. Checkpoints preserve completed work, outstanding tasks, check results, and handoff details. They cannot bypass account usage limits; they let a later session recover context after access resumes.

## Local use

Use Node.js 24 LTS and npm (also supports Node 20.19+ or 22.13+). From this directory:

```sh
npm install
npm run dev
```

Open http://localhost:3000. The page does not need a cloud service or external font connection.

```sh
npm run lint
npm run typecheck
npm run test
npm run build
npm start
```

Browser checks: `npm run test:browser`. First install a supported test browser with `npx playwright install chromium` if Chromium is unavailable. Production build and start should be run sequentially.

The current Next.js ESLint configuration includes plugins whose peer ranges stop at ESLint 9; this project uses ESLint 10 and its full lint run passes. npm may print peer-override warnings during installation. Keep the lockfile and rerun lint when updating these packages.

## Content and evidence

- `src/content/site.ts`: identity, project narratives, capabilities, creative work, and activities.
- `content/explorations/*.md`: local notes using `title`, `description`, and `topic` frontmatter, followed by Markdown.
- `docs/SOURCE_MAP.md`: factual evidence, verification status, omitted claims.
- `docs/CONTENT_STRATEGY.md` and `docs/DESIGN_SYSTEM.md`: editorial and visual decisions.

Only publish claims with a VERIFIED entry in the source map. User-attested intent is not proof of implementation or measured results. Keep unverified credentials/leadership/achievements empty. Do not add an Education section or internship history.

### Add an Exploration

Create `content/explorations/your-note-slug.md`:

```md
---
title: A precise technical question
description: One sentence about the note.
topic: Agent systems
---

A source-backed introduction.

## A useful distinction

The actual observation or design question, without invented results.
```

Supported syntax: paragraphs, `##`/`###` headings, unordered lists, blockquotes, and HTTPS/HTTP inline links. Raw HTML/JSX is intentionally unsupported. Routes and sitemap discover new files at build time; rebuild after content changes.

## Add media

Place files at the reserved paths, then restart development or rebuild production:

- `public/media/nova-demo.mp4`
- `public/media/neurofly-demo.mp4`
- `public/media/shourya-profile.jpg`

Until present, project media renders labeled conceptual architecture previews and the portrait renders a neutral monogram. Videos use native controls and no autoplay. Provide a transcript/captions for speech or information not available in surrounding copy; media components document optional caption/poster paths. Use compressed H.264 MP4 for broad playback support. Portrait should be a square or portrait crop with no sensitive metadata.

Creative work is optional. Add an entry to `creativeWork` only after verifying the asset, title, attribution, and permission. Place assets in `public/media/creative/` and provide descriptive alt text and a source URL. An empty array hides the section. Current artwork titles describe visual-design pieces, not software Shourya built or named clients.

## Résumé PDF

```sh
npm run resume:pdf
```

The generator prints `/resume` through Chromium to `public/Shourya_Bhardwaj_Resume.pdf`. See the script for server startup and browser handling. Rerun after changing résumé content; rebuild production afterward so the download is included. The browser print dialog on `/resume` is another way to save the clean print version. The PDF uses selectable text, real links, and a grayscale-friendly layout.

The generator builds when output is absent or stale, uses a temporary production server on port 3117, and cleans it up afterward. Set `RESUME_PORT` to use a different port, or `RESUME_URL` to print an already-running résumé page. Browser-check base URL can likewise be set with `TEST_BASE_URL`.

## Deployment later

No deployment is performed by this project setup. Push the repository to your GitHub repository when ready, import it into a standard Next.js host such as Vercel, and use `npm run build` as the build command. Standard Node hosting can run `npm start` after a successful build. Commit the lockfile and generated résumé PDF; never commit `.env.local` or secrets.

Copy `.env.example` to `.env.local` for development if needed. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin in the hosting environment before the production build. Until then metadata uses `http://localhost:3000`; no domain has been invented. This setting controls canonical URLs, sitemap and social metadata. Attach a custom domain later through the host's documented DNS flow, update the environment variable, and rebuild. No purchase is required to develop locally.

## Quality records

`docs/QA_REPORT.md` and `docs/REVIEW.md` record browser checks, findings, and limits. `docs/PROGRESS.md` records final command outcomes and any remaining work. Do not infer a Lighthouse score from successful compilation: only measured results count.
