# Design system

The portfolio uses a charcoal editorial surface with large, controlled typography. Work appears directly after the identity statement. The two major projects receive equal visual weight; subsequent sections are quieter and narrower. Case studies lead with a plain-language explanation before architecture and technical disclosure.

## Reference interpretation

Inspected https://seanrobobrien.com/ and https://aliabdaal.com/ on 2026-10-28. The former emphasizes immediate visual work and direct identity; the latter combines a clear personal introduction with browseable content. These inform hierarchy only. No layout, branding, assets, typography, or code was copied.

## Tokens

- Canvas `#0d0e0d`; surface `#141614`; raised surface `#1a1c19`.
- Primary text `#efefeb`; secondary `#aaada6`; quiet text `#898e85`.
- Single muted sage accent `#b9c8ac`; border `#2b2e29`; stronger border `#444a3e`.
- Self-hosted Manrope variable Latin (24KB WOFF2) through `next/font/local`, with Segoe UI/system fallback and the bundled SIL OFL license. Print uses Arial. Cascadia Code/Consolas remains for technical labels. No external font request or build-time font download.
- Maximum page width 1248px, fluid side gutters 24–80px, section spacing 80–152px.
- Main hero 46–82px, case-study title 56–112px, section title 31–48px. Body 14–16px; short technical labels 9–10px.
- 3–5px corner radius; mostly square editorial composition. No glows, colored gradients or decorative shadows.

## Shared components

`src/components/ui/primitives.tsx` exports:

- `Container({ children, className? })`
- `Eyebrow({ children, className? })`
- `SectionHeading({ eyebrow, title, description?, children? })`
- `Arrow({ diagonal? })`, decorative SVG hidden from assistive technology
- `ButtonLink({ href, children, secondary?, className?, external? })`
- `Tag({ children })`

External ButtonLink destinations receive `target="_blank"` and `rel="noopener noreferrer"`. Labels must communicate destination. Use descriptive labels for every stand-alone icon.

## Composition classes

`globals.css` supplies header/nav/footer; hero; section heading; two-column work grid; project cards; notes rows; activity list; About split; portrait fallback; contact; case study overview/sections/technical disclosures; reading layout; 404; base accessible diagram list. Motion/media components may add scoped styles.

The header is sticky with an opaque dark surface. On mobile it becomes two compact rows, keeping all destinations visible without a JavaScript menu. Main work panels collapse to a single column below 768px. About portrait remains secondary and becomes a small square below the prose. Case study section labels collapse above their content. Architecture lists become vertical on mobile.

## Accessibility and interaction

Semantic landmarks and headings belong to route components. Shared styles include a visible skip-link state, high-contrast keyboard focus, 44px minimum links where navigation/interaction is dense, accessible native details, and stable media ratios. Keep muted text for secondary information, never use borders alone to communicate status.

Interactions share 180/300ms timing and a restrained ease-out. Fine-pointer hover and keyboard focus-within add a 3px/1.005 project-media response; actual video controls stay unlinked and unscaled. Native details progressively animate intrinsic height where supported. One null client controller handles per-path 340ms entrance, once-only 560ms reveals and finite named diagram sequences (under three seconds). Semantic diagrams remain complete at rest. No content is hidden in server HTML. Reduced-motion initial/live changes, focus and print settle effects; no infinite background motion is used.

## Media integrity

Architecture visuals are conceptual illustrations and must be identified as such rather than imitating a live application screenshot. Reserved real video assets replace these previews without changing layout. Never generate fake creative work or project-result imagery.

## Verification

Integration is complete. Browser verification passed at 1440, 1280, 768, and 390px; see docs/QA_REPORT.md for scope. The final creative gallery uses two landscape columns on desktop and at 390px, collapsing to one below 380px, with contained original artwork so text is not cropped. This supersedes the initial four-column thumbnail concept.
