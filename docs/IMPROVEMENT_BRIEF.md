You are improving my existing portfolio website.

The website is already built and working.

Do **not rebuild it from scratch**.

Your job is to inspect the current project, improve it, test it, and leave it in a finished state.

## Main job

### 1. Improve animations and transitions

The current website feels too static.

Add a restrained, premium motion system.

Improve:

- page entrance transitions
- section reveal animations
- project card hover interactions
- navigation transitions
- button interactions
- accordion/open-close transitions
- image/media hover behaviour
- smooth scrolling where appropriate
- transitions between visual states
- project architecture diagrams

Motion should feel:

- fluid
- smooth
- premium
- subtle
- intentional
- Apple-product-page inspired

Do NOT add:

- excessive parallax
- glowing effects
- particles
- custom cursor
- flashy 3D
- random animations
- animation just for decoration

Respect:

`prefers-reduced-motion`

Animations should improve hierarchy and storytelling.

---

### 2. Improve Nova visual storytelling

Make the Nova project feel more alive.

Improve the architecture visual:

Input  
→ Normalization  
→ Routing  
→ Planning  
→ Validation  
→ Execution  
→ Verification

Add subtle sequential movement/reveal through the pipeline.

Make the viewer feel that data is moving through the system.

Keep it technically clean and professional.

Do not turn it into a flashy animation.

---

### 3. Improve Neurofly visual storytelling

Make the Neurofly section feel more alive.

Improve visual representation of:

Odor  
→ Receptors  
→ Neural response  
→ Decision  
→ Movement

Potential subtle effects:

- odor-field breathing/pulsing
- receptor activation
- signal movement
- trajectory changes
- slow environmental motion

Keep it scientifically styled.

Do not imply functionality that does not exist.

---

### 4. Improve project-card interactions

Nova and Neurofly are the most important elements on the homepage.

Improve:

- hover depth
- media response
- text hierarchy
- CTA transitions
- subtle image scaling
- border/background transition

The cards should feel interactive before the user clicks them.

Do not use aggressive 3D tilt.

---

### 5. Improve homepage flow

Review the entire homepage.

Remove:

- repetitive sections
- repeated explanations
- unnecessary text
- weak visual hierarchy

Make every section provide new information.

The homepage should roughly communicate:

1. Who Shourya is
2. What he builds
3. Nova
4. Neurofly
5. Creative/freelance work
6. Technical explorations
7. Relevant activity
8. About
9. Contact

Do not repeat Nova and Neurofly again later in another timeline unless there is genuinely new information.

---

### 6. Improve Selected Activity section

Create or improve a compact section showing relevant activity beyond the main projects.

Possible verified categories:

- OpenAI/Codex workshop attendance
- technical workshops/events
- freelance creative work
- explorations / technical writing
- leadership / clubs only if already verified in project sources

Do not invent anything.

---

### 7. Improve typography

Review the current typography.

If it relies heavily on plain Arial or another weak default stack, improve it.

Use:

- strong system/open-source typography
- excellent hierarchy
- large clean headings
- highly readable body text
- restrained monospace use for technical labels

Do not imitate Apple's proprietary fonts.

Do not add unnecessary font weight variants.

---

### 8. Improve spacing and visual hierarchy

Audit:

- section spacing
- content widths
- text measure
- headings
- card spacing
- whitespace
- divider usage
- mobile spacing

The website should feel intentionally designed, not merely technically correct.

---

# Resume job

The current résumé also needs improvement.

Do not just redesign it visually.

Improve the **content**.

## 9. Rewrite résumé toward engineering contribution

The résumé currently explains projects too much.

Rewrite bullets so they emphasize:

- what I built
- what I architected
- what I solved
- engineering decisions
- implementation
- debugging
- verification
- testing
- outcomes

Prefer wording such as:

- Architected
- Built
- Designed
- Implemented
- Developed
- Integrated
- Added
- Validated
- Debugged

Avoid vague wording.

---

## 10. Strengthen Nova résumé section

Nova should be the strongest project.

Use verified information from the project/source material.

Potential areas include:

- local-first AI desktop assistant
- C++ runtime
- Python voice components
- OpenWakeWord
- faster-whisper
- unified input pipeline
- request normalization
- routing
- multi-step planning
- primitive mapping
- validation
- execution
- postcondition verification
- bounded repair/recovery
- filesystem primitives
- browser/desktop automation
- Playwright
- testing and regression coverage

Where verified, mention concrete test results.

Do not invent metrics.

---

## 11. Strengthen Neurofly résumé section

Describe Neurofly as an experimental engineering/research project.

Focus on:

- biological inspiration
- fruit-fly olfactory processing
- odor concentration simulation
- receptor activation
- neural response
- movement/decision mapping
- interactive simulation
- physical robot direction

Clearly separate:

what exists now

from

future ESP32 / hardware integration.

Do not make future work sound completed.

---

## 12. Improve skills section

Group skills meaningfully.

Suggested structure:

### AI & Agent Systems
Planning, tool use, validation, execution workflows, voice pipelines, automation

### Systems & Software
C++, Python, CMake, runtime architecture, filesystem operations, testing/debugging

### Applied AI / Interaction
OpenWakeWord, faster-whisper, Playwright, browser/desktop automation

### Research & Simulation
Biologically inspired computing, olfactory simulation, neural navigation

### Creative
Visual design, video editing, visual communication

Only include verified skills.

No skill percentages.

---

## 13. Keep résumé one page if possible

The résumé should remain:

- one page if readable
- ATS friendly
- selectable text
- clean
- grayscale-friendly
- professional
- link-enabled

Do not overdesign it.

The website résumé can be richer.

The downloadable PDF should remain recruiter-friendly.

---

# Media preparation

## 14. Keep real media slots ready

Preserve or improve support for:

- Nova demo video
- Neurofly demo video
- professional portrait

If media files are missing:

- render intentional placeholders
- never show broken video players
- do not distort layout

Keep it easy for me to drop the real files in later.

---

# Technical quality

## 15. Preserve the current stack

Do not unnecessarily replace architecture.

Keep the existing Next.js/React/TypeScript project unless there is a real reason to change something.

Do not add:

- database
- backend
- authentication
- CMS
- Redux
- unnecessary dependencies

---

## 16. Performance

Animations must not damage performance.

Avoid excessive client components.

Prefer:

- CSS transitions
- CSS transforms
- IntersectionObserver
- lightweight motion logic

Use an animation library only if it clearly improves the result.

---

## 17. Accessibility

Verify:

- keyboard navigation
- focus states
- reduced motion
- contrast
- semantic headings
- buttons/links
- mobile touch targets
- video accessibility
- diagrams understandable without animation

---

# Agent workflow

Use the existing AGENTS setup.

Run specialist agents where appropriate.

Suggested workflow:

### Wave 1

Run in parallel:

- design/motion review
- résumé/content review

### Wave 2

Send implementation work to:

- frontend builder
- motion/media builder
- resume builder

### Wave 3

Run:

- QA tester
- reviewer

### Wave 4

Fix the issues they find.

Do not stop after receiving reports.

---

# Test everything

Before finishing, run:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Then run browser tests.

Inspect:

- homepage
- Nova
- Neurofly
- Explorations
- Resume
- mobile
- desktop

Test at minimum:

- 1440px
- 768px
- 390px

Check for:

- overflow
- broken animations
- layout shift
- bad hover states
- mobile spacing
- broken links
- runtime errors
- accessibility issues

Generate the final résumé PDF again.

---

# Important

Do not make the site more professional by making it more boring.

Do not make the site more interesting by making it flashy.

The target is:

**minimal + premium + fluid + technical + memorable**

Think:

Apple-style restraint applied to an engineering portfolio.

The animations should make the site feel alive while keeping the work itself as the focus.

---

# Done when

Finish only when:

- motion system is improved
- transitions feel smooth
- Nova visual is improved
- Neurofly visual is improved
- homepage repetition is reduced
- activity section is improved
- typography/spacing are refined
- résumé content is stronger
- résumé PDF is regenerated
- desktop/mobile are tested
- lint passes
- typecheck passes
- tests pass
- production build passes
- QA issues are fixed

At the end give me only:

1. what changed
2. files changed
3. animation improvements
4. résumé improvements
5. QA findings and fixes
6. test/build results
7. anything you still need from me

Do not stop at planning.

Inspect the existing project and start improving it now.