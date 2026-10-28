"use client";

import { useState } from "react";
import Link from "next/link";
import { achievements, capabilities, certifications, freelance, identity, leadership, projects, resumeActivities, resumeProjectBullets } from "@/content/site";

const filters = [
  { value: "all", label: "All work" },
  { value: "nova", label: "AI systems" },
  { value: "neurofly", label: "Neural simulation" },
  { value: "creative", label: "Creative" },
] as const;
type Focus = typeof filters[number]["value"];

export function ResumeView() {
  const [focus, setFocus] = useState<Focus>("all");
  const show = (value: Focus) => focus === "all" || focus === value;

  return <div className="resume-shell">
    <div className="resume-toolbar" aria-label="Résumé actions">
      <Link href="/" className="resume-back">← Back to portfolio</Link>
      <div className="resume-actions">
        <button type="button" onClick={() => window.print()}>Print résumé</button>
        <a href="/Shourya_Bhardwaj_Resume.pdf" download>Download PDF <span aria-hidden="true">↗</span></a>
      </div>
    </div>

    <article className="resume-document" aria-labelledby="resume-name">
      <header className="resume-heading">
        <p className="resume-label">Engineering through implementation</p>
        <h1 id="resume-name">{identity.name}</h1>
        <p className="resume-headline">AI systems, automation & experimental engineering</p>
        <ul className="resume-contacts" aria-label="Contact links">
          <li><a href={`mailto:${identity.email}`}>{identity.email}</a></li>
          <li><a href={identity.github} target="_blank" rel="noopener noreferrer"><span className="resume-screen-label">GitHub ↗</span><span className="resume-print-label">github.com/shoyo-nova92</span></a></li>
          <li><a href={identity.linkedin} target="_blank" rel="noopener noreferrer"><span className="resume-screen-label">LinkedIn ↗</span><span className="resume-print-label">linkedin.com/in/shourya-bhardwaj-266072343</span></a></li>
          <li><a href={identity.x} target="_blank" rel="noopener noreferrer"><span className="resume-screen-label">X ↗</span><span className="resume-print-label">x.com/ShouryaBha70736</span></a></li>
        </ul>
        <p className="resume-summary">{identity.summary}</p>
      </header>

      <div className="resume-focus" role="group" aria-label="Focus résumé by work area">
        <span>Explore by focus</span>
        <div>{filters.map(filter => <button key={filter.value} type="button" aria-pressed={focus === filter.value} onClick={() => setFocus(filter.value)}>{filter.label}</button>)}</div>
        <p className="sr-only" aria-live="polite">{filters.find(filter => filter.value === focus)?.label} selected. Print and PDF include the complete résumé.</p>
      </div>

      <div className="resume-body" key={focus}>
      <section className="resume-section" aria-labelledby="resume-projects" data-screen-hidden={focus === "creative" || undefined}>
        <h2 id="resume-projects">Selected Engineering Projects</h2>
        <div className="resume-section-content">{projects.map(project => <section className="resume-project" key={project.slug} data-screen-hidden={!show(project.slug) || undefined} aria-labelledby={`resume-${project.slug}`}>
          <div className="resume-entry-heading"><h3 id={`resume-${project.slug}`}><Link className="resume-screen-project-title" href={`/work/${project.slug}`}>{project.title}</Link><span className="resume-print-project-title">{project.title}</span></h3><span>{project.status}</span></div>
          <p className="resume-entry-meta">{project.role} · {project.category}</p>
          <ul className="resume-project-points">{resumeProjectBullets[project.slug].map(point => <li key={point}>{point}</li>)}</ul>
          {project.repo && <a className="resume-source-link" href={project.repo} target="_blank" rel="noopener noreferrer">{project.repo.replace("https://", "")}</a>}
          <Link href={`/work/${project.slug}`} className="resume-case-study">Read case study <span aria-hidden="true">↗</span></Link>
        </section>)}</div>
      </section>

      <section className="resume-section" aria-labelledby="resume-creative" data-screen-hidden={!show("creative") || undefined}>
        <h2 id="resume-creative">Freelance & Creative Experience</h2>
        <div className="resume-section-content"><h3>{freelance.title}</h3><p>{freelance.description}</p><a className="resume-source-link" href={freelance.url} target="_blank" rel="noopener noreferrer">View selected creative work ↗</a></div>
      </section>

      {resumeActivities.length > 0 && <section className="resume-section resume-activity-section" aria-labelledby="resume-activity">
        <h2 id="resume-activity">Technical Activity</h2>
        <div className="resume-section-content">{resumeActivities.map(item => <div className="resume-activity" key={item.title}><div className="resume-entry-heading"><h3>{item.title}</h3><span>{item.meta}</span></div><ul className="resume-project-points">{item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></div>)}</div>
      </section>}

      {leadership.length > 0 && <section className="resume-section" aria-labelledby="resume-leadership"><h2 id="resume-leadership">Leadership & Activities</h2><div className="resume-section-content">{leadership.map(item => <div key={item.title}><h3>{item.title}</h3><p>{item.description}</p></div>)}</div></section>}
      {achievements.length > 0 && <section className="resume-section" aria-labelledby="resume-achievements"><h2 id="resume-achievements">Selected Achievements</h2><div className="resume-section-content">{achievements.map(item => <div key={item.title}><h3>{item.title}</h3><p>{item.description}</p></div>)}</div></section>}

      <section className="resume-section" aria-labelledby="resume-capabilities">
        <h2 id="resume-capabilities">Technical Capabilities</h2>
        <div className="resume-capability-grid">{capabilities.map((group, index) => {
          const relevant = index < 3 ? show("nova") : index === 3 ? show("neurofly") : show("creative");
          return <div key={group.title} data-screen-hidden={!relevant || undefined}><h3>{group.title}</h3><p>{group.items.join(" · ")}</p></div>;
        })}</div>
      </section>

      {certifications.length > 0 && <section className="resume-section" aria-labelledby="resume-certifications"><h2 id="resume-certifications">Relevant Certifications</h2><div className="resume-section-content">{certifications.map(item => <div key={item.title}><h3>{item.url ? <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a> : item.title}</h3><p>{item.issuer} · {item.date}</p></div>)}</div></section>}
      </div>
    </article>
    <p className="resume-print-note">Prefer a document? Print or download the complete résumé above.</p>
  </div>;
}
