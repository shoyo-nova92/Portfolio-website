import { readFile } from "node:fs/promises";
import path from "node:path";
import { publicAssetExists } from "@/lib/media";
import "./project-media.css";

type ProjectName = "nova" | "neurofly";

function NovaPreview() {
  return <div className="concept-scene nova-scene">
    <svg viewBox="0 0 600 380" fill="none" aria-hidden="true" className="concept-illustration">
      <path d="M40 90H560M40 190H560M40 290H560M100 40V340M200 40V340M300 40V340M400 40V340M500 40V340" stroke="currentColor" opacity=".045" />
      <circle cx="300" cy="190" r="119" stroke="currentColor" strokeDasharray="2 8" opacity=".18" />
      <circle cx="300" cy="190" r="80" stroke="currentColor" opacity=".11" />
      <path d="M107 190H220M380 190H493M300 77V110M300 270V303" stroke="currentColor" opacity=".4" />
      <path d="m210 185 10 5-10 5m273-10 10 5-10 5" stroke="currentColor" opacity=".65" />
      <g className="nova-core">
        <rect x="240" y="130" width="120" height="120" rx="14" fill="#1b2019" stroke="#849477" />
        <rect x="248" y="138" width="104" height="104" rx="9" stroke="#b9c8ac" opacity=".12" />
        <path d="M277 213V167L323 213V167" stroke="#dce5d4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g className="nova-input">
        <rect x="56" y="164" width="51" height="52" rx="6" fill="#151814" stroke="#495241" />
        <path d="M69 183h24m-24 7h18m-18 7h22" stroke="#a8b69b" strokeWidth="1.5" />
      </g>
      <g className="nova-verification">
        <rect x="493" y="164" width="51" height="52" rx="6" fill="#151814" stroke="#495241" />
        <path d="m506 190 8 8 17-17" stroke="#b9c8ac" strokeWidth="2" />
      </g>
      <g className="nova-validation">
        <circle cx="300" cy="64" r="13" fill="#151814" stroke="#495241" />
        <path d="m295 64 3 3 7-7" stroke="#b9c8ac" strokeWidth="1.5" />
      </g>
      <circle cx="300" cy="316" r="13" fill="#151814" stroke="#495241" />
      <path d="m296 312 8 8m0-8-8 8" stroke="#a8b69b" strokeWidth="1.5" />
      <circle cx="181" cy="190" r="3" fill="#b9c8ac" />
      <circle cx="419" cy="190" r="3" fill="#b9c8ac" />
      <path className="diagram-signal nova-ingress-signal" d="M107 190H240" stroke="#dce5d4" strokeWidth="2" pathLength="1" />
      <path className="diagram-signal nova-validation-signal" d="M300 77V130" stroke="#dce5d4" strokeWidth="2" pathLength="1" />
      <path className="diagram-signal nova-execution-signal" d="M360 190H493" stroke="#dce5d4" strokeWidth="2" pathLength="1" />
      <circle className="signal-packet nova-packet-input" cx="110" cy="190" r="3" fill="#eff2eb" />
      <circle className="signal-packet nova-packet-output" cx="365" cy="190" r="3" fill="#eff2eb" />
    </svg>
    <div className="concept-topline"><span>Intent → action</span><span>01 / Nova</span></div>
    <div className="nova-stage nova-stage-input">Human intent</div>
    <div className="nova-stage nova-stage-center">Plan · validate · execute</div>
    <div className="nova-stage nova-stage-output">Observed outcome</div>
    <div className="concept-bottomline"><span className="concept-status"><i />Local-first architecture</span><span>Verification loop</span></div>
  </div>;
}

function NeuroflyPreview() {
  return <div className="concept-scene neurofly-scene">
    <svg viewBox="0 0 600 380" fill="none" aria-hidden="true" className="concept-illustration">
      <path d="M40 90H560M40 190H560M40 290H560M100 40V340M200 40V340M300 40V340M400 40V340M500 40V340" stroke="currentColor" opacity=".045" />
      <g className="neurofly-odor-field">
        <ellipse cx="150" cy="190" rx="137" ry="132" stroke="#758469" opacity=".16" />
        <ellipse cx="150" cy="190" rx="104" ry="101" stroke="#8b9b7f" opacity=".2" />
        <ellipse cx="150" cy="190" rx="72" ry="70" stroke="#a5b695" opacity=".26" />
        <ellipse cx="150" cy="190" rx="40" ry="39" stroke="#bdcdaf" opacity=".32" />
      </g>
      <circle cx="150" cy="190" r="8" fill="#b9c8ac" />
      <circle cx="150" cy="190" r="3" fill="#eff2eb" />
      <ellipse cx="484" cy="122" rx="76" ry="70" stroke="#7d8974" opacity=".15" />
      <ellipse cx="484" cy="122" rx="48" ry="43" stroke="#8b9b7f" opacity=".2" />
      <circle cx="484" cy="122" r="5" fill="#78866d" />
      <path d="M345 199 259 154M345 199 264 237" stroke="#b9c8ac" strokeDasharray="3 5" opacity=".4" />
      <g className="neurofly-receptors">
        <circle cx="259" cy="154" r="4" fill="#b9c8ac" />
        <circle cx="264" cy="237" r="4" fill="#b9c8ac" />
      </g>
      <g className="neurofly-movement-intent"><g transform="translate(346 198) rotate(-83)">
        <ellipse cx="-16" cy="6" rx="13" ry="29" transform="rotate(-27 -16 6)" fill="#b9c8ac" fillOpacity=".07" stroke="#8d9e7e" strokeWidth="1.2" />
        <ellipse cx="16" cy="6" rx="13" ry="29" transform="rotate(27 16 6)" fill="#b9c8ac" fillOpacity=".07" stroke="#8d9e7e" strokeWidth="1.2" />
        <path d="m-7-7-23-8m23 19-24 5m25 5-20 19M7-7l23-8M7 4l24 5M6 14l20 19" stroke="#a6b798" strokeWidth="1.3" />
        <ellipse cy="11" rx="9" ry="22" fill="#7e8e71" stroke="#c4d3b8" strokeWidth="1.4" />
        <circle cy="-16" r="10" fill="#aab99e" stroke="#d4dfcb" />
        <path d="m-5-24-8-10m18 10 8-10" stroke="#c4d3b8" strokeWidth="1.6" />
        <circle cx="-13" cy="-34" r="2.5" fill="#d4dfcb" />
        <circle cx="13" cy="-34" r="2.5" fill="#d4dfcb" />
      </g></g>
      <path className="neurofly-decision-path" d="M396 219c18 12 35 12 49 2" stroke="#94a285" strokeDasharray="2 6" opacity=".35" />
      <path className="diagram-signal neurofly-receptor-signal" d="M190 190 259 154M190 190 264 237" stroke="#cbd8bf" strokeWidth="1.3" pathLength="1" />
      <path className="diagram-signal neurofly-neural-signal" d="M259 154 345 199M264 237 345 199" stroke="#dce5d4" strokeWidth="1.5" pathLength="1" />
      <path className="diagram-signal neurofly-decision-signal" d="M345 199 396 219c18 12 35 12 49 2" stroke="#dce5d4" strokeWidth="1.5" pathLength="1" />
    </svg>
    <div className="concept-topline"><span>Sensing → behaviour</span><span>02 / Neurofly</span></div>
    <div className="neurofly-source">Odor field</div>
    <div className="neurofly-agent">Bilateral sensing</div>
    <div className="concept-bottomline"><span className="concept-status"><i />Olfactory control concept</span><span>Movement intent</span></div>
  </div>;
}

export async function ProjectMedia({ project, variant = "card" }: { project: ProjectName; variant?: "card" | "detail" }) {
  const title = project === "nova" ? "Nova" : "Neurofly";
  const video = `/media/${project}-demo.mp4`;
  const poster = `/media/${project}-poster.jpg`;
  const captions = `/media/${project}-demo.vtt`;
  const transcript = `/media/${project}-transcript.txt`;
  const hasVideo = publicAssetExists(video);
  const hasCaptions = publicAssetExists(captions);
  const transcriptText = hasVideo && publicAssetExists(transcript)
    ? await readFile(path.join(process.cwd(), "public", transcript), "utf8")
    : null;

  return <figure className={`project-media-figure media-${variant}`} data-sequence={!hasVideo ? project : undefined}>
    <div className={`project-media project-media-${project}`}>
      {hasVideo ? <video controls preload="none" playsInline poster={publicAssetExists(poster) ? poster : undefined} aria-label={`${title} project demonstration`} width="1200" height="760">
        <source src={video} type="video/mp4" />
        {hasCaptions && <track src={captions} kind="captions" srcLang="en" label="English captions" default />}
        <p>Your browser does not support this video. <a href={video}>Download the {title} demonstration</a>.</p>
      </video> : project === "nova" ? <NovaPreview /> : <NeuroflyPreview />}
    </div>
    <figcaption className="media-caption"><span>{hasVideo ? "Project demonstration" : "Architecture preview"}</span><span>{hasVideo ? title : "Conceptual illustration"}</span></figcaption>
    {!hasVideo && <p className="sr-only">{project === "nova" ? "Concept: human intent is planned, validated, executed, and checked against an observed outcome." : "Concept: odor concentration fields and bilateral sensing inform a virtual fly's navigation. This is an illustration, not a recorded simulation result."}</p>}
    {transcriptText && <details className="media-transcript"><summary>Read video transcript</summary><p>{transcriptText}</p></details>}
  </figure>;
}
