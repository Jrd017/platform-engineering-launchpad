"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";
import { Badge } from "@/components/Badge";
import { ChecklistItem } from "@/components/ChecklistItem";
import { PageHeader } from "@/components/PageHeader";
import { ProgressBar } from "@/components/ProgressBar";
import { useProgress } from "@/components/ProgressProvider";
import { SectionPanel } from "@/components/SectionPanel";
import { platformRoadmap } from "@/data/platformRoadmap";
import { calculateProgress } from "@/lib/progress";

export default function PlatformRoadmapPage() {
  const { progress, isLoaded } = useProgress();
  const [openPhaseId, setOpenPhaseId] = useState(platformRoadmap[0]?.id ?? "");
  const allTopicIds = useMemo(() => platformRoadmap.flatMap((phase) => phase.topics.map((topic) => `platform:${topic.id}`)), []);
  const overall = calculateProgress(allTopicIds, progress.items);

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Study roadmap"
        title="Platform Engineering Roadmap"
        description="Track Linux, containers, CI/CD, Kubernetes, Terraform, GitOps, observability, security, and internal developer platform fundamentals."
      />

      <SectionPanel title="Roadmap Progress" description="Status is saved locally and reflected on the home dashboard.">
        <ProgressBar value={overall} loading={!isLoaded} label="Platform engineering study path" />
      </SectionPanel>

      <div className="grid gap-4">
        {platformRoadmap.map((phase) => {
          const topicIds = phase.topics.map((topic) => `platform:${topic.id}`);
          const phaseProgress = calculateProgress(topicIds, progress.items);
          const open = openPhaseId === phase.id;

          return (
            <section key={phase.id} className="glass-panel rounded-lg">
              <button
                type="button"
                onClick={() => setOpenPhaseId(open ? "" : phase.id)}
                className="focus-ring flex w-full items-center justify-between gap-4 rounded-lg p-5 text-left"
                aria-expanded={open}
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-lg font-semibold text-white">{phase.title}</h2>
                    <Badge tone={phaseProgress === 100 ? "green" : "cyan"}>{phaseProgress}%</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{phase.summary}</p>
                </div>
                <ChevronDown className={clsx("h-5 w-5 shrink-0 text-slate-400 transition", open && "rotate-180")} aria-hidden="true" />
              </button>
              {open ? (
                <div className="border-t border-white/10 p-5">
                  <div className="mb-5">
                    <ProgressBar value={phaseProgress} label="Phase progress" />
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    {phase.topics.map((topic) => (
                      <ChecklistItem
                        key={topic.id}
                        id={`platform:${topic.id}`}
                        title={topic.title}
                        description={topic.explanation}
                        link={topic.link}
                        meta={`${topic.difficulty} | ${topic.estimatedTime}`}
                        statusMode
                      />
                    ))}
                  </div>
                </div>
              ) : null}
            </section>
          );
        })}
      </div>
    </div>
  );
}
