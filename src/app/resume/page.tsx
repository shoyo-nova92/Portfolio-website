import type { Metadata } from "next";
import { ResumeView } from "@/components/resume/resume-view";
import { identity } from "@/content/site";
import "@/components/resume/resume.css";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Résumé", `${identity.name}'s selected engineering projects, creative experience, and technical capabilities.`, "/resume");

export default function ResumePage() {
  return <ResumeView />;
}
