# Final validation

Date: 2026-10-29, Asia/Calcutta. Final refinement validation (supersedes the earlier-version run). Tested locally on Windows with Node 24.18.0, Next.js 16.4.3, React 19.3.1.

## Commands

- `npm install`: completed, zero reported vulnerabilities. ESLint10 peer-range warnings are recorded in README and docs/REVIEW.md; no lint failures.
- `npm run lint`: exit 0, no errors or warnings.
- `npm run typecheck`: exit 0.
- `npm run test`: three tests passed.
- `npm run build`: exit 0; homepage, both project pages, explorations index/two articles, resume, 404 and metadata routes prerendered.
- `npm run resume:pdf`: exit 0; dedicated generation server cleaned up.
- `TEST_BASE_URL=http://localhost:3001 npm run test:browser`: exit 0; 28 route/viewport cases passed, zero failures, zero browser runtime errors.
- `TEST_BASE_URL=http://localhost:3001 npm run test:motion`: exit 0; five finite-sequence/accessibility checks passed.

The environment-variable syntax above is shell-neutral notation. PowerShell: `$env:TEST_BASE_URL='http://localhost:3001'; npm run test:browser`.

## Browser coverage

Seven content routes at 1440, 1280, 768 and 390px. HTTP200, one main landmark/h1, title, complete social image and route title, no horizontal overflow, no broken images, safe external links, axe WCAG A/AA checks. Additional assertions cover keyboard skip link, reduced-motion scroll behavior, collected internal links including PDF, native technical disclosure keyboard toggle, resume filtering, print restoration of all experience, hidden print controls, and unknown route/project/note HTTP404.

Independent manual/visual QA is in docs/QA_REPORT.md. Saved screenshots and machine-readable results are in ignored test-results/; rerun the script to reproduce them. Real demo playback/caption synchronization awaits Shourya's actual videos and captions. Present and absent media handling was reviewed in source; missing-media rendering was browser-tested.

## Resume

`public/Shourya_Bhardwaj_Resume.pdf`: one A4 page, 2,618 extractable characters and six real email/external link annotations. No localhost/127.0.0.1/3117 annotations. Name, both projects, professional email and selected implementation terms checked by text extraction. Latest PDF rendered with pypdfium2 and visually inspected: no clipping, overlap or decorative background. Print keeps readable 9.5pt project text and restores all content after selecting a focus filter. Initial two-page spill was fixed through spacing/margins; print-only plain project titles remove temporary case-study links. Details: docs/RESUME_REFINEMENT.md.

## Lighthouse

Lighthouse 13.6.0, default mobile lab configuration, local production homepage at http://localhost:3001:

- Performance: 100
- Accessibility: 100
- Best Practices: 100
- SEO: 100
- Largest Contentful Paint: 1.0s
- Cumulative Layout Shift: 0

Fresh refinement report: ignored `test-results/lighthouse-refinement.json` (the older `lighthouse.json` is the earlier-version report). These are one local lab run, not measured field performance or a guarantee for a future host/network. No score is inferred from compilation. Performance checks used real functionality with no disabled content.

## Review repairs

- Removed redundant header accessible label causing axe label-content-name mismatch.
- Restored complete route-specific Open Graph/Twitter metadata with a shared helper; final browser assertions confirm emitted tags on every route.
- Displayed full landscape creative artwork instead of cropped portrait thumbnails.

No known unresolved high- or medium-severity finding. ESLint upstream plugin peer ranges are the documented low-priority compatibility issue.

## Refinement-specific QA

- Motion checks assert finite bounded Nova/Neurofly signal effects, no replay after scroll-back, readable semantic flows, initial and live reduced-motion settling, and fully visible no-JavaScript mobile content.
- Independent QA recorded 31 checks, including 24 route/viewport combinations, card keyboard focus/activation, native disclosure open-close-open, nested project navigation, filters/print and visuals. See current refinement section of docs/QA_REPORT.md.
- Review found new media-link accessible-name mismatch; lead removed redundant labels. Final production axe matrix passes. Old internal V2 documentation was replaced with the actual verified change report.
- Unsupported personal test-count claims were removed. Nova test targets are described as defined targets, not measured pass totals. Workshop attendance/month/topics remain explicitly primary-attested by the user's original brief, without invented supporting files or affiliation.
- Added the documented root `data-scroll-behavior="smooth"` hint so Next.js can manage route scrolling while keeping intentional hash scrolling. Source: https://nextjs.org/docs/messages/missing-data-scroll-behavior. Final core checks and browser suites were rerun after this compatibility adjustment.
