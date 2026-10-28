# Improvement content review

Reviewed 2026-10-29. Ownership: shared content and evidence only; no UI changes.

## Findings and repairs

- Pre-existing `resumeProjectBullets` mixed engineering contribution with unsupported “27/27 / 15/15 / 15/15” results, one-repair and readback claims. The source map contained no exact supporting log/commit. Replaced them with four specific Nova bullets whose component/decision existence was freshly inspected through connected GitHub file reads.
- Nova now foregrounds the C++20/Python input/planning runtime, OpenWakeWord/faster-whisper integration, structural validation/filesystem authorization, Playwright plus observation/retry guards, and CMake test targets. Target existence is not presented as a passed test or benchmark.
- Neurofly now has two concise experimental contribution bullets. They describe olfactory sensing-to-movement design and bilateral/competing-odor exploration. ESP32 is explicitly future embodiment, not completed or claimed ongoing hardware integration.
- Repeated project/freelance/writing activity summaries are replaced by one concise workshop activity. Original user brief §12 explicitly attests workshop attendance/month/topics. A previous source-map assertion about a supplied workshop deck and commands file had no inspectable path and was removed. No exact day, credential, affiliation, or claimed effect on Nova is published.

## Wave 2 content contract

`src/content/site.ts` preserves existing exports:

- `resumeProjectBullets: Record<Project["slug"], string[]>`: four Nova contribution bullets, two Neurofly design/exploration bullets.
- `resumeActivities: {title:string;meta:string;bullets:string[]}[]`: one primary-attested workshop item, one concise bullet. Resume builder can omit the activity from print if required to preserve readable one-page layout; do not replace it with invented history.
- `activities: {title:string;description:string;kind:string}[]`: one workshop entry. Frontend should use a compact selected-activity treatment and hide the section if empty in future.
- Existing capability groups remain source-backed. No proficiency percentages, new tools, certifications, awards, clients or completion metrics added.

## Fresh inspected evidence

Exact GitHub repository `shoyo-nova92/Nova-AI`: full `CMakeLists.txt` and `src/plan_validator.cpp`; full `src/branch3_runtime.cpp`; `src/primitive_execution_engine.cpp` lines 1–170; `python/part_a_runtime.py` and `python/browser_agent.py` lines 1–90. Exact blob identifiers and publication limits are recorded in `docs/SOURCE_MAP.md`.

No Nova build/tests or Neurofly execution were run during this review. No independent workshop material was found in the supplied project. Full app build/PDF fit and browser verification belong to the implementation/integration waves.

## Checks

- `npx eslint src/content/site.ts`: passed, exit 0.
- `npx tsc --noEmit`: passed, exit 0.
- No claim of final app/PDF QA is made here.
