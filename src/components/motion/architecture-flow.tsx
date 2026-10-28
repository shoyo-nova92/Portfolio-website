import "./project-media.css";
import type { CSSProperties } from "react";

export function ArchitectureFlow({ steps, label }: { steps: string[]; label: string }) {
  return <ol className="architecture-flow system-flow" aria-label={label} data-sequence="architecture">
    {steps.map((step, index) => <li key={`${index}-${step}`} style={{ "--stage-index": index } as CSSProperties}><span className="system-flow-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><span>{step}</span></li>)}
  </ol>;
}
