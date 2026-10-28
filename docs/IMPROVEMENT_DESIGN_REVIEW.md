# Design and motion review — 2026-10-29

Scope: reviewed the existing implementation, without changing application files. This is an improvement pass, not a rebuild.

## Existing work to preserve

Current disk already contains a route template, CSS page/hero entrances, view-timeline reveals, hover treatments, progressive native-details transitions, infinite SVG pulses and revised activity content. Preserve the layout, local media presence checks, semantic flow lists, native controls, source-backed copy, and restrained charcoal/sage palette. The durable checkpoint predates some of this work.

## Findings and recommended changes

1. **Motion is generic rather than sequential.** `project-media.css` currently pulses every matching circle and breathes the whole illustration indefinitely. Neither diagram communicates its specific processing chain. Replace blanket selectors with named SVG groups/signals and finite, staged runs when the illustration first enters view. Nova should show ingress → plan/validate → execution → observed outcome. Neurofly should show odor field → paired receptors → neural signal → movement intent. Keep “Architecture preview / Conceptual illustration” visible; use no measured trajectories or simulated results.
2. **Reveal behavior should be stable.** Existing `animation-timeline: view()` runs backward as visitors scroll back and can leave sections partially transparent. Replace this with one lightweight route-aware IntersectionObserver controller. Observe only explicit targets, reveal once and unobserve. No animation library. Existing route template may retain a short entrance; avoid duplicating the same large transform on parent and children.
3. **Reduced motion needs a final override.** The global reduce rule currently appears before later appended transitions, making the order harder to audit. Move consolidated reduced-motion/print overrides after motion definitions. Stop animations and remove transforms and transient opacity states immediately when preference changes. The diagrams remain fully understandable at rest.
4. **Hover and keyboard should agree.** Cards only react to `:hover`; pair the same hierarchy/border/CTA treatment with `:focus-within`. Scope hover-only scaling to `(hover: hover) and (pointer: fine)` so touch does not stick. Keep scale ≤1.015 and translation ≤4px. Avoid scaling native videos or clipping their controls. Use transform/color/border transitions; remove row padding transitions that reflow text.
5. **Typography needs a real loaded face.** The final stack names unloaded Inter and explicit SF Pro names. Prefer one self-hosted Manrope variable Latin WOFF2 (weights 400–650, no italic) with its OFL license and `font-display: swap`, or an equally licensed open font. Integrate through `next/font/local` after reading the installed font guide, or a local `@font-face`. No runtime font service, build-time download, or additional animation dependency. Fallback: `"Segoe UI", system-ui, sans-serif`. Keep Arial in the ATS print stylesheet.
6. **Spacing should be quieter, not larger.** Maintain the 1248px page grid and 760px reading width. Give supporting copy a 55–65ch measure. Reduce repeated full-width rules between short supporting sections; keep strong separation around selected engineering work. Preserve large typography with mobile heading wrapping checked after the font changes. Keep 44px touch targets in the mobile nav.
7. **Activity already no longer repeats Nova/Neurofly.** The current selected activity data covers workshop, independent creative work and technical notes. Content review should confirm the new workshop-specific details and metrics before publication. Since creative work and Explorations already appear above, make activity compact and emphasize genuinely new workshop/practice context; omit a section if the remaining verified material cannot add substance.

## Wave 2 ownership and contracts

### Frontend/design builder

Own `src/styles/globals.css`, `src/components/ui/`, homepage/chrome/template integration, font integration, and `docs/DESIGN_SYSTEM.md`, under lead coordination. Preserve current route/content architecture. Add explicit attributes to elements to animate:

- `data-reveal` on section heading groups, project cards, creative cards, note rows and About blocks. Optional `data-reveal-delay="0|1|2"` for a short local stagger; do not delay meaningful content more than ~150ms.
- `data-sequence` on each conceptual project figure and each architecture flow. The controller adds `data-motion-state="entered"` when first visible.
- No default hidden classes in server HTML. Motion is enhancement; no-JS pages must show all content.

Use shared timing tokens: fast 180ms, interaction 300ms, reveal 560ms, easing `cubic-bezier(.22,1,.36,1)`. Initial translation 12–18px maximum; no blur filters needed. Button press can use scale .985 for ~100ms; hover raise 1–2px and arrow displacement 3px. Nav underline/color should also react to focus and current route. Existing smooth scrolling stays, with reduced-motion `auto`.

### Motion/media builder

Own `src/components/motion/`, including a new client `MotionController` exported from `motion-controller.tsx`. Render the controller once in layout or template; it returns null and discovers targets within `main`. Use `usePathname` to reinitialize after route navigation, a single observer per route, cleanup on unmount, and preference-change handling. Keep on-screen/keyboard-focused content visible; reveal pending targets on intersection or focus. Do not hide nodes until the observer is successfully initialized. A failure or disabled JS leaves all copy visible. Settle all pending nodes for print.

For sequences, keep existing semantic `ArchitectureFlow({steps,label})` and `ProjectMedia({project,variant})` APIs. Add per-stage CSS custom index or named class to existing markup. A finite 1.8–2.8s sequence may play once on entry and again on explicit hover/focus within a card, with rest-state labels/geometry always visible. Prefer stroke-dashoffset, opacity and small SVG transforms on named paths/groups. Do not animate the whole video shell. SVG remains decorative; ordered stage labels remain semantic.

### Résumé/content builder

Own content and résumé changes separately; do not derive completed results from diagram motion. Resume print remains a single full-content rendering independent of filters, and should retain the plain ATS font and grayscale presentation. Source review must decide whether new workshop claims and regression metrics are verified.

## Required QA after integration

- Test every route at 1440/768/390px (retain 1280px existing suite).
- Scroll through once, scroll back: content stays fully visible; route changes reset only new route targets.
- Disable JavaScript and emulate reduced motion: all copy, diagrams and controls remain present and usable.
- Change reduced-motion preference while a sequence is active: animation stops and labels remain legible.
- Keyboard focus into a not-yet-revealed card must expose it immediately; focus states and card responses match hover.
- Native details must open/close by Enter/Space without broken focus or hidden text; unsupported transition browsers retain instant native behavior.
- Check touch viewport for stuck hover, card/media overflow, and heading wraps after font loading. No console errors or layout shifts from motion.
- Rebuild and regenerate/inspect the PDF. Update final QA documents with actual observed behavior rather than inferred support.

Review checks: source inspection only; no browser or build checks were run by this reviewer in Wave 1.
