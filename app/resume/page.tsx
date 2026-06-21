"use client";

import { Badge } from "@/components/Badge";
import { ChecklistItem } from "@/components/ChecklistItem";
import { CopyButton } from "@/components/CopyButton";
import { PageHeader } from "@/components/PageHeader";
import { ProgressBar } from "@/components/ProgressBar";
import { useProgress } from "@/components/ProgressProvider";
import { SectionPanel } from "@/components/SectionPanel";
import {
  leadershipItems,
  resumeChecklist,
  resumeProjectBullets,
  resumeSummaryDraft,
  resumeTargets
} from "@/data/resumeChecklist";
import { calculateProgress } from "@/lib/progress";

export default function ResumePage() {
  const { progress, isLoaded } = useProgress();
  const ids = resumeChecklist.map((item) => item.id);
  const resumeScore = calculateProgress(ids, progress.items);

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="One-page target"
        title="Resume Builder Checklist"
        description="Create a focused one-page resume for platform engineering, backend, DevOps, and software engineering internships."
      />

      <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
        <SectionPanel title="Resume Score" description="The score is based on completed checklist sections.">
          <div className="mb-5">
            <p className="text-5xl font-semibold text-white">{isLoaded ? `${resumeScore}%` : "..."}</p>
          </div>
          <ProgressBar value={resumeScore} loading={!isLoaded} label="One-page resume readiness" />
          <div className="mt-5 flex flex-wrap gap-2">
            {resumeTargets.map((target) => (
              <Badge key={target} tone="cyan">
                {target}
              </Badge>
            ))}
          </div>
        </SectionPanel>

        <SectionPanel title="Summary Draft">
          <p className="rounded-lg border border-white/10 bg-slate-950/60 p-4 text-sm leading-6 text-slate-200">{resumeSummaryDraft}</p>
          <CopyButton value={resumeSummaryDraft} className="mt-3" />
        </SectionPanel>
      </section>

      <SectionPanel title="Guided Checklist" description="Build each section until the resume is complete enough to apply fast.">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {resumeChecklist.map((item) => (
            <ChecklistItem key={item.id} id={item.id} title={item.title} description={item.description} />
          ))}
        </div>
      </SectionPanel>

      <div className="grid gap-5 xl:grid-cols-2">
        <SectionPanel title="Leadership Items">
          <div className="grid gap-3">
            {leadershipItems.map((item) => (
              <p key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-3 text-sm text-slate-200">
                {item}
              </p>
            ))}
          </div>
        </SectionPanel>

        <SectionPanel title="Project Bullets">
          <div className="flex flex-wrap gap-2">
            {resumeProjectBullets.map((project) => (
              <Badge key={project} tone="violet">
                {project}
              </Badge>
            ))}
          </div>
          <CopyButton value={resumeProjectBullets.map((project) => `- ${project}`).join("\n")} label="Copy bullets" className="mt-4" />
        </SectionPanel>
      </div>
    </div>
  );
}
