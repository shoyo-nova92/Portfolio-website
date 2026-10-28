import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { identity } from "@/content/site";
import { siteUrl } from "@/lib/site-url";
import { SiteFooter, SiteHeader } from "@/components/sections/site-chrome";
import { MotionController } from "@/components/motion/motion-controller";
import "@/styles/globals.css";

const manrope = localFont({
  src: "../styles/fonts/manrope-latin-wght-normal.woff2",
  variable: "--font-display",
  weight: "200 800",
  style: "normal",
  display: "swap",
  fallback: ["Segoe UI", "Arial", "sans-serif"],
});

const title = "Shourya Bhardwaj — AI Systems, Agents & Experimental Engineering";
const description = "Shourya Bhardwaj builds ambitious technical systems across AI agents, desktop automation, and biologically inspired simulation. Explore Nova, Neurofly, and the engineering behind them.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: title, template: "%s — Shourya Bhardwaj" },
  description,
  applicationName: "Shourya Bhardwaj Portfolio",
  authors: [{ name: identity.name }],
  creator: identity.name,
  openGraph: { type: "website", locale: "en_IN", siteName: identity.name, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Shourya Bhardwaj — builder and engineer" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const person = { "@context": "https://schema.org", "@type": "Person", name: identity.name, url: siteUrl.href, email: identity.email, sameAs: [identity.github, identity.linkedin, identity.x], description: identity.summary };
  return <html lang="en" data-scroll-behavior="smooth" className={manrope.variable}><body id="top">
    <a href="#main" className="skip-link">Skip to content</a>
    <SiteHeader />
    <main id="main" tabIndex={-1}>{children}</main>
    <SiteFooter />
    <MotionController />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} />
  </body></html>;
}
