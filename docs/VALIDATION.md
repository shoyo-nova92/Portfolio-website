# Final validation

Date: 2026-10-29, Asia/Calcutta. Tested locally on Windows with Node 24.18.0, Next.js 16.4.3, React 19.3.1.

## Commands

- `npm install`: completed, zero reported vulnerabilities. ESLint10 peer-range warnings are recorded in README and docs/REVIEW.md; no lint failures.
- `npm run lint`: exit 0, no errors or warnings.
- `npm run typecheck`: exit 0.
- `npm run test`: three tests passed.
- `npm run build`: exit 0; homepage, both project pages, explorations index/two articles, resume, 404 and metadata routes prerendered.
- `npm run resume:pdf`: exit 0; dedicated generation server cleaned up.
- `TEST_BASE_URL=http://localhost:3001 npm run test:browser`: exit 0; 28 route/viewport cases passed, zero failures, zero browser runtime errors.

The environment-variable syntax above is shell-neutral notation. PowerShell: `$env:TEST_BASE_URL='http://localhost:3001'; npm run test:browser`.

## Browser coverage

Seven content routes at 1440, 1280, 768 and 390px. HTTP200, one main landmark/h1, title, complete social image and route title, no horizontal overflow, no broken images, safe external links, axe WCAG A/AA checks. Additional assertions cover keyboard skip link, reduced-motion scroll behavior, collected internal links including PDF, native technical disclosure keyboard toggle, resume filtering, print restoration of all experience, hidden print controls, and unknown route/project/note HTTP404.

Independent manual/visual QA is in docs/QA_REPORT.md. Saved screenshots and machine-readable results are in ignored test-results/; rerun the script to reproduce them. Real demo playback/caption synchronization awaits Shourya's actual videos and captions. Present and absent media handling was reviewed in source; missing-media rendering was browser-tested.

## Resume

`public/Shourya_Bhardwaj_Resume.pdf`: one A4 page, 2,435 extractable characters and eight link annotations. Name, both projects and professional email checked by text extraction. Latest PDF rendered with pypdfium2 and visually inspected: no clipping, overlap or decorative background. Print uses full content even after selecting a focus filter.

## Lighthouse

Lighthouse 13.6.0, default mobile lab configuration, local production homepage at http://localhost:3001:

- Performance: 100
- Accessibility: 100
- Best Practices: 100
- SEO: 100
- Largest Contentful Paint: 0.9s

Raw report: ignored `test-results/lighthouse.json`. These are one local lab run, not measured field performance or a guarantee for a future host/network. No score is inferred from compilation. Performance checks used real functionality with no disabled content.

## Review repairs

- Removed redundant header accessible label causing axe label-content-name mismatch.
- Restored complete route-specific Open Graph/Twitter metadata with a shared helper; final browser assertions confirm emitted tags on every route.
- Displayed full landscape creative artwork instead of cropped portrait thumbnails.

No known unresolved high- or medium-severity finding. ESLint upstream plugin peer ranges are the documented low-priority compatibility issue.
