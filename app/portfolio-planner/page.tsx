"use client";

import { Badge } from "@/components/Badge";
import { ChecklistItem } from "@/components/ChecklistItem";
import { PageHeader } from "@/components/PageHeader";
import { ProgressBar } from "@/components/ProgressBar";
import { useProgress } from "@/components/ProgressProvider";
import { SectionPanel } from "@/components/SectionPanel";
import {
  featuredProjectCategories,
  portfolioChecklist,
  portfolioContent,
  portfolioPages
} from "@/data/portfolioChecklist";
import { calculateProgress } from "@/lib/progress";

export default function PortfolioPlannerPage() {
  const { progress, isLoaded } = useProgress();
  const ids = portfolioChecklist.map((item) => item.id);
  const portfolioProgress = calculateProgress(ids, progress.items);

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Portfolio plan"
        title="Portfolio Website Planner"
        description="Plan the website that collects your strongest proof in one polished public place."
      />

      <SectionPanel title="Portfolio Progress" description="One public project beats ten unfinished ideas.">
        <ProgressBar value={portfolioProgress} loading={!isLoaded} label="Portfolio readiness" />
      </SectionPanel>

      <div className="grid gap-5 xl:grid-cols-3">
        <SectionPanel title="Pages">
          <div className="grid gap-3">
            {portfolioPages.map((page) => (
              <p key={page} className="surface-card rounded-lg border border-white/10 bg-white/[0.04] p-3 text-sm text-slate-200">
                {page}
              </p>
            ))}
          </div>
        </SectionPanel>

        <SectionPanel title="Content">
          <div className="flex flex-wrap gap-2">
            {portfolioContent.map((item) => (
              <Badge key={item} tone="cyan">
                {item}
              </Badge>
            ))}
          </div>
        </SectionPanel>

        <SectionPanel title="Featured Categories">
          <div className="flex flex-wrap gap-2">
            {featuredProjectCategories.map((category) => (
              <Badge key={category} tone="violet">
                {category}
              </Badge>
            ))}
          </div>
        </SectionPanel>
      </div>

      <SectionPanel title="Checklist" description="Keep version 1 lean, public, and useful before expanding it.">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {portfolioChecklist.map((item) => (
            <ChecklistItem key={item.id} id={item.id} title={item.title} description={item.description} />
          ))}
        </div>
      </SectionPanel>
    </div>
  );
}
