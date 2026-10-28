# Refinement code and content review

Reviewed 2026-10-29. Implementation remained read-only; only review documentation and an ignored focused-check script were authored by this reviewer.

## Findings

### Resolved P2 — Project-media links replaced their visible label

Location: `src/components/projects/project-card.tsx:10`.

The new clickable architecture previews initially used an `aria-label` that omitted their visible concept text. A focused live axe scan of `/` reported serious `label-content-name-mismatch` violations on both `.project-media-link` anchors. The lead removed the redundant labels. The same focused live scan was rerun after the edit and returned an empty violations array. The conditional rendering still keeps real native video controls outside links.

### P3 documentation cleanup — Old V2 summary contradicts the audited source map

Location at review time: `docs/IMPROVEMENTS_V2.md:17` and `:23`.

The pre-existing summary still says workshop materials were supplied and regression-test results were added. The current source map and public content correctly remove these unsupported claims. Replace the stale summary with the final actual change report before handoff; the lead has accepted ownership of this cleanup. This is internal documentation drift, not a remaining public claim.

No unresolved high- or medium-severity implementation issue was identified in this review's scope. Lead follow-up: the stale V2 summary P3 was resolved by replacing docs/IMPROVEMENTS_V2.md with the actual implementation and evidence limits. Final production browser matrix passed 28/28 and motion checks passed 5/5 after the media-link repair.

## Source inspection

- `motion-controller.tsx`: the single null client component reinitializes on pathname changes, uses one IntersectionObserver and one initialization frame, unobserves entered targets, and cleans the observer, mutation observer, frame, WAAPI entrance, preference listener, focus listener and print listener on cleanup. Mutation observation is child-list-only, so controller attribute/style writes do not trigger a feedback loop.
- Server HTML is not hidden by an observer-dependent pending state. The route entrance and reveal/sequence effects are finite. Static semantic labels and architecture lists remain available when JavaScript or motion is disabled.
- Reduced-motion preference changes cancel the WAAPI entrance and settle observed nodes. Final CSS preference/print overrides disable CSS effects, including intrinsic native-details transitions. Focus settling removes transient reveal states without moving keyboard focus.
- Named Nova and Neurofly SVG signals communicate conceptual processing order; their captions remain explicitly architectural/conceptual. No diagram is presented as a measured simulation, live execution or completed robot. No infinite animation or view-timeline rule remains in the inspected application source.
- Project-card focus-within treatment parallels fine-pointer hover, and the actual-video branch avoids linked controls or scaling them. Creative artwork remains contained rather than cropped. Native disclosures retain native summary semantics and keyboard behavior.
- Manrope is loaded from a repository-local WOFF2 through `next/font/local`; its OFL license is present. No build-time font-service request or animation-library dependency was added. Print retains Arial and simple grayscale styling.
- The résumé uses the audited contribution arrays, keeps Nova prominent, describes Neurofly as experimental design/exploration and ESP32 as future direction, renders activity only when nonempty, and restores filtered content in print. Focus controls retain pressed-state and live announcement semantics.
- `docs/SOURCE_MAP.md` distinguishes inspected code existence from passed tests and primary-builder attribution. Unsupported numeric regression results and supplied-deck/application claims are absent from public source copy. Workshop month/topics are tied to the original user's explicit primary attestation, not an invented credential or affiliation.
- Shared route metadata still supplies complete Open Graph images and route-specific Twitter titles. Existing semantic landmarks, safe external-link attributes and author-controlled media-path checks remain intact.

## Verification performed

- Read implementation, new request, source map, content-review output, font license, metadata helper and PDF generation workflow.
- Focused live Chromium/axe WCAG A/AA scan on homepage: reproduced two accessible-name violations, then independently confirmed zero violations after the lead's fix. The disposable script is `test-results/review-focus.mjs`.
- Searched application source for the unsupported test totals, explicit SF Pro names, infinite animation and view-timeline rules; none remained in public source.
- Did not independently repeat the full viewport matrix, production build, PDF generation or Lighthouse measurement. Their final results belong to the lead and QA/PDF owners; this report does not infer those checks from source inspection.

## Remaining verification limits

Actual videos/captions/portrait were not supplied, so playback synchronization and portrait framing still await those real assets. Cross-browser and physical-device behavior is not independently certified by this code review. QA should retain specific runtime coverage for no-JS content, nested route changes, live reduced-motion changes, accordion transitions and filtered résumé print restoration.
