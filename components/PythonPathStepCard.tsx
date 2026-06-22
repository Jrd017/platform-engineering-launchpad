"use client";

import { CheckCircle2, ExternalLink, Terminal } from "lucide-react";
import { clsx } from "clsx";
import { Badge } from "@/components/Badge";
import { CopyButton } from "@/components/CopyButton";
import { useProgress } from "@/components/ProgressProvider";
import type { PythonStudyStep } from "@/data/pythonLearningPath";
import type { Status } from "@/data/types";

const statusOptions: { value: Status; label: string }[] = [
  { value: "Not Started", label: "Not started" },
  { value: "Studying", label: "In progress" },
  { value: "Done", label: "Completed" }
];

export function PythonPathStepCard({ step }: { step: PythonStudyStep }) {
  const id = `python:path:${step.id}`;
  const { progress, setStatus, toggleItem } = useProgress();
  const item = progress.items[id];
  const checked = Boolean(item?.checked || item?.status === "Done");
  const status = (item?.status === "Queued" || item?.status === "Ready" || item?.status === "Later" ? "Not Started" : item?.status) ?? "Not Started";
  const statusLabel = statusOptions.find((option) => option.value === status)?.label ?? "Not started";

  return (
    <article className={clsx("floating-card glass-panel rounded-lg p-5 transition hover:border-cyan-300/[0.35] hover:shadow-float", checked && "border-emerald-300/30")}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone={checked ? "green" : step.priority === "Highest" ? "cyan" : "violet"}>Step {step.stepNumber}</Badge>
            <Badge tone="slate">{step.difficulty}</Badge>
            {step.priority ? <Badge tone={step.priority === "Highest" ? "cyan" : step.priority === "High" ? "green" : "violet"}>{step.priority} priority</Badge> : null}
          </div>
          <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
          {step.type ? <p className="mt-1 text-sm text-slate-400">{step.type}</p> : null}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <label className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-slate-200">
            <input
              type="checkbox"
              checked={checked}
              onChange={(event) => toggleItem(id, event.target.checked)}
              className="h-4 w-4 rounded border-white/20 bg-slate-950 text-cyan-300 focus:ring-cyan-300"
            />
            Done
          </label>
          <select
            value={status}
            onChange={(event) => setStatus(id, event.target.value as Status)}
            className="focus-ring rounded-md border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-white"
            aria-label={`Set status for ${step.title}`}
          >
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge tone={checked ? "green" : status === "Studying" ? "cyan" : "slate"}>{statusLabel}</Badge>
        {step.proofToCollect ? <Badge tone="amber">Proof: {step.proofToCollect}</Badge> : null}
      </div>

      {step.goal ? <TextBlock title="Goal" body={step.goal} /> : null}
      {step.why ? <TextBlock title="Why this step" body={step.why} /> : null}

      {step.links.length ? (
        <div className="mt-5">
          <h4 className="text-sm font-semibold text-white">Links</h4>
          <div className="mt-3 grid gap-2">
            {step.links.map((link) => (
              <div key={link.url} className="surface-card flex flex-wrap items-center justify-between gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex min-w-0 items-center gap-2 rounded-md text-sm font-medium text-cyan-100 transition hover:text-white"
                >
                  <span className="truncate">{link.label}</span>
                  <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
                <CopyButton value={link.url} label="Copy link" className="px-2 py-1 text-xs" />
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <ListBlock title="What to install" items={step.installItems} />
      <ListBlock title="What to do" items={step.whatToDo} />
      <ListBlock title="What to learn" items={step.whatToLearn} />
      <ListBlock title="How to use" items={step.howToUse} />
      <ListBlock title="What to build after" items={step.whatToBuild} />

      {step.commands?.length ? (
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {step.commands.map((group) => {
            const commandText = group.commands.join("\n");

            return (
              <div key={group.label} className="surface-card rounded-lg border border-white/10 bg-slate-950/50 p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h4 className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                    <Terminal className="h-4 w-4 text-cyan-100" aria-hidden="true" />
                    {group.label}
                  </h4>
                  <CopyButton value={commandText} label="Copy" className="px-2 py-1 text-xs" />
                </div>
                <pre className="scrollbar-soft overflow-x-auto rounded-md bg-black/30 p-3 text-xs leading-6 text-slate-200">
                  <code>{commandText}</code>
                </pre>
              </div>
            );
          })}
        </div>
      ) : null}
    </article>
  );
}

function TextBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="surface-card mt-5 rounded-lg border border-white/10 bg-white/[0.04] p-4">
      <h4 className="text-sm font-semibold text-white">{title}</h4>
      <p className="mt-2 text-sm leading-6 text-slate-300">{body}</p>
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) {
    return null;
  }

  return (
    <div className="mt-5">
      <h4 className="text-sm font-semibold text-white">{title}</h4>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="surface-card flex gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm leading-6 text-slate-300">
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-100" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
