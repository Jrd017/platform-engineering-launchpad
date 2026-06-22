"use client";

import { FolderGit2 as Github, Rocket } from "lucide-react";
import { Badge } from "@/components/Badge";
import { useProgress } from "@/components/ProgressProvider";
import type { PythonProject } from "@/data/pythonProjects";

export function PythonProjectCard({ project }: { project: PythonProject }) {
  const id = `python-project:${project.id}`;
  const { progress, setItemProgress, toggleItem } = useProgress();
  const item = progress.items[id];
  const checked = Boolean(item?.checked || item?.status === "Done");

  return (
    <article className="floating-card glass-panel rounded-lg p-5 transition hover:border-cyan-300/[0.35] hover:shadow-float">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge tone="cyan">{project.afterStep}</Badge>
            <Badge tone="slate">{project.skillLevel}</Badge>
            <Badge tone={checked ? "green" : "violet"}>{checked ? "Done" : "Not started"}</Badge>
          </div>
          <h3 className="mt-3 text-lg font-semibold text-white">{project.title}</h3>
          <p className="mt-1 text-sm text-slate-400">{project.language}</p>
        </div>
        <label className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-slate-200">
          <input
            type="checkbox"
            checked={checked}
            onChange={(event) => toggleItem(id, event.target.checked)}
            className="h-4 w-4 rounded border-white/20 bg-slate-950 text-cyan-300 focus:ring-cyan-300"
          />
          Done
        </label>
      </div>

      <div className="mt-4 grid gap-3 text-sm md:grid-cols-2">
        <InfoBlock label="Expected output" value={project.expectedOutput} />
        <InfoBlock label="Portfolio value" value={project.portfolioValue} />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.conceptsUsed.map((concept) => (
          <Badge key={concept} tone="slate">
            {concept}
          </Badge>
        ))}
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <label className="grid gap-1 text-xs font-medium text-slate-300">
          GitHub repo
          <div className="relative">
            <Github className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" aria-hidden="true" />
            <input
              type="url"
              value={item?.repoUrl ?? ""}
              onChange={(event) => setItemProgress(id, { repoUrl: event.target.value })}
              placeholder="https://github.com/..."
              className="focus-ring w-full rounded-md border border-white/10 bg-slate-950/80 py-2 pl-10 pr-3 text-sm text-white placeholder:text-slate-600"
            />
          </div>
        </label>
        <label className="grid gap-1 text-xs font-medium text-slate-300">
          Live demo
          <div className="relative">
            <Rocket className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" aria-hidden="true" />
            <input
              type="url"
              value={item?.demoUrl ?? ""}
              onChange={(event) => setItemProgress(id, { demoUrl: event.target.value })}
              placeholder={project.liveDemoApplicable ? "https://..." : "Optional"}
              className="focus-ring w-full rounded-md border border-white/10 bg-slate-950/80 py-2 pl-10 pr-3 text-sm text-white placeholder:text-slate-600"
            />
          </div>
        </label>
      </div>
    </article>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="surface-card rounded-lg border border-white/10 bg-white/[0.04] p-3">
      <dt className="text-xs font-semibold uppercase text-slate-500">{label}</dt>
      <dd className="mt-1 text-sm leading-6 text-slate-300">{value}</dd>
    </div>
  );
}
