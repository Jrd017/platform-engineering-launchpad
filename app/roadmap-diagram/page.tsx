"use client";

import { PageHeader } from "@/components/PageHeader";
import { RoadmapDiagram } from "@/components/RoadmapDiagram";

export default function RoadmapDiagramPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Interactive path"
        title="Roadmap Diagram"
        description="Hover, focus, or tap each node to inspect why it matters, what to do next, and which proof artifact it connects to."
      />
      <RoadmapDiagram />
    </div>
  );
}
