"use client";

import type { LucideIcon } from "lucide-react";
import { Award, BookOpenCheck, Code2, Rocket } from "lucide-react";
import { ProgressBar } from "@/components/ProgressBar";
import { useProgress } from "@/components/ProgressProvider";
import { pythonCertificates } from "@/data/pythonCertificates";
import { pythonStudySteps } from "@/data/pythonLearningPath";
import { pythonProjects } from "@/data/pythonProjects";
import { pythonResources } from "@/data/pythonResources";
import { calculateProgress } from "@/lib/progress";

type SummaryItem = {
  title: string;
  ids: string[];
  icon: LucideIcon;
  label: string;
};

export function PythonProgressSummary() {
  const { progress, isLoaded } = useProgress();
  const summaryItems: SummaryItem[] = [
    {
      title: "Python Path Progress",
      ids: pythonStudySteps.map((step) => `python:path:${step.id}`),
      icon: BookOpenCheck,
      label: "Study order"
    },
    {
      title: "Free Python Certificates Progress",
      ids: pythonCertificates.map((certificate) => `free-cert:${certificate.id}`),
      icon: Award,
      label: "Certificates"
    },
    {
      title: "Python Practice Progress",
      ids: pythonResources.filter((resource) => resource.category === "Practice").map((resource) => `python-resource:${resource.id}`),
      icon: Code2,
      label: "Practice"
    },
    {
      title: "Python Portfolio Projects Progress",
      ids: pythonProjects.map((project) => `python-project:${project.id}`),
      icon: Rocket,
      label: "Projects"
    }
  ];

  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {summaryItems.map((item) => {
        const Icon = item.icon;
        const value = calculateProgress(item.ids, progress.items);

        return (
          <article key={item.title} className="floating-card glass-panel rounded-lg p-5 transition hover:border-cyan-300/[0.35] hover:shadow-float">
            <div className="flex items-start justify-between gap-3">
              <div className="rounded-md border border-white/15 bg-white/[0.11] p-2 text-cyan-100 shadow-pill">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-xs text-slate-300">{item.label}</span>
            </div>
            <h3 className="mt-4 min-h-12 text-base font-semibold leading-6 text-white">{item.title}</h3>
            <div className="mt-5">
              <ProgressBar value={value} loading={!isLoaded} />
            </div>
          </article>
        );
      })}
    </section>
  );
}
