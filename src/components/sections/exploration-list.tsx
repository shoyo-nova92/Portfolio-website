import Link from "next/link";
import type { Exploration } from "@/lib/explorations";
import { Arrow } from "@/components/ui/primitives";

export function ExplorationList({ notes }: { notes: Exploration[] }) {
  if (!notes.length) return <p className="empty-state">Technical notes will appear here as the work develops.</p>;
  return <div className="notes-list">{notes.map((note,index) => <Link className="note-row" key={note.slug} href={`/explorations/${note.slug}`}>
    <span className="note-index" aria-hidden="true">{String(index+1).padStart(2,"0")}</span>
    <div className="note-content"><h3>{note.title}</h3><p>{note.description}</p><div className="note-meta">{note.topic} · {note.readingTime} min read</div></div><Arrow />
  </Link>)}</div>;
}
