import type { Metadata } from "next";
import { identity } from "@/content/site";

/** Nested social fields replace layout defaults, so every route gets a complete set. */
export function pageMetadata(title: string, description: string, url: string, article = false): Metadata {
  const socialTitle = `${title} — ${identity.name}`;
  const images = [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Shourya Bhardwaj — builder and engineer" }];
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: article ? "article" : "website", title: socialTitle, description, url, siteName: identity.name, locale: "en_IN", images, ...(article ? { authors: [identity.name] } : {}) },
    twitter: { card: "summary_large_image", title: socialTitle, description, images: ["/opengraph-image"] },
  };
}
