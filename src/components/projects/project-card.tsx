import Link from "next/link";
import type { Project } from "@/content/site";
import { ProjectMedia } from "@/components/motion/project-media";
import { Arrow, Eyebrow, Tag } from "@/components/ui/primitives";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className="project-card" aria-labelledby={`${project.slug}-title`}>
    <ProjectMedia project={project.slug} variant="card" />
    <div className="project-card-content">
      <div className="project-card-topline"><Eyebrow>{String(index + 1).padStart(2, "0")} / {project.category}</Eyebrow><Tag>{project.status}</Tag></div>
      <h3 className="project-card-title" id={`${project.slug}-title`}><Link href={`/work/${project.slug}`}>{project.title}<Arrow diagonal /></Link></h3>
      <p className="project-card-description">{project.summary}</p>
      <Link href={`/work/${project.slug}`} className="project-card-link">Explore {project.title}<Arrow /></Link>
    </div>
  </article>;
}
