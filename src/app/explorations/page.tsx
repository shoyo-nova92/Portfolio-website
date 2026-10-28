import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { getExplorations } from "@/lib/explorations";
import { ExplorationList } from "@/components/sections/exploration-list";
import { Contact } from "@/components/sections/site-chrome";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Explorations", "Short technical notes from building Nova and exploring Neurofly: agent validation, observed outcomes, and biologically inspired navigation.", "/explorations");

export default function Explorations() {
  return <><Container><header className="page-hero"><Eyebrow>Notes from the work</Eyebrow><h1 className="page-title">Explorations.</h1><p className="page-description">Questions, distinctions, and ideas that emerge while building.</p></header><section className="pb-24" aria-label="Technical explorations"><ExplorationList notes={getExplorations()} /></section></Container><Contact /></>;
}
