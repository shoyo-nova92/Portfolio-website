import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/content/site";
import { Arrow, ButtonLink, Container, Eyebrow } from "@/components/ui/primitives";
import { ProjectMedia } from "@/components/motion/project-media";
import { ArchitectureFlow } from "@/components/motion/architecture-flow";
import { Contact } from "@/components/sections/site-chrome";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{slug:string}> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) return {};
  return pageMetadata(project.title, project.summary, `/work/${slug}`);
}

export default async function ProjectPage({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();
  const other = projects.find(item => item.slug !== slug)!;
  return <>
    <Container>
      <header className="page-hero"><Link href="/#work" className="back-link">← Selected work</Link><Eyebrow>{project.category}</Eyebrow><h1 className="page-title">{project.title}</h1><p className="page-description">{project.summary}</p><dl className="project-meta"><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Status</dt><dd>{project.status}</dd></div><div><dt>Focus</dt><dd>{project.category.split(" / ")[1]}</dd></div></dl></header>
      <div className="case-media"><ProjectMedia project={project.slug} variant="detail" /></div>

      <section className="project-section project-section-grid" data-reveal aria-labelledby="question-heading"><Eyebrow>01 / The question</Eyebrow><div><h2 id="question-heading">{project.question}</h2></div></section>
      <section className="project-section project-section-grid" data-reveal aria-labelledby="approach-heading"><Eyebrow>02 / The approach</Eyebrow><div><h2 id="approach-heading">{project.slug === "nova" ? "From intent to an observed outcome." : "From sensing to behaviour."}</h2><p>{project.approach}</p></div></section>
      <section className="project-section" aria-labelledby="architecture-heading"><div className="section-heading" data-reveal><div><Eyebrow>03 / Architecture</Eyebrow><h2 id="architecture-heading">A system, one stage at a time.</h2></div><p className="section-intro">{project.slug === "nova" ? "The intended request-to-action pipeline. Each stage has a distinct responsibility." : "The intended sensing-to-movement loop. A conceptual view of the project direction."}</p></div><ArchitectureFlow steps={project.flow} label={`${project.title} conceptual architecture`} /></section>
      <section className="project-section project-section-grid" data-reveal aria-labelledby="details-heading"><div><Eyebrow>04 / Go deeper</Eyebrow><h2 id="details-heading" className="mt-4">Engineering details.</h2></div><div className="technical-details">{project.details.map((detail,index) => <details key={detail.title} open={index===0}><summary>{detail.title}</summary><p>{detail.body}</p></details>)}</div></section>
      <section className="project-section project-section-grid" data-reveal aria-labelledby="current-heading"><Eyebrow>05 / Current state</Eyebrow><div><h2 id="current-heading">Work in progress, by design.</h2><p>{project.current}</p><h3 className="mt-10">Next direction</h3><p>{project.next}</p>{project.repo && <div className="mt-8"><ButtonLink href={project.repo} external>Explore the repository</ButtonLink></div>}</div></section>
      <Link href={`/work/${other.slug}`} className="project-next" data-reveal><div><Eyebrow>Next project</Eyebrow><h2>{other.title}</h2></div><Arrow /></Link>
    </Container>
    <Contact />
  </>;
}
