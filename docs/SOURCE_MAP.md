# Source map and publication decisions

Checked 2026-10-28. Public copy is centralized in `src/content/site.ts` and `content/explorations/`.

## Verification policy

`VERIFIED — primary attestation` means the real person supplied the fact or project direction in the brief (`docs/BRIEF.md`). It supports identity, interests, intended architecture and conservative descriptions, but does not independently prove that a subsystem works. `VERIFIED — inspected source` means a linked repository file or creative artifact was read or visually inspected. Code existence is not a successful execution test. Only claims in these two categories are published. Claims requiring independent evidence (credentials, competition ranking, dates, affiliations) are omitted until checked. Never silently promote a design goal into a completed result.

## Identity and positioning

- Claim: name Shourya Bhardwaj, professional email contact.shourya92@gmail.com; GitHub, LinkedIn and X identity URLs. Source: brief §2, §4. Status: VERIFIED — primary attestation. Links: [GitHub](https://github.com/shoyo-nova92), [LinkedIn](https://www.linkedin.com/in/shourya-bhardwaj-266072343/), [X](https://x.com/ShouryaBha70736). GitHub public profile also read and identifies Shourya. LinkedIn returned 999, X 403; their links are user-authorized identity links, not independently inspected profile credentials.
- Claim: work-first builder positioning, interests in AI agents, automation, intelligent systems and computational neuroscience. Source: brief §1–2, §8–9, §13. Status: VERIFIED — primary attestation. Hero/about/summary contain no achievement metric or credential.
- Claim: Nova primary builder. Source: brief §8 explicitly identifies Shourya as primary/sole builder. Status: VERIFIED — primary attestation. Public wording chooses “Primary builder” rather than independently asserting sole authorship.

## Nova

Exact public repository [shoyo-nova92/Nova-AI](https://github.com/shoyo-nova92/Nova-AI) returned from connected GitHub repository search and inspected via Git tree plus file reads. Inspected tree SHA: `a4d81f1c42de25308bf40c33c988ed80f951f7a6`. Publication does not imply the repository was built/run in this task.

- Claim: local-first AI desktop assistant designed to connect human intent to planning, validation, execution and verification. Source: brief §8 and inspected runtime organization. Status: VERIFIED — primary attestation and inspected source for component existence. Public copy consistently says “designed to” / “in development”.
- Claim: C++ runtime and CMake build configuration. Evidence: [CMakeLists.txt](https://github.com/shoyo-nova92/Nova-AI/blob/main/CMakeLists.txt), first 100 lines inspected; C++20 declared, executable lists normalization, routing, planning, execution, context and state source files. Status: VERIFIED — inspected source.
- Claim: Python voice components, OpenWakeWord, faster-whisper. Evidence: [python/part_a_runtime.py](https://github.com/shoyo-nova92/Nova-AI/blob/main/python/part_a_runtime.py), first 100 lines inspected; imports OpenWakeWord Model and faster_whisper WhisperModel and establishes voice states. [python/stt_engine.py](https://github.com/shoyo-nova92/Nova-AI/blob/main/python/stt_engine.py) read fully. Status: VERIFIED — inspected source. The standalone STT engine uses `small`; no public Large-v3 claim is made.
- Claim: input normalization/classification, multi-step planning, context, state and test components exist. Evidence: inspected recursive Git tree and CMake target source list; files `src/input_normalizer.cpp`, `src/request_classifier.cpp`, `src/goal_decomposer.cpp`, `src/multistep_pipeline.cpp`, `src/state_manager.cpp` present. Status: VERIFIED — inspected source for existence; no coverage, performance or end-to-end success claims.
- Claim: structural plan validation checks step identifiers, resolved operations and context references. Evidence: [src/plan_validator.cpp](https://github.com/shoyo-nova92/Nova-AI/blob/main/src/plan_validator.cpp) read fully (blob `0151dfed4edc2237dbf71311ad8dde6b5471d78e`). Status: VERIFIED — inspected source. Public copy distinguishes structural validity from task success.
- Claim: filesystem path authorization and structured failure results in execution layer. Evidence: [src/primitive_execution_engine.cpp](https://github.com/shoyo-nova92/Nova-AI/blob/main/src/primitive_execution_engine.cpp), first 100 lines inspected (blob `cbe845582fab136e31da0c6145c71973d770368f`). Status: VERIFIED — inspected source. Does not claim an audited security boundary.
- Claim: Python Playwright browser service with a dedicated persistent profile. Evidence: [python/browser_agent.py](https://github.com/shoyo-nova92/Nova-AI/blob/main/python/browser_agent.py), first 100 lines inspected (blob `23ea5b092d8a4c5a97516c0664e4a291596ad863`). Status: VERIFIED — inspected source.
- Claim: runtime uses browser observations / state-related components. Evidence: [src/branch3_runtime.cpp](https://github.com/shoyo-nova92/Nova-AI/blob/main/src/branch3_runtime.cpp), first 100 lines inspected (blob `6439ce3135d830d8c29641cad683f4ec7f11c3dd`) shows browser snapshot parsing and stable observation fields. Status: VERIFIED — inspected source for architecture; reliability not independently tested.
- Diagram: Input → Normalization → Routing → Planning → Validation → Execution → Verification. Source: brief §8. Status: VERIFIED — primary-attested conceptual architecture. Must be labeled architecture/preview, not a recording of execution.
- Current/next: experimental system; continued execution, recovery and postcondition work. Source: brief §8, tempered by inspected source limitations. Status: VERIFIED — primary-attested direction. No benchmark, completion percentage or production-readiness claim.

## Neurofly

- Claim: experimental simulation exploring biologically inspired olfaction and autonomous navigation. Source: brief §9. Status: VERIFIED — primary attestation, not independently executed.
- Claim: project direction includes Drosophila olfaction, FlyWire-derived neural information, odor fields, receptors, neural response, bilateral sensing and locomotor signals. Source: brief §9 expressly labels the direction verified. Status: VERIFIED — primary attestation for intended investigation. No complete connectome reconstruction or biological validation claimed.
- Diagram: odor environment → receptors → neural response → decision signal → navigation → behaviour. Source: brief §9. Status: VERIFIED — primary-attested conceptual architecture.
- Claim: ESP32 robot is a future direction, not finished integration. Source: brief §9. Status: VERIFIED — primary attestation of goal only.
- Public GitHub search `Neurofly user:shoyo-nova92` returned no matching repository. No exact repository URL is published or guessed. This does not establish that no private/local repository exists.
- Public current-state wording explicitly notes that recorded implementation evidence and public repository were not independently inspected.

## Creative work — accessible, real artifacts

The [provided folder](https://drive.google.com/drive/folders/1q-t2o7ZSzYZ885-Izo7HVwCtMYLSWOTw) was accessible through the connected Drive tool. Both Design and Editing subfolders were inventoried. No client name or commercial relationship is inferred from an artwork title.

Design inventory: five numbered folders. Each has a final PNG; folders 1, 2, 4, 5 also have original images and/or PSD sources, and folder 3 a second PNG. Five final PNGs were downloaded and visually inspected. Four are selected; OmniCore omitted because its network/dashboard treatment overlaps the other pieces. The selected set varies network, image-search, audio and camera compositions while staying subordinate to engineering projects.

- LinkScope artwork title and network composition. Evidence: [1-handmade-final.png](https://drive.google.com/file/d/1mOehKj9kzNg4v8mFOv-aknEze-A9Bm8k/view). Local `public/media/creative/design-1.png`. Status: VERIFIED — inspected image; supplied as Shourya's creative work by brief §11.
- Identix artwork title and image-query composition. Evidence: [2-handmade-final.png](https://drive.google.com/file/d/1d2QbbYEs95Bwv_15MdV6jHasDwKRE6tf/view). Local `public/media/creative/design-2.png`. Status: VERIFIED — inspected image; supplied-work attribution.
- Clarion AI artwork title and audio composition. Evidence: [4-handmade-final.png](https://drive.google.com/file/d/1lANuBB7kWvFqg61N3h3Rlgg-LLExbhMk/view). Local `public/media/creative/design-4.png`. Status: VERIFIED — inspected image; supplied-work attribution.
- Spectra AI artwork title and camera-search composition. Evidence: [5-handmade-final.png](https://drive.google.com/file/d/14HhBZYXg0PoPmNAmdHFhT7AjMLso_Bbt/view). Local `public/media/creative/design-5.png`. Status: VERIFIED — inspected image; supplied-work attribution.
- OmniCore: [3-handmade-final.png](https://drive.google.com/file/d/1IcLd8Itvp_Xc83ieuIgfAHrAPBAfTLNr/view), local `design-3.png`, inspected but not selected for public gallery.
- Editing inventory: “Quick View 1.mp4” (67.5 MB), Films, club work, fast/character/car edits, story edits, and “Read me too.txt”. Existence verified by listing; video contents not visually reviewed, so no selected video title/client/result claim is published. General design/editing experience is independently consistent with supplied brief §11–12 and folder structure. No dates or paid engagement details inferred from Drive timestamps.

## Capabilities, resume and activities

- AI planning/validation/execution, voice pipeline, browser/desktop automation, C++, Python, CMake, Playwright, OpenWakeWord and faster-whisper: evidence above; VERIFIED — inspected source for component existence plus primary-attested builder involvement. No proficiency percentages or “expert” claim.
- Olfactory simulation, neural navigation and biologically inspired control: brief §9; VERIFIED — primary-attested exploration areas, not formal qualifications.
- Visual design, video editing, visual communication: brief §11–12 plus Drive inventory and selected image inspection; VERIFIED — primary attestation and inspected creative source.
- Activities include the OpenAI/Codex hands-on workshop (Oct 2026), independent design/editing, and technical writing. Workshop attendance is primary-attested by Shourya; the supplied workshop deck and commands document independently confirm the Oct 25, 2026 workshop content around Codex, AGENTS.md, parallel specialist agents, QA/review, and deployment. VERIFIED — primary attestation plus supplied event materials.
- Freelance description: brief §11–12 plus supplied creative folder; VERIFIED — primary attestation of independent design/editing work. No clients, dates, monetary values or outcomes published.

## Explorations

- `validation-is-not-verification.md`: narrow architecture note grounded in inspected `src/plan_validator.cpp` and brief §8. Structural validation facts VERIFIED — inspected source. Verification discussion is a stated engineering/design question, not a fabricated experimental finding.
- `from-sensing-to-navigation.md`: explicitly scoped design-question note grounded in brief §9. Intended control loop and future ESP32 direction VERIFIED — primary attestation. It expressly reports no experimental result or completed robot integration.
- No publication dates, measured reading times or external research claims invented.

## Omitted pending independent evidence

- Zenith ranking / “first among 20+ teams”: independent evidence required by brief, unavailable from accessible sources. OMITTED.
- Certification dates and credentials: LinkedIn inaccessible, no exact credential evidence inspected. OMITTED.
- Robotics Club BMU, Club Sierra and BMU-MUN titles/roles/dates: brief presents possible profile material, but exact profile inaccessible. Leadership arrays remain empty. Club folder existence alone does not verify a role.
- Portrait and project demo recordings: no supplied files in workspace. Intentional fallbacks only; no invented photo or demo.
- Employers, internships, academic history, impact metrics, testimonials, stars/followers: never added.

## Design references

[Sean O'Brien](https://seanrobobrien.com/) and [Ali Abdaal](https://aliabdaal.com/) were opened for high-level reference. No text, assets, branding or proprietary fonts copied. They are not sources for personal facts about Shourya.
