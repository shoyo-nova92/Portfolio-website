# Build Shourya Bhardwaj's Personal Portfolio

You are the **technical lead and final integrator** for this project.

Your job is not to produce a mockup, wireframe, or partial scaffold.

Build a complete, polished, locally runnable personal-brand portfolio website for **Shourya Bhardwaj**, including the architecture, design system, content model, project pages, interactive résumé, responsive behaviour, accessibility, testing, documentation, and all supporting files.

Use specialized Codex subagents to divide the work intelligently, then integrate and test their work.

Do not stop after creating the agents or project structure.

Continue until the website is actually working and the final build passes.

---

# 1. GOAL

Create a highly professional personal portfolio/personal-brand website for:

**Shourya Bhardwaj**

Primary objectives, in order:

1. Internship opportunities
2. A professional URL Shourya can directly send to people
3. Personal technical brand
4. Networking

Primary audiences:

1. Recruiters
2. Engineers
3. Professors / technical researchers

The site should create this impression quickly:

> Shourya builds ambitious technical systems, goes deep into difficult problems, and pushes projects toward real working outcomes.

The site should present him primarily as a:

**Builder → Engineer → Person**

Do NOT design this as a generic student portfolio.

---

# 2. BRAND POSITIONING

Use this as the working hero positioning:

## Shourya Bhardwaj

**I build ambitious technical systems from idea to working prototype.**

Supporting copy can communicate:

> Exploring AI agents, intelligent systems, computational neuroscience, automation, and the boundary between software and the physical world.

The exact copy may be refined slightly by the content/design agents, but preserve the meaning.

Writing should be:

- concise
- confident
- factual
- technically literate
- human
- not corporate
- not exaggerated

Avoid phrases such as:

- passionate developer
- technology enthusiast
- coding ninja
- visionary
- disrupting the future
- AI expert
- 10x engineer

The website should demonstrate capability instead of making inflated claims.

---

# 3. DESIGN DIRECTION

The visual direction is:

**Dark, minimalist, premium, precise, restrained.**

Reference philosophy:

- Apple product/headphone pages: cinematic product storytelling, large typography, controlled motion, excellent spacing
- Sean O'Brien portfolio: work appears immediately; simple navigation; visuals do most of the communication
- Ali Abdaal: clear identity followed by browseable content around the person

Reference URLs:

- https://seanrobobrien.com/
- https://aliabdaal.com/

DO NOT copy either site's layout, assets, typography, code, or branding.

Use them only as conceptual references.

### Experimentation level

**2 / 10**

The site must feel memorable because of polish and storytelling, **not gimmicks**.

Avoid:

- neon AI aesthetic
- giant gradients
- glowing purple blobs
- particle systems
- 3D planets
- custom cursor gimmicks
- scroll hijacking
- excessive glassmorphism
- animated skill bars
- fake terminal spam
- unnecessary loading screen
- constant motion
- huge collections of technology logos

Use:

- strong typography
- black / charcoal / near-black surfaces
- excellent whitespace
- subtle borders
- restrained contrast
- large project media
- editorial grids
- occasional monospace technical labels
- elegant sticky sections where useful
- smooth fade / scale / reveal motion
- subtle architecture animations
- high-quality micro-interactions
- excellent responsive behaviour

Use one restrained accent colour only if it improves hierarchy.

Do not imitate Apple's proprietary fonts or copyrighted assets.

Use an excellent open/system font stack.

---

# 4. PUBLIC IDENTITY

These links are authoritative:

GitHub:
https://github.com/shoyo-nova92

LinkedIn:
https://www.linkedin.com/in/shourya-bhardwaj-266072343/

X:
https://x.com/ShouryaBha70736

Professional email:
contact.shourya92@gmail.com

Do not include Instagram.

Global contact priority:

1. Email
2. GitHub
3. LinkedIn
4. X

Use `mailto:contact.shourya92@gmail.com`.

External social links should open safely in a new tab.

---

# 5. FACTUALITY RULE — CRITICAL

This website is based on a real person.

**Never fabricate information.**

Do not invent:

- employers
- internships
- clients
- awards
- dates
- technologies
- project statistics
- testimonials
- revenue
- users
- impact numbers
- client results
- GitHub stars
- follower counts
- academic achievements
- project completion states

Create:

`docs/SOURCE_MAP.md`

For every important factual claim, record:

- claim
- source
- URL / file / project evidence
- verification status

Only publish claims marked VERIFIED.

If something cannot be verified:

- omit it, or
- mark it internally as TODO

Never display `[TODO]` text publicly.

---

# 6. INFORMATION THAT MUST NOT APPEAR

For V1, do not build the public identity around:

- university
- degree
- GPA
- school
- academic grades
- internships

There should be **no Education section**.

Do not invent or expose internship history.

This is deliberately a **work-first portfolio**.

Clubs, events, technical communities and relevant activities may appear where useful.

---

# 7. CORE WORK TO FEATURE

Only two primary engineering projects should be featured in V1:

1. Nova
2. Neurofly

Do not fill the homepage with weaker projects simply to increase quantity.

---

# 8. PROJECT 1 — NOVA

Working description:

**Nova is a local-first AI desktop assistant and automation system designed to translate human intent into planned, validated, executed and verified computer actions.**

Shourya is the primary / sole builder of the system.

Current/project-history topics that may be used where verified include:

- C++ and Python runtime components
- CMake
- unified input pipeline
- wake-word interaction
- OpenWakeWord
- Whisper / Whisper Large-v3
- natural-language command handling
- normalization
- routing
- multi-step goal planning
- primitive mapping
- validation
- execution
- recovery
- postcondition verification
- filesystem primitives
- desktop automation
- browser automation
- Playwright
- application/window interaction
- runtime state/context
- persistent execution history
- tool use
- safety boundaries between planning and execution

An important conceptual architecture worth visualizing is:

Input  
↓  
Normalization  
↓  
Routing  
↓  
Planning  
↓  
Validation  
↓  
Execution  
↓  
Verification

Do not imply every experimental subsystem is production-ready.

Use precise wording such as:

- developing
- designed to
- current architecture
- experimental
- implemented

where appropriate.

### Nova page

A recruiter should understand Nova in approximately 30 seconds.

An engineer should be able to continue deeper for several minutes.

Use progressive disclosure:

1. what it is
2. why it exists
3. demo
4. architecture
5. selected engineering problems
6. deeper implementation details
7. lessons/current direction
8. relevant GitHub link only if an exact working repository URL is verified

Do not overwhelm the top of the page with implementation details.

---

# 9. PROJECT 2 — NEUROFLY

Working description:

**Neurofly explores whether biologically inspired olfactory processing can produce autonomous navigation behaviour.**

It is an experimental simulation / computational-neuroscience project.

Verified project direction includes work around:

- Drosophila / fruit-fly olfaction
- FlyWire-derived neural/connectome information
- olfactory receptors
- odor chemistry
- odor concentration fields
- receptor activation
- neural propagation
- bilateral sensing
- movement / locomotor decoding
- virtual fly behaviour
- interactive arena/simulation
- autonomous movement rather than scripted paths
- experimentation with competing odor sources
- eventual physical embodiment using an ESP32-based robot
- goal of mapping virtual and physical behaviour through the same general neural-control idea

Do not imply the complete physical robot integration is finished unless source material proves it.

The central narrative can be expressed as:

Odor environment  
↓  
Receptors  
↓  
Neural response  
↓  
Decision signal  
↓  
Navigation  
↓  
Behaviour

The project page should allow optional deeper exploration into the biology and implementation.

---

# 10. MEDIA

Shourya currently has:

- one Nova video
- one Neurofly video
- possible code/project screenshots
- professional portrait to be supplied later

Design the website around media without requiring it to exist immediately.

Reserve two major project-media slots:

`public/media/nova-demo.mp4`

`public/media/neurofly-demo.mp4`

Until those files exist, render attractive intentional project preview states instead of broken video players.

Reserve one subtle portrait location in the About section:

`public/media/shourya-profile.jpg`

If the image is absent, use an elegant neutral placeholder.

Do not make the portrait the hero of the website.

The work is the hero.

Do not add lots of arbitrary placeholder boxes for hypothetical media.

Code screenshots should be easy to add later without requiring a redesign.

Videos must:

- lazy load where appropriate
- use poster/fallback states
- not autoplay with disruptive audio
- respect reduced-motion preferences
- have text context/captions where necessary

---

# 11. FREELANCE / CREATIVE WORK

Shourya has done design and editing freelance/creative work.

Public source folder:

https://drive.google.com/drive/u/3/folders/1q-t2o7ZSzYZ885-Izo7HVwCtMYLSWOTw

The research/content agent should attempt to inspect this source.

If accessible:

1. inventory the work
2. identify the strongest representative pieces
3. choose at most 4–6
4. favour polished and diverse work
5. avoid displaying redundant examples
6. use real titles/client names only when verified
7. create a small **Selected Creative Work** / **Freelance Work** section

This section should support the technical brand, not overpower Nova and Neurofly.

If the Drive cannot be accessed:

- do NOT invent projects
- do NOT invent clients
- do NOT fabricate thumbnails
- create the content/data architecture for this section
- keep it hidden from the public page until real entries are supplied
- document the expected asset paths in README

---

# 12. OTHER FACTUAL MATERIAL THAT MAY BE USED

Use selectively, not as homepage clutter.

### Freelance

Shourya has publicly listed freelance experience.

Describe only the type of work supported by available evidence, including design/editing/creative work.

Do not invent client relationships.

### Leadership / activities

Verified public-profile material includes roles such as:

- Social Media Manager / Executive Committee involvement with Robotics Club BMU
- social-media/marketing work with Club Sierra
- organising / coverage / filming / videography work for BMU-MUN

These may appear in the interactive résumé or activity timeline.

Do not create a university education section around them.

### Zenith

Zenith was a productivity/product concept connected to a pitch competition where the student-led idea placed first among 20+ participating teams.

Zenith is NOT one of the two featured engineering projects for V1.

It can appear briefly under Achievements if the claim is independently verified before publication.

### Certifications

Public profile sources indicate:

- AI Python for Beginners — DeepLearning.AI — July 2025
- Prompt Engineering for Developers — DeepLearning.AI — April 2025

These belong in the résumé if verified.

Do not place certificates prominently on the homepage.

### Recent technical activity

Shourya attended a hands-on OpenAI/Codex workshop in October 2026 covering prompting, agent workflows, AGENTS.md, custom agents, web development and structured testing.

This can appear subtly under activity/events if appropriate.

Do not imply employment or formal affiliation with OpenAI.

---

# 13. HOMEPAGE INFORMATION ARCHITECTURE

Build a restrained homepage approximately in this sequence.

## Navigation

Minimal sticky/floating navigation.

Possible items:

- Work
- Explorations
- Résumé
- About

Then compact external/contact controls.

Do not overcrowd it.

---

## Hero

Display:

**SHOURYA BHARDWAJ**

Primary statement:

**I build ambitious technical systems from idea to working prototype.**

Supporting text should mention the areas he currently explores without turning into a buzzword list.

Primary CTA:

**Explore my work**

Secondary CTA:

**View résumé**

Also provide subtle GitHub / LinkedIn / X access.

The hero should be visually strong even without a portrait.

---

## Selected Work

This is the most important homepage section.

Large cinematic treatment for:

### NOVA

Category:

AI Agents / Systems Engineering

Brief explanation.

Large visual/video area.

CTA:

**Explore Nova**

---

### NEUROFLY

Category:

Computational Neuroscience / Simulation

Brief explanation.

Large visual/video area.

CTA:

**Explore Neurofly**

The two projects should feel distinct but share one design system.

---

## Selected Creative Work

Only render if verified work/assets exist.

Keep considerably smaller than the engineering projects.

---

## Explorations

Create an area for technical thinking/current discoveries.

Call it:

**Explorations**

not “Blog”.

It should support short technical notes over time.

Initial notes may be derived only from verified project work.

Potential themes include:

- agent validation and verification
- reliable execution
- olfactory sensing
- neural navigation
- simulation versus physical embodiment

Do not fabricate research conclusions.

Build this as MDX/local content so new notes can be added by creating a file.

---

## Selected Activity / Path

Build a clean timeline or compact chronological system showing meaningful:

- building
- freelance work
- leadership
- events
- achievements

It should function as an interactive résumé preview.

Avoid turning this into a giant chronological biography.

---

## About

Use one subtle portrait.

Keep the copy short.

Communicate that Shourya:

- likes building
- goes deep on problems
- cares about reaching outcomes rather than stopping at ideas
- experiments across engineering and creative work

Do not write generic motivational copy.

---

## Contact

Simple ending.

Suggested direction:

**Have an interesting problem? Let's talk.**

Provide:

- Email
- GitHub
- LinkedIn
- X
- Résumé

No contact form is required in V1.

Use email directly.

---

# 14. PROJECT PAGES

Routes:

`/work/nova`

`/work/neurofly`

Each page should use progressive technical depth.

Recommended structure:

1. title
2. one-line explanation
3. role/status
4. major media
5. problem / question
6. approach
7. simplified architecture
8. optional “go deeper” technical sections
9. selected engineering challenges
10. current state
11. next direction
12. links

Use diagrams built with semantic HTML/CSS/SVG rather than screenshots where practical.

The simplified architecture should remain understandable on mobile.

---

# 15. EXPLORATIONS

Route:

`/explorations`

Individual:

`/explorations/[slug]`

Content should be MDX or an equivalently simple local format.

Create a clean reading layout.

No CMS or database is required.

Create two initial short pieces only if they can be factually written from verified project sources.

Do not create generic AI-generated filler articles.

If evidence is insufficient, create the system but launch with fewer notes.

Quality over quantity.

---

# 16. INTERACTIVE RÉSUMÉ

Route:

`/resume`

This needs to be a serious professional résumé, not a decorative timeline alone.

The webpage version can be interactive.

Also create a clean printable/ATS-friendly résumé.

### Résumé order

1. Shourya Bhardwaj
2. professional headline
3. email
4. GitHub
5. LinkedIn
6. X
7. concise professional summary
8. Selected Projects
9. Freelance / Creative Experience
10. Leadership & Activities
11. Selected Achievements
12. Technical Capabilities
13. Relevant Certifications

Do NOT include:

- Education
- GPA
- school
- university degree
- internships

unless this project receives a later explicit instruction changing that requirement.

### Resume positioning

Use a concise summary around this idea:

> Builder and engineer developing intelligent systems across agentic AI, automation, simulation and biologically inspired computing, with experience taking projects from concept through architecture, implementation, debugging and iteration.

Polish the sentence but preserve factuality.

### Technical capabilities

Prefer capability groups over arbitrary percentage bars.

Potential categories:

**AI & Agent Systems**
- planning
- tool use
- validation
- execution workflows
- voice pipelines
- automation

**Systems / Software**
- C++
- Python
- CMake
- runtime architecture
- filesystem/workflow engineering
- debugging/testing

**Applied AI / Interaction**
- Whisper
- OpenWakeWord
- browser/desktop automation
- Playwright

**Research / Simulation**
- biologically inspired systems
- olfactory simulation
- connectome/neural modelling concepts represented by Neurofly

**Creative**
- design
- editing
- visual communication

Only publish individual tools supported by source material.

Do not use fake proficiency percentages.

### PDF

Make the `/resume` page print beautifully.

Also provide:

`npm run resume:pdf`

Generate:

`public/Shourya_Bhardwaj_Resume.pdf`

Use a reliable HTML-to-PDF workflow such as Playwright/Chromium if supported by the environment.

The downloadable PDF should:

- contain selectable text
- use links
- avoid decorative backgrounds
- be recruiter/ATS friendly
- be approximately 1–2 pages
- remain readable in grayscale

The website résumé can be visually richer than the PDF.

---

# 17. TECHNOLOGY

Use:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- current stable supported versions
- npm

Check official documentation before selecting exact package versions.

Prefer server components/default static rendering where practical.

Use client components only where interaction requires them.

Motion should rely mainly on CSS and browser primitives.

A lightweight animation library may be installed only where it produces materially better interaction.

Do NOT add:

- database
- authentication
- CMS
- Redux
- API server
- GraphQL
- Redis
- Docker
- microservices

unless they solve an actual requirement.

This portfolio does not need a backend in V1.

Content should live in typed files/MDX.

---

# 18. SUGGESTED PROJECT STRUCTURE

Use a maintainable structure similar to:

```text
.
├── AGENTS.md
├── README.md
├── .codex/
│   ├── config.toml
│   └── agents/
├── docs/
│   ├── SOURCE_MAP.md
│   ├── CONTENT_STRATEGY.md
│   ├── DESIGN_SYSTEM.md
│   └── QA_REPORT.md
├── content/
│   └── explorations/
├── public/
│   ├── media/
│   └── Shourya_Bhardwaj_Resume.pdf
├── scripts/
│   └── generate-resume.*
└── src/
    ├── app/
    ├── components/
    │   ├── ui/
    │   ├── sections/
    │   ├── projects/
    │   └── motion/
    ├── content/
    ├── lib/
    └── styles/
```

Adapt if necessary, but keep clear ownership boundaries.

---

# 19. CREATE AGENTS.md FIRST

Create a root-level:

`AGENTS.md`

Codex should treat this as the project rulebook.

It must document:

- purpose of the site
- target audiences
- brand principles
- stack
- commands
- folder structure
- content factuality policy
- source verification policy
- design constraints
- accessibility requirements
- performance requirements
- agent ownership
- testing requirements
- definition of done

Important global rules:

1. Never fabricate personal facts.
2. Never publish unverified claims.
3. Do not add university/education/internships.
4. Only Nova and Neurofly are primary engineering projects.
5. No Instagram.
6. Do not create backend/database infrastructure for V1.
7. Keep motion restrained.
8. Mobile quality must equal desktop quality.
9. Every agent runs relevant checks after changes.
10. Builders must not overwrite another agent's owned area without tech-lead coordination.

---

# 20. CODEX AGENT CONFIGURATION

Create:

`.codex/config.toml`

Use no more than **4 concurrent subagents**.

Create these agents.

---

## Agent 1 — research_content

File:

`.codex/agents/research-content.toml`

Responsibilities:

- inspect factual sources
- inspect provided URLs
- inspect public portfolio/freelance Drive if accessible
- inspect accessible GitHub material
- reconcile current project information
- produce `docs/SOURCE_MAP.md`
- produce `docs/CONTENT_STRATEGY.md`
- write factual site content
- write project summaries
- prepare timeline/resume data

Owns:

- `src/content/`
- `content/`
- `docs/SOURCE_MAP.md`
- `docs/CONTENT_STRATEGY.md`

Must not redesign components.

Must not invent missing information.

---

## Agent 2 — design_system

File:

`.codex/agents/design-system.toml`

Responsibilities:

- establish visual language
- spacing system
- typography
- layout grid
- surfaces
- borders
- interactive states
- motion principles
- responsive rules
- project visual language
- reusable UI primitives

Owns primarily:

- `src/components/ui/`
- `src/styles/`
- `docs/DESIGN_SYSTEM.md`

Design goal:

**Apple-level restraint, not Apple imitation.**

---

## Agent 3 — frontend_builder

File:

`.codex/agents/frontend-builder.toml`

Responsibilities:

- main Next.js implementation
- homepage
- navigation
- footer/contact
- project pages
- explorations index/articles
- about
- responsive layouts
- component composition
- SEO page integration

Owns primarily:

- `src/app/`
- `src/components/sections/`
- `src/components/projects/`

Must consume shared content rather than hardcoding factual claims repeatedly.

---

## Agent 4 — motion_media

File:

`.codex/agents/motion-media.toml`

Responsibilities:

- Nova/Neurofly media components
- video loading/fallbacks
- project transitions
- scroll-linked effects only where appropriate
- architecture flow animations
- reduced-motion support
- subtle interaction polish

Owns:

- `src/components/motion/`
- media-specific components

Never introduce motion solely for decoration.

---

## Agent 5 — resume_builder

File:

`.codex/agents/resume-builder.toml`

Responsibilities:

- `/resume`
- ATS/print stylesheet
- résumé content composition using verified data
- PDF generation script
- downloadable PDF
- professional presentation

Owns:

- resume route/components
- resume-specific styling
- PDF-generation script

No academic/education/internship section.

---

## Agent 6 — qa_tester

File:

`.codex/agents/qa-tester.toml`

Read-only.

Responsibilities:

Use a browser to test the completed site like:

- recruiter
- engineer
- mobile visitor

Test:

- desktop
- tablet
- 390px mobile
- keyboard navigation
- project exploration
- social links
- email link
- résumé
- video placeholders
- responsive layouts
- reduced motion
- 404 behaviour
- no overflow
- no broken links
- no obvious visual regressions

For every bug report:

- route
- viewport
- reproduction steps
- expected behaviour
- actual behaviour
- severity
- likely owner

Write:

`docs/QA_REPORT.md`

Do not edit implementation.

---

## Agent 7 — reviewer

File:

`.codex/agents/reviewer.toml`

Read-only.

Review for:

- factual integrity
- architecture quality
- unnecessary dependencies
- TypeScript correctness
- accessibility
- performance
- SEO
- security
- external-link handling
- semantic HTML
- motion accessibility
- media loading
- maintainability
- recruiter usability

Lead with concrete findings.

Do not praise generally.

Report actionable issues.

---

# 21. AGENT EXECUTION PLAN

The main Codex session remains tech lead/integrator.

### Wave 1

Run in parallel:

- research_content
- design_system

Wait for both.

Reconcile their outputs before implementation.

---

### Wave 2

Run in parallel where safe:

- frontend_builder
- motion_media
- resume_builder

The tech lead handles integration and cross-folder conflicts.

---

### Wave 3

Start the finished local site.

Run in parallel:

- qa_tester
- reviewer

Wait for both.

---

### Wave 4

Classify every meaningful issue.

Route fixes back to the correct builder.

Then rerun:

- tests
- typecheck
- lint
- production build
- critical browser paths

Do not finish with known high-severity issues.

---

# 22. SEO / DISCOVERABILITY

Implement professionally.

Include:

- site metadata
- title templates
- descriptions
- Open Graph
- Twitter/X cards
- favicon
- sitemap
- robots
- canonical URLs
- semantic headings
- Person structured data where appropriate
- Project/Article metadata where useful

Do not keyword-stuff.

Suggested title direction:

**Shourya Bhardwaj — AI Systems, Agents & Experimental Engineering**

Refine if needed.

---

# 23. ACCESSIBILITY

Target WCAG AA-level practical accessibility.

Include:

- semantic landmarks
- correct heading hierarchy
- keyboard navigation
- visible focus states
- sufficient contrast
- accessible project diagrams
- alt text
- captions/context for video
- reduced-motion support
- no interaction requiring mouse only
- touch targets appropriate for mobile

---

# 24. PERFORMANCE

This site should feel extremely fast.

Optimise:

- font loading
- video loading
- images
- bundle size
- client JS
- hydration
- responsive assets
- lazy loading below the fold

Aim for Lighthouse results around:

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

Do not cheat metrics by removing functionality.

---

# 25. RESPONSIVE TEST MATRIX

At minimum inspect:

- 1440px desktop
- 1280px laptop
- 768px tablet
- 390px mobile

No horizontal scrolling.

Project diagrams must remain understandable on mobile.

Large typography must scale gracefully.

Videos/images must not cause layout shift.

---

# 26. LOCAL-FIRST REQUIREMENT

The project must work entirely locally.

Expected flow:

```bash
npm install
npm run dev
```

Then:

`http://localhost:3000`

Also provide:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run resume:pdf
```

Create these scripts where practical.

No external database should be required.

No cloud service should be required for development.

---

# 27. DEPLOYMENT READINESS

Do not purchase a domain.

Do not require one.

Do not deploy to paid infrastructure without explicit approval.

Make the project immediately deployable later to a standard Next.js host such as Vercel.

Document deployment in README.

The eventual flow is:

local project  
→ GitHub  
→ public deployment  
→ custom domain

Keep the code portable.

---

# 28. DOMAIN

Do not hardcode a final domain yet.

Use an environment/config value for canonical production URL.

For development:

`http://localhost:3000`

The actual domain will be selected after the website is finished.

---

# 29. QUALITY BAR

This must not look like:

- a tutorial project
- a portfolio template with swapped text
- a Tailwind component dump
- a student résumé website
- a generic AI portfolio
- a hackathon landing page

It should look as though a designer and strong frontend engineer intentionally built it around **Shourya's actual work**.

Make it distinctive through:

- content
- typography
- layout
- project storytelling
- technical diagrams
- interaction quality
- restraint

Not through visual noise.

---

# 30. FINAL DEFINITION OF DONE

The task is complete only when all of the following are true:

### Build

- project installs successfully
- development server runs
- TypeScript passes
- lint passes
- production build passes

### Pages

- homepage exists
- Nova page exists
- Neurofly page exists
- Explorations exists
- résumé exists
- 404 exists

### Content

- every major personal claim is source-backed
- Nova copy is accurate
- Neurofly copy is accurate
- no fake freelance work exists
- no education section exists
- no internships appear
- Instagram does not appear
- professional email is correct
- GitHub/LinkedIn/X links are correct

### Media

- Nova media component works with or without file
- Neurofly media component works with or without file
- profile image fallback works
- missing media never creates a broken UI

### Resume

- interactive résumé works
- print layout works
- PDF is generated if environment supports it
- résumé contains selectable text
- URLs are correct

### UX

- navigation works
- mobile works
- keyboard works
- reduced motion works
- external links work
- no horizontal overflow
- important information is understandable without animation

### QA

- qa_tester completed browser testing
- reviewer completed code/content review
- high-severity findings fixed
- final checks rerun

### Documentation

README must explain:

- what the project is
- install
- run
- build
- testing
- content editing
- adding Nova video
- adding Neurofly video
- adding profile image
- adding freelance items
- adding an Exploration
- generating résumé PDF
- deployment
- future custom-domain setup

---

# 31. FINAL RESPONSE FROM CODEX

Do not give me a long stream-of-consciousness description.

When all work is complete, report:

1. what was built
2. visual/design direction
3. routes created
4. agents used and what each did
5. factual sources used
6. anything deliberately omitted because it could not be verified
7. files/asset placeholders still needed from Shourya
8. test/build results
9. exact command to run locally
10. exact local URL
11. recommended next step

If the Drive or another source cannot be accessed, state that clearly.

Do not replace missing evidence with guesses.

---

# START NOW

First:

1. inspect the folder
2. create `AGENTS.md`
3. create the Codex agent configuration
4. create the project
5. run Wave 1
6. continue through implementation
7. test and review
8. repair issues
9. produce the finished local site

Do not stop after planning.

Make sensible decisions autonomously when minor details are unspecified.

The target is not “crazy” because it contains more effects.

The target is **crazy good because it is unusually polished, fast, factual, coherent and clearly built around Shourya's real work.**