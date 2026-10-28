import Link from "next/link";
import { identity } from "@/content/site";
import { Arrow, Container } from "@/components/ui/primitives";

export function SocialLinks({ email = false, resume = false }: { email?: boolean; resume?: boolean }) {
  return <div className="social-links">
    {email && <a href={`mailto:${identity.email}`}>Email<Arrow diagonal /></a>}
    <a href={identity.github} target="_blank" rel="noopener noreferrer">GitHub<Arrow diagonal /></a>
    <a href={identity.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<Arrow diagonal /></a>
    <a href={identity.x} target="_blank" rel="noopener noreferrer">X<Arrow diagonal /></a>
    {resume && <Link href="/resume">Résumé<Arrow /></Link>}
  </div>;
}

export function SiteHeader() {
  return <header className="site-header">
    <Container className="header-inner">
      <Link href="/" className="brand"><span className="brand-mark" aria-hidden="true">sb</span>{identity.name}</Link>
      <nav className="nav-links" aria-label="Main navigation">
        <Link href="/#work">Work</Link><Link href="/explorations">Explorations</Link><Link href="/resume">Résumé</Link><Link href="/#about">About</Link>
      </nav>
      <a className="header-contact" href={`mailto:${identity.email}`}><span className="header-contact-dot" aria-hidden="true" />Let’s talk<Arrow diagonal /></a>
    </Container>
  </header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><Container className="footer-inner"><p>© {new Date().getFullYear()} {identity.name}</p><p className="eyebrow">Built with intent.</p><Link href="/#top">Back to top ↑</Link></Container></footer>;
}

export function Contact() {
  return <section className="contact-section" id="contact" aria-labelledby="contact-heading"><Container>
    <div data-reveal>
    <p className="eyebrow">Start a conversation</p><h2 id="contact-heading" className="contact-title">Have an interesting problem?<br /><span>Let’s talk.</span></h2>
    <a className="contact-email" href={`mailto:${identity.email}`}>{identity.email}<Arrow diagonal /></a>
    <div className="contact-socials"><SocialLinks resume /></div>
    </div>
  </Container></section>;
}
