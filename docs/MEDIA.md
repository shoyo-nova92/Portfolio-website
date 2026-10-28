# Project media

`ProjectMedia` is a server component. It checks author-controlled files during rendering, so adding assets requires a development restart or production rebuild for statically rendered routes.

## Reserved files

For each slug (`nova`, `neurofly`):

- `public/media/{slug}-demo.mp4`: real recording. Native controls, `preload="none"`, inline playback, no autoplay or forced audio.
- `public/media/{slug}-poster.jpg`: optional lightweight poster image, recommended whenever a video is supplied.
- `public/media/{slug}-demo.vtt`: optional English caption file. Supply accurate captions for audible speech and meaningful sound. The component includes a track only when the file exists.
- `public/media/{slug}-transcript.txt`: optional plain-text transcript, presented in a keyboard-accessible native disclosure. Provide descriptions of meaningful visual changes not explained by adjacent project copy.

Without a recording, the component renders an original SVG architecture illustration labeled **Architecture preview / Conceptual illustration**. Nova shows intent, a planning/execution core, and observed outcomes. Neurofly shows odor fields, bilateral sensing, and a stylized fly. Neither is presented as a real application screenshot or measured simulation result. There are no fake playback controls.

The media slot has a reserved aspect ratio and requires no external services. The SVG is decorative to assistive technology; its concept is provided as semantic text. No motion or autoplay is required to understand it. Native video playback remains a visitor-controlled action, including under reduced-motion preferences.

## Finite motion enhancement

`MotionController` renders no DOM and uses one route-aware IntersectionObserver to add `data-motion-state="entered"` to explicitly marked reveal/sequence targets. It observes streamed DOM additions and cleans up on navigation. Server-rendered content is fully visible before JavaScript runs and remains visible if JavaScript is disabled or IntersectionObserver is unavailable.

Nova plays a single bounded sequence through input, the planning core, the validation gate, execution and observed outcome. Neurofly plays one small odor-field breath, then highlights paired receptors, neural response and movement intent. These explain conceptual ordering, not a recorded execution or demonstrated fly trajectory. The seven-stage or six-stage ordered architecture list remains readable while its border emphasis travels in sequence. Every sequence completes in under three seconds, then the static design remains; there are no infinite pulses or scroll-driven reverse reveals.

Changing to reduced motion immediately settles targets and cancels the route entrance. Keyboard focus settles its reveal ancestors/descendants. Print settles all targets, and CSS disables media animations for both reduced motion and print. The controller uses one finite Web Animations route entrance for every pathname change, including nested project/article navigation; no animation library or frame loop is added.

## Exports

- `ProjectMedia({project: 'nova' | 'neurofly', variant?: 'card' | 'detail'})` from `src/components/motion/project-media.tsx` owns the media shell, caption, and optional transcript.
- `ArchitectureFlow({steps: string[], label: string})` from `src/components/motion/architecture-flow.tsx` renders an ordered, labeled semantic list. It stacks vertically on mobile.
- `MotionController()` from `src/components/motion/motion-controller.tsx` is mounted once in the shared layout, returns null, and enhances explicit `data-reveal`/`data-sequence` targets. Optional reveal delay indices `0`, `1`, `2` map to 0/60/120ms.

Render `ProjectMedia` directly; avoid nesting another `.project-media` aspect-ratio wrapper around it.
