import Link from "next/link";
import type { ReactNode } from "react";

type ChildrenProps = { children: ReactNode; className?: string };

export function Container({ children, className = "" }: ChildrenProps) {
  return <div className={`container ${className}`.trim()}>{children}</div>;
}

export function Eyebrow({ children, className = "" }: ChildrenProps) {
  return <p className={`eyebrow ${className}`.trim()}>{children}</p>;
}

export function SectionHeading({ eyebrow, title, description, children }: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return <div className="section-heading">
    <div><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2></div>
    {description && <p className="section-intro">{description}</p>}
    {children}
  </div>;
}

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" className={diagonal ? "arrow-icon diagonal" : "arrow-icon"}>
    {diagonal
      ? <path d="M6 18 18 6M6 6h12v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      : <path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />}
  </svg>;
}

export function ButtonLink({ href, children, secondary = false, className = "", external = false }: ChildrenProps & {
  href: string;
  secondary?: boolean;
  external?: boolean;
}) {
  const classes = `button ${secondary ? "button-secondary" : "button-primary"} ${className}`.trim();
  if (external) return <a className={classes} href={href} target="_blank" rel="noopener noreferrer">{children}<Arrow diagonal /></a>;
  return <Link className={classes} href={href}>{children}<Arrow /></Link>;
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className="tag">{children}</span>;
}
