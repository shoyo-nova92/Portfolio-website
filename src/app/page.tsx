import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { activities, creativeWork, identity, projects } from "@/content/site";
import { getExplorations } from "@/lib/explorations";
import { publicAssetExists } from "@/lib/media";
import { Arrow, ButtonLink, Container, Eyebrow } from "@/components/ui/primitives";
import { ProjectCard } from "@/components/projects/project-card";
import { Contact, SocialLinks } from "@/components/sections/site-chrome";
import { ExplorationList } from "@/components/sections/exploration-list";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  const notes = getExplorations();
  const portrait = publicAssetExists("/media/shourya-profile.jpg");
  return <>
    <Container><section className="hero" aria-labelledby="hero-heading">
      <div className="hero-topline"><Eyebrow>{identity.name}</Eyebrow><span className="hero-index">BUILDER / ENGINEER</span></div>
      <h1 className="hero-title" id="hero-heading">I build ambitious technical systems <span className="muted">from idea to working prototype.</span></h1>
      <div className="hero-bottom"><p className="hero-description">{identity.supporting}</p><div className="hero-actions"><ButtonLink href="#work">Explore my work</ButtonLink><ButtonLink href="/resume" secondary>View résumé</ButtonLink></div></div>
      <div className="hero-socials"><SocialLinks /></div>
    </section></Container>

    <section className="work-section" id="work" aria-labelledby="work-heading"><Container>
      <div className="section-heading"><div><Eyebrow>01 / Selected work</Eyebrow><h2 id="work-heading">Ideas, made tangible.</h2></div><p className="section-intro">Two ongoing explorations into how intelligent systems understand, act, and adapt.</p></div>
      <div className="work-grid">{projects.map((project,index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
    </Container></section>

    {creativeWork.length > 0 && <section className="section" aria-labelledby="creative-heading"><Container>
      <div className="section-heading"><div><Eyebrow>02 / A different medium</Eyebrow><h2 id="creative-heading">Selected creative work.</h2></div><p className="section-intro">Visual design and communication, alongside the engineering. Selected promotional compositions.</p></div>
      <div className="creative-grid">{creativeWork.map(piece => <article className="creative-card" key={piece.title}><a href={piece.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${piece.title} visual design on Google Drive`}><Image className="creative-image" src={piece.image} width={800} height={1000} sizes="(max-width: 767px) 45vw, 23vw" alt={piece.alt} /><h3>{piece.title}</h3></a><p>{piece.category}</p></article>)}</div>
    </Container></section>}

    <section className="section" id="explorations" aria-labelledby="explorations-heading"><Container>
      <div className="section-heading"><div><Eyebrow>03 / Explorations</Eyebrow><h2 id="explorations-heading">Thinking through the build.</h2></div><Link className="text-link" href="/explorations">All explorations<Arrow /></Link></div>
      <ExplorationList notes={notes.slice(0,2)} />
    </Container></section>

    <section className="section" aria-labelledby="path-heading"><Container>
      <div className="section-heading"><div><Eyebrow>04 / Beyond the projects</Eyebrow><h2 id="path-heading">Selected activity.</h2></div><Link className="text-link" href="/resume">View full résumé<Arrow /></Link></div>
      <ul className="activity-list">{activities.map(activity => <li className="activity-item" key={activity.title}><Eyebrow>{activity.kind}</Eyebrow><div><h3>{activity.title}</h3><p>{activity.description}</p></div></li>)}</ul>
    </Container></section>

    <section className="section" id="about" aria-labelledby="about-heading"><Container className="about-grid">
      <div className="about-copy"><Eyebrow>05 / The person behind the work</Eyebrow><h2 id="about-heading">I like the part where an idea becomes a system.</h2><p>I’m Shourya. I build across AI agents, automation, and biologically inspired simulation, moving between the architecture and the details that make it work.</p><p>I care about following a difficult problem past the first prototype: debugging it, questioning the approach, and finding a clearer way forward. Design and editing give me another way to work through ideas.</p><div className="about-links"><ButtonLink href="/resume" secondary>More about my work</ButtonLink></div></div>
      <figure><div className="portrait">{portrait ? <Image src="/media/shourya-profile.jpg" alt="Shourya Bhardwaj" width={600} height={750} sizes="(max-width: 767px) 260px, 300px" /> : <div className="portrait-placeholder" role="img" aria-label="Shourya Bhardwaj monogram"><span aria-hidden="true">sb.</span><span className="eyebrow">Shourya Bhardwaj</span></div>}</div><figcaption className="portrait-caption">BUILDER → ENGINEER → PERSON</figcaption></figure>
    </Container></section>
    <Contact />
  </>;
}
