"use client";

import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/Badge";
import { CopyButton } from "@/components/CopyButton";
import { useProgress } from "@/components/ProgressProvider";
import type { PythonResource } from "@/data/pythonResources";

export function PythonResourceCard({ resource }: { resource: PythonResource }) {
  const id = `python-resource:${resource.id}`;
  const { progress, setItemProgress, toggleItem } = useProgress();
  const item = progress.items[id];
  const checked = Boolean(item?.checked || item?.status === "Done");

  return (
    <article className="floating-card glass-panel rounded-lg p-5 transition hover:border-cyan-300/[0.35] hover:shadow-float">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          <Badge tone="cyan">{resource.category}</Badge>
          <Badge tone="slate">{resource.skillLevel}</Badge>
          <Badge tone={checked ? "green" : "violet"}>{checked ? "Done" : "Not started"}</Badge>
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
      <h3 className="mt-4 text-lg font-semibold text-white">{resource.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{resource.why}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        <a
          href={resource.url}
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex items-center gap-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/[0.15]"
        >
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          Start
        </a>
        <CopyButton value={resource.url} label="Copy link" />
      </div>
      <label className="mt-5 grid gap-1 text-xs font-medium text-slate-300">
        Notes
        <textarea
          value={item?.notes ?? ""}
          onChange={(event) => setItemProgress(id, { notes: event.target.value })}
          rows={3}
          className="focus-ring resize-y rounded-md border border-white/10 bg-slate-950/80 px-3 py-2 text-sm leading-6 text-white"
        />
      </label>
    </article>
  );
}
