import type { MetadataRoute } from "next";
import { projects } from "@/content/site";
import { getExplorations } from "@/lib/explorations";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/explorations", "/resume", ...projects.map(project => `/work/${project.slug}`), ...getExplorations().map(note => `/explorations/${note.slug}`)].map(route => ({ url: new URL(route,siteUrl).href }));
}
