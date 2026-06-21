"use client";

import { ChecklistItem } from "@/components/ChecklistItem";
import { PageHeader } from "@/components/PageHeader";
import { ProgressBar } from "@/components/ProgressBar";
import { useProgress } from "@/components/ProgressProvider";
import { SectionPanel } from "@/components/SectionPanel";
import { dailyChecklist, weeklyPlan } from "@/data/weeklyPlan";
import { calculateProgress } from "@/lib/progress";

export default function WeeklyPlanPage() {
  const { progress, isLoaded } = useProgress();
  const ids = [...weeklyPlan.flatMap((week) => week.items.map((item) => item.id)), ...dailyChecklist.map((item) => item.id)];
  const totalProgress = calculateProgress(ids, progress.items);

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="4-week sprint"
        title="Weekly Action Plan"
        description="A calm four-week plan for GitHub, resume, portfolio, ForgePanel, Docker, CI/CD, badges, LinkedIn, and internship applications."
      />

      <SectionPanel title="Action Progress" description="Study 1 hour. Build 1 hour. Document 30 minutes. Push to GitHub. Update progress.">
        <ProgressBar value={totalProgress} loading={!isLoaded} label="Weekly and daily checklist progress" />
      </SectionPanel>

      <section className="grid gap-4 xl:grid-cols-2">
        {weeklyPlan.map((week) => (
          <SectionPanel key={week.id} title={week.title} description={week.focus}>
            <div className="grid gap-3">
              {week.items.map((item) => (
                <ChecklistItem key={item.id} id={item.id} title={item.title} compact />
              ))}
            </div>
          </SectionPanel>
        ))}
      </section>

      <SectionPanel title="Daily Checklist" description="A repeatable loop that keeps the career system moving.">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {dailyChecklist.map((item) => (
            <ChecklistItem key={item.id} id={item.id} title={item.title} compact />
          ))}
        </div>
      </SectionPanel>
    </div>
  );
}
