# Code and content review

Reviewed 2026-10-28. Reviewer role: read-only implementation; this document is the only tracked file authored by the reviewer.

## Actionable findings

### P2 — Project and article shares lose Open Graph images

Locations: `src/app/work/[slug]/page.tsx`, `src/app/explorations/[slug]/page.tsx`, `src/app/explorations/page.tsx`; shared defaults in `src/app/layout.tsx`.

Reproduction: fetch the rendered HTML for `/work/nova` and `/explorations/validation-is-not-verification`. The route metadata emits its own `openGraph` object but does not include the shared image. Live HTML inspection found no `og:image` on either route, while the homepage does emit it. Nested metadata is replaced at route boundaries. Social previews for project/note URLs therefore lack the intended portfolio image.

Recommended fix: define shared social metadata and include its image/site/type fields in every route's Open Graph object. Set the Twitter title and description from each route's content too; currently all inspected subroutes retain the homepage Twitter text. The résumé similarly inherits homepage social text. Verify emitted HTML after the change.

Status: RESOLVED on 2026-10-29. The lead added `src/lib/metadata.ts`, supplying complete image/site/type and route-specific Twitter metadata on project, article, explorations and résumé routes. The homepage now inherits complete root social metadata. Production browser tests assert `og:image` exists and Twitter title matches the page title for all seven routes at all four widths; 28 checks passed.

### P3 — ESLint major version is ahead of bundled plugin peer support

Location: `package.json`, `package-lock.json`.

`eslint@10.13.0` is used with Next's bundled `eslint-plugin-import@2.32.0`, `eslint-plugin-jsx-a11y@6.10.2`, and `eslint-plugin-react@7.37.5`, whose peer ranges stop at ESLint 9. `npm ci --ignore-scripts --dry-run` succeeds, but prints peer-override warnings. The lead's existing lint run passed, so this is compatibility debt rather than a demonstrated functional failure. Keep the lockfile and recheck lint when updating this toolchain; resolve once plugin support catches up or use the compatibility version deliberately.

## Reviewed areas

- Shared typed personal/project content against `docs/SOURCE_MAP.md`: user-attested intent is distinguished from inspected Nova implementation. No fake dates, benchmarks, clients, awards, certification claims or completed robot integration were found. The two engineering projects remain Nova and Neurofly. Creative artwork is separately labeled visual design.
- Routes and local note loading: static parameter generation, explicit unknown-slug handling, canonical origin configuration, semantic titles and headings, local Markdown restriction. Raw HTML and executable URL schemes are not evaluated by the note renderer.
- Contact/social links: supplied identity URLs and email are used; external links include `noopener noreferrer` and open in a new tab.
- Media: absent files use labeled conceptual previews; server-only author-controlled file existence checks prevent broken missing-asset requests. Real video uses controls, no autoplay, `preload="none"`, optional captions/transcript/poster. Captions still need to be supplied with future real speech recordings.
- Accessibility in source: semantic landmarks, skip link and focus target, native disclosures, labeled ordered architecture list, visible keyboard focus, reduced-motion override. Browser/axe verification belongs to the independent QA report.
- Résumé: filter buttons use pressed state/live announcement, print CSS restores all filtered content and hides controls. Empty unsupported credentials/leadership/achievement groups do not render. PDF generation script checks stale builds and cleans up its owned browser/server.
- Performance/architecture: server components predominate; only résumé interaction is client-side. No unnecessary backend, animation library, auth, database, remote font loading, or prohibited infrastructure found. Images use Next's responsive optimization.

## Validation performed by reviewer

- Read source, configuration, source-map and content strategy; inspected generated live metadata on `/`, `/work/nova`, `/explorations/validation-is-not-verification`, `/resume`.
- Ran `npm ci --ignore-scripts --dry-run`: exit 0 with the peer warnings recorded above. This is a dependency-resolution dry run, not a clean installation test.
- Did not independently run a production build, generate a PDF, assign Lighthouse scores, or repeat the QA agent's browser matrix. Their outcomes must be recorded by their owners.

No high-severity code/content issue was identified in this review. The P2 metadata finding should be repaired and rechecked before completion.
