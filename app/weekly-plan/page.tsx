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
        eyebrow="6-week sprint"
        title="Weekly Action Plan"
        description="A tutorial-based six-week plan for TypeScript practice, Python study, certificates, automation scripts, FastAPI, pytest, and GitHub proof."
      />

      <SectionPanel title="Action Progress" description="Code TypeScript, study Python, practice exercises, build one small script or feature, document, and push to GitHub.">
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
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {dailyChecklist.map((item) => (
            <ChecklistItem key={item.id} id={item.id} title={item.title} compact />
          ))}
        </div>
      </SectionPanel>
    </div>
  );
}
