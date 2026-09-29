"use client";

import dynamic from "next/dynamic";

const PEBFaqSection = dynamic(() => import("@/components/PEBFaqSection"));
const ProjectCTASection = dynamic(() => import("@/components/ProjectCTASection"));

export default function BelowFoldClientSections() {
  return (
    <>
      <PEBFaqSection />
      <ProjectCTASection />
    </>
  );
}
