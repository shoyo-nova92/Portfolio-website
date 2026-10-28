# Browser quality assurance

Completed 2026-10-29 (Asia/Calcutta). Read-only implementation review. Tested the locally running site at `http://localhost:3000` with Chromium/Playwright and visually inspected captured desktop/mobile layouts and the rendered résumé PDF page.

## Result

No unresolved visual or interaction defect was found in the tested scope. The initial accessible-name defect and low-priority artwork crop issue were fixed and rechecked.

## Evidence and checks

- `test-results/browser-results.json`: the lead's automated suite records **28 passing route/viewport combinations**, with no failures or browser runtime errors. Seven routes (home, both projects, Explorations index, both notes, résumé) were checked at 1440, 1280, 768, and 390px. The suite checks HTTP status, one main/one h1, page title, horizontal overflow, broken images, safe external-link attributes and axe WCAG A/AA rules. This report does not equate automated checks with complete WCAG conformance.
- Independently reran `node test-results/qa-check.mjs` on 2026-10-29: **24 route/viewport combinations** passed HTTP 200, no horizontal overflow, no broken image, and one appropriate h1. Routes were home, Nova, Neurofly, Explorations index, validation note and résumé at all four required widths. Results and screenshots are under `test-results/qa-*`.
- Visually inspected desktop and 390px homepage, Nova mobile, Neurofly desktop, Explorations mobile, validation note desktop, résumé mobile, print preview, and the rendered actual one-page PDF image `test-results/pdf/resume-page-1.png`. Typography scales without overlap; work cards stack; architecture becomes a readable ordered vertical list; navigation stays available in two compact mobile rows; contact email fits. Portrait absence uses a deliberate monogram.
- Keyboard: first Tab reaches “Skip to content”; Enter transfers focus to `main`. Independently checked the first Nova technical disclosure with two Enter presses: `open` changed **true → false → true**, with focus retained on the summary. Its initial open state explains the older script's `open: null` log after the first toggle; that was not a failure to open.
- Reduced motion: emulated reduced-motion preference produces `scroll-behavior: auto`; media previews are static and do not require animation.
- Résumé interaction: All work, AI systems, Neural simulation and Creative buttons update `aria-pressed` and show the corresponding projects/experience. Print emulation after selecting Creative restores Nova, Neurofly and creative experience, while hiding navigation and toolbar controls.
- PDF download returned HTTP 200. The actual rendered PDF page is grayscale-friendly, readable, and free of clipped text or overlapping sections. The lead owns final PDF regeneration, selectable-text/link inspection, and freshness verification.
- Unknown general route, `/work/unknown`, and `/explorations/unknown` returned HTTP 404 with the designed recovery page.
- Missing media: Nova and Neurofly show architecture illustrations explicitly labeled “Architecture preview” and “Conceptual illustration”; Nova live inspection confirms zero video elements when its recording is absent. There are no fake play controls or broken players. The home screenshots show all four actual creative thumbnails loaded.
- Contact/social destinations use the supplied professional email and GitHub/LinkedIn/X URLs. The automated suite checks safe new-tab attributes. Mail sending and social-account actions were not performed.

## Findings

### Resolved P2 — Brand link accessible name did not match visible content

- Route: shared header, all routes.
- Viewport: all required widths.
- Reproduction: run axe against a page with the original header brand `aria-label`.
- Expected: accessible link name contains its visible label.
- Actual initially: axe reported serious `label-content-name-mismatch` on `.brand`, repeated in all 28 combinations.
- Owner: frontend builder / lead.
- Resolution: lead removed the redundant `aria-label`; the visible name supplies the accessible name and decorative monogram remains hidden from assistive technology. The subsequent 28-case accessibility matrix passed.

### Resolved P3 — Creative thumbnails cropped some artwork lettering

- Route: `/`, Selected creative work.
- Viewport: desktop and 390px.
- Reproduction: inspect the four portrait-format thumbnails, especially LinkScope and Identix.
- Expected improvement: the strongest framing should preserve important composition/text, or use a full-artwork presentation.
- Actual: portrait crops of landscape promotional compositions cut some lettering at the edges. The real artwork loads and the labeled source links expose the originals; this does not block browsing or misrepresent the titles below.
- Owner: design system / frontend builder.
- Resolution: lead changed the gallery to landscape framing with `object-fit: contain`. QA captured and inspected updated `qa-creative-final-1440.png` and `qa-creative-final-390.png`; all four artworks load with complete compositions visible. The observed live gallery used two columns at both sampled widths. No implementation change was made by QA.

## Verification limits

- Real Nova/Neurofly MP4s, captions, transcripts and portrait were not supplied. Their absent-file states were tested; real playback, synchronization and portrait crop cannot be verified until those files exist.
- No Safari, Firefox, physical-device touch test, screen-reader session, or formal accessibility certification was performed.
- The lead's final local production suite passed 28/28 after fixes, including metadata and interaction assertions. The lead reports Lighthouse 13.6 local mobile lab scores of Performance 100, Accessibility 100, Best Practices 100 and SEO 100, with LCP 0.9s (`test-results/lighthouse.json`). These are local laboratory results, not deployed or real-user measurements; this QA agent did not independently run Lighthouse.
- Public external page reachability can be affected by service login/anti-bot restrictions; this QA verifies correct supplied destinations and safe link behavior rather than account ownership or external service availability.
- Final production-build and metadata repair verification belong to the lead and are recorded separately. Main interaction QA used the live local development server after the shared metadata fix; the final gallery recheck used the current local server after the gallery fix.
