import "./project-media.css";

export function ArchitectureFlow({ steps, label }: { steps: string[]; label: string }) {
  return <ol className="architecture-flow system-flow" aria-label={label}>
    {steps.map((step, index) => <li key={`${index}-${step}`}><span className="system-flow-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><span>{step}</span></li>)}
  </ol>;
}
