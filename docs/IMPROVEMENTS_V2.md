# Portfolio refinement — final implementation

Updated 2026-10-29. This pass improves the existing site; its stack, routes, content model and reserved media paths are preserved.

## Motion and interaction
- One lightweight MotionController uses IntersectionObserver and pathname changes for finite route entrances and once-only section reveals. Server HTML is fully visible without JavaScript.
- Nova shows ingress, planning, validation, execution and observation highlights in order. Neurofly shows an odor-field breath, receptor activation, neural/decision signals and a small movement-intent cue. These are explicitly conceptual illustrations, not live simulations or recorded results.
- Architecture stage emphasis follows the semantic ordered pipeline. All sequences finish in under 3 seconds; no infinite idle motion.
- Project media responds to hover/focus with a small lift, scale and border change. Missing-video previews link to case studies; actual video controls are never wrapped in a link or scaled.
- Navigation, buttons, CTAs, native disclosures and resume focus filters use consistent short transitions. Keyboard focus receives the same hierarchy cues as hover.
- Reduced-motion initial/live changes, focus and print settle enhanced states. Native details remain functional when intrinsic-size transitions are unsupported.

## Hierarchy and typography
- Added a self-hosted 24KB Manrope variable Latin WOFF2 with OFL license; no runtime font service or new package dependency. Print uses Arial.
- Refined heading tracking, supporting text measures, section spacing and mobile touch targets.
- Removed repeated Nova/Neurofly activity summaries and repeated About explanations. One compact activity introduces the hands-on Codex workshop attested in the original user brief.
- Creative artwork remains fully contained, with accurate responsive image sizing; no artwork text is cropped for hover effects.

## Resume and evidence
- Four Nova contribution bullets foreground C++20/Python input architecture, structural validation/filesystem authorization, Playwright/observation guards, and defined CMake test targets.
- Two Neurofly bullets describe experimental olfactory control design; ESP32 embodiment remains future work.
- Removed unsupported 27/27 and 15/15 regression totals, one-repair/readback assertions, supposed supplied workshop materials, and claimed application outcomes. Target existence is not presented as a passed Nova test.
- Removed repeated project explanations and redundant freelance bullets. Capability groups remain source-backed.
- Regenerated one-page A4 PDF at 9.5pt project text, selectable and grayscale-friendly. Print-only plain project titles prevent temporary localhost/3117 links. Six real email/external annotations remain.

## Changed implementation files
- src/app/layout.tsx; src/app/template.tsx; src/app/page.tsx; src/app/work/[slug]/page.tsx
- src/components/projects/project-card.tsx
- src/components/sections/site-chrome.tsx; src/components/sections/exploration-list.tsx
- src/components/motion/motion-controller.tsx; project-media.tsx; project-media.css; architecture-flow.tsx
- src/styles/globals.css; src/styles/fonts/manrope-latin-wght-normal.woff2; src/styles/fonts/OFL.txt
- src/content/site.ts
- src/components/resume/resume-view.tsx; resume.css; public/Shourya_Bhardwaj_Resume.pdf
- scripts/motion-check.mjs; package.json
- Source, strategy, design, media, review, QA, PDF, validation, README and progress documentation.

## Validation
Final command/browser outcomes are recorded in docs/VALIDATION.md and docs/PROGRESS.md. Independent visual QA is in docs/QA_REPORT.md; code review in docs/IMPROVEMENT_REVIEW.md; PDF verification in docs/RESUME_REFINEMENT.md. Do not confuse earlier-version scores with this pass's fresh measurements.

## Remaining optional inputs
Nova and Neurofly demo recordings, captions/posters/transcripts, and the professional portrait. Existing intentional fallbacks remain available. Leadership, awards and credentials stay omitted until exact evidence is supplied.

