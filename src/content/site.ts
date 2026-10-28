/** Public copy. Evidence and publication decisions: docs/SOURCE_MAP.md. */
export const identity = {
  name: "Shourya Bhardwaj",
  headline: "I build ambitious technical systems from idea to working prototype.",
  supporting: "Exploring AI agents, intelligent systems, computational neuroscience, and the boundary between software and the physical world.",
  summary: "Builder focused on local-first AI agents, automation, and biologically inspired simulation. I work from architecture through implementation, debugging, validation, and iteration to turn ambitious ideas into working systems.",
  email: "contact.shourya92@gmail.com",
  github: "https://github.com/shoyo-nova92",
  linkedin: "https://www.linkedin.com/in/shourya-bhardwaj-266072343/",
  x: "https://x.com/ShouryaBha70736",
};

export type Project = {
  slug: "nova" | "neurofly";
  title: string;
  category: string;
  summary: string;
  status: string;
  role: string;
  question: string;
  approach: string;
  flow: string[];
  details: { title: string; body: string }[];
  current: string;
  next: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "nova",
    title: "Nova",
    category: "AI Agents / Systems Engineering",
    summary: "A local-first AI desktop assistant designed to turn human intent into planned, validated, executed, and verified computer actions.",
    status: "In development",
    role: "Primary builder",
    question: "How can an assistant move from understanding a request to carrying it out reliably on a real computer?",
    approach: "Separate interpretation from execution. Nova brings voice and text input into a shared pipeline, maps requests to concrete operations, and keeps validation and observed outcomes part of the execution loop.",
    flow: ["Input", "Normalization", "Routing", "Planning", "Validation", "Execution", "Verification"],
    details: [
      { title: "One input pipeline", body: "The codebase combines a C++ runtime with Python voice components. OpenWakeWord and faster-whisper support the voice-input path; input normalization and request classification give downstream processing a common entry point." },
      { title: "Plans that can be inspected", body: "The plan validator checks structural requirements including step identifiers, resolved operations, and resolved context references. This makes a proposed plan inspectable before it reaches the executor. Structural validity alone does not establish that a task will succeed." },
      { title: "Concrete execution boundaries", body: "The primitive execution layer includes filesystem path authorization and structured failure results. A Python Playwright service supports browser primitives through a dedicated browser profile. These are implementation components, not a claim of unrestricted or production-ready automation." },
      { title: "State and observed outcomes", body: "Runtime components represent context, execution results, and browser observations. The engineering question is how to connect the intended outcome to what the computer actually reports, including when a step fails or the state changes." },
    ],
    current: "An experimental desktop system with public C++ and Python implementation, planning and validation components, filesystem operations, and browser-automation code. Repository inspection confirms these components exist; end-to-end reliability has not been independently benchmarked here.",
    next: "Continue developing the relationship between planning, execution, recovery, and postcondition verification. Keep the boundary between what a model proposes and what the runtime permits explicit.",
    repo: "https://github.com/shoyo-nova92/Nova-AI",
  },
  {
    slug: "neurofly",
    title: "Neurofly",
    category: "Computational Neuroscience / Simulation",
    summary: "An experimental simulation exploring whether biologically inspired olfactory processing can produce autonomous navigation behaviour.",
    status: "Experimental exploration",
    role: "Project builder",
    question: "Can an agent navigate from an odor environment through receptor and neural responses, rather than following a scripted path?",
    approach: "Explore a sensing-to-movement loop inspired by fruit-fly olfaction: odor concentration fields activate receptors, neural responses inform a decision signal, and that signal shapes movement in a virtual arena.",
    flow: ["Odor environment", "Receptors", "Neural response", "Decision signal", "Navigation", "Behaviour"],
    details: [
      { title: "Biology as a starting point", body: "The project direction draws on Drosophila olfaction and FlyWire-derived neural information. The aim is to explore a biologically inspired control idea, not to claim a complete or validated reconstruction of a fly brain." },
      { title: "From a field to a response", body: "Odor chemistry, concentration fields, receptor activation, and neural propagation form the intended sensing chain. Bilateral sensing is part of the exploration into how local information can become a movement signal." },
      { title: "Behaviour is the question", body: "A virtual arena provides a setting for exploring autonomous movement and competing odor sources. The focus is on behaviour arising from the control loop. No quantitative performance or biological validation is claimed here." },
      { title: "A path toward embodiment", body: "An ESP32-based robot is a future direction for exploring the same general neural-control idea in the physical world. Complete hardware integration is not presented as finished." },
    ],
    current: "An experimental simulation project, described here from the builder's supplied project direction. A public repository and recorded implementation evidence have not yet been independently inspected.",
    next: "Explore how sensing and locomotor decoding shape virtual behaviour, then investigate what changes when the same control idea meets physical sensors and motors.",
  },
];

export const capabilities: { title: string; items: string[] }[] = [
  { title: "AI & agent systems", items: ["Planning and tool use", "Validation and execution workflows", "Voice-input pipelines", "Browser and desktop automation"] },
  { title: "Systems & software", items: ["C++", "Python", "CMake", "Runtime architecture", "Filesystem operations", "Debugging and testing"] },
  { title: "Applied interaction", items: ["faster-whisper", "OpenWakeWord", "Playwright", "Input normalization and routing"] },
  { title: "Research & simulation", items: ["Biologically inspired control", "Olfactory simulation", "Neural navigation exploration"] },
  { title: "Creative", items: ["Visual design", "Video editing", "Visual communication"] },
];

export type CreativeWork = {
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  href: string;
};

// Artwork titles identify the supplied pieces, not employers or engineering credits.
export const creativeWork: CreativeWork[] = [
  { title: "LinkScope", category: "Visual design", description: "Promotional artwork explaining a connected-data product through a network composition.", image: "/media/creative/design-1.png", alt: "LinkScope promotional artwork with a network of connected people and files.", href: "https://drive.google.com/file/d/1mOehKj9kzNg4v8mFOv-aknEze-A9Bm8k/view" },
  { title: "Identix", category: "Visual design", description: "A visual-search product composition built around a search query and image collection.", image: "/media/creative/design-2.png", alt: "Identix promotional artwork showing an image collection and a red-cap search example.", href: "https://drive.google.com/file/d/1d2QbbYEs95Bwv_15MdV6jHasDwKRE6tf/view" },
  { title: "Clarion AI", category: "Visual design", description: "An audio-intelligence product composition using a signal-to-insight visual narrative.", image: "/media/creative/design-4.png", alt: "Clarion AI promotional artwork with an audio waveform and connected analysis symbols.", href: "https://drive.google.com/file/d/1lANuBB7kWvFqg61N3h3Rlgg-LLExbhMk/view" },
  { title: "Spectra AI", category: "Visual design", description: "A camera-search product composition connecting a natural-language query to multiple views.", image: "/media/creative/design-5.png", alt: "Spectra AI promotional artwork connecting a red-bag search query with camera views.", href: "https://drive.google.com/file/d/14HhBZYXg0PoPmNAmdHFhT7AjMLso_Bbt/view" },
];

export const activities: { title: string; description: string; kind: string }[] = [
  { title: "Hands-on Codex workshop", description: "Attended a hands-on workshop on structured prompting, agent workflows, project guidance, web development, and testing.", kind: "Technical workshop · Oct 2026" },
];

export const freelance = {
  title: "Independent design & editing",
  description: "Independent visual design and video-editing work across promotional and product communication. Selected compositions include LinkScope, Identix, Clarion AI, and Spectra AI.",
  url: "https://drive.google.com/drive/folders/1q-t2o7ZSzYZ885-Izo7HVwCtMYLSWOTw",
};


export const resumeProjectBullets: Record<Project["slug"], string[]> = {
  nova: [
    "Architected a C++20 runtime and Python voice pipeline, integrating OpenWakeWord and faster-whisper with request normalization, routing, and multi-step planning.",
    "Implemented plan validation and filesystem authorization to reject unresolved operations or context references before execution and return structured failures.",
    "Integrated Playwright browser operations and observation-based execution guards that stop repeated failures and browser actions producing no observable state change.",
    "Defined CMake test targets for decomposition, primitive mapping, filesystem policies, and runtime integration; kept execution results and context available for debugging.",
  ],
  neurofly: [
    "Designing an experimental Drosophila-inspired olfactory simulation, mapping odor concentration fields through receptor activation and neural response toward autonomous movement.",
    "Exploring bilateral sensing and competing odor sources in a virtual arena; treating an ESP32 robot as a future embodiment direction, not completed integration.",
  ],
};

export const resumeActivities: { title: string; meta: string; bullets: string[] }[] = [
  { title: "Hands-on Codex workshop", meta: "Technical workshop · Oct 2026", bullets: ["Attended a hands-on workshop on structured prompting, agent workflows, project guidance, web development, and testing."] },
];

// Independent verification unavailable. Keep empty until exact source evidence is added.
export const leadership: { title: string; description: string }[] = [];
export const achievements: { title: string; description: string }[] = [];
export const certifications: { title: string; issuer: string; date: string; url?: string }[] = [];
