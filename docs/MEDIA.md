# Project media

`ProjectMedia` is a server component. It checks author-controlled files during rendering, so adding assets requires a development restart or production rebuild for statically rendered routes.

## Reserved files

For each slug (`nova`, `neurofly`):

- `public/media/{slug}-demo.mp4`: real recording. Native controls, `preload="none"`, inline playback, no autoplay or forced audio.
- `public/media/{slug}-poster.jpg`: optional lightweight poster image, recommended whenever a video is supplied.
- `public/media/{slug}-demo.vtt`: optional English caption file. Supply accurate captions for audible speech and meaningful sound. The component includes a track only when the file exists.
- `public/media/{slug}-transcript.txt`: optional plain-text transcript, presented in a keyboard-accessible native disclosure. Provide descriptions of meaningful visual changes not explained by adjacent project copy.

Without a recording, the component renders a static original SVG architecture illustration labeled **Architecture preview / Conceptual illustration**. Nova shows intent, a planning/execution core, and observed outcomes. Neurofly shows odor fields, bilateral sensing, and a stylized fly. Neither is presented as a real application screenshot or measured simulation result. There are no fake playback controls.

The media slot has a reserved aspect ratio, uses system fonts, and requires no external services. The SVG is decorative to assistive technology; its concept is provided as semantic text. No motion or autoplay is required to understand it. Native video playback remains a visitor-controlled action, including under reduced-motion preferences.

## Exports

- `ProjectMedia({project: 'nova' | 'neurofly', variant?: 'card' | 'detail'})` from `src/components/motion/project-media.tsx` owns the media shell, caption, and optional transcript.
- `ArchitectureFlow({steps: string[], label: string})` from `src/components/motion/architecture-flow.tsx` renders an ordered, labeled semantic list. It stacks vertically on mobile.

Render `ProjectMedia` directly; avoid nesting another `.project-media` aspect-ratio wrapper around it.
