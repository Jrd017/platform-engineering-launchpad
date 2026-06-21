"use client";

import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionPanel } from "@/components/SectionPanel";
import { projectIdeas } from "@/data/projects";

export default function ProjectBoardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Build queue"
        title="Personal Project Idea Board"
        description="Prioritize projects that become public proof for platform engineering, backend development, developer tools, and study systems."
      />

      <SectionPanel>
        <p className="text-sm leading-6 text-slate-200">One public project beats ten unfinished ideas. ForgePanel and the Platform Engineering Lab are the strongest proof builders.</p>
      </SectionPanel>

      <div className="grid gap-4 xl:grid-cols-2">
        {projectIdeas.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
