"use client";

import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/Badge";
import { useProgress } from "@/components/ProgressProvider";
import type { FreeCertification, PaidCertification } from "@/data/certifications";
import type { Status } from "@/data/types";

const studyStatuses: Status[] = ["Not Started", "Studying", "Done"];
const futureStatuses = ["Later", "Queued", "Ready", "Done"] as const;

export function FreeCertificationCard({ certification }: { certification: FreeCertification }) {
  const id = `free-cert:${certification.id}`;
  const { progress, setItemProgress, setStatus } = useProgress();
  const item = progress.items[id];
  const status = (item?.status === "Queued" || item?.status === "Ready" || item?.status === "Later" ? "Not Started" : item?.status) ?? "Not Started";

  return (
    <article className="glass-panel rounded-lg p-5 transition hover:border-cyan-300/[0.35]">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Badge tone={status === "Done" ? "green" : status === "Studying" ? "cyan" : "violet"}>{status}</Badge>
          <h3 className="mt-3 text-lg font-semibold text-white">{certification.title}</h3>
          <p className="mt-1 text-sm text-slate-400">{certification.provider}</p>
        </div>
        <a
          href={certification.link}
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-cyan-100 transition hover:border-cyan-300/40"
        >
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          Link
        </a>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-300">{certification.why}</p>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <label className="grid gap-1 text-xs font-medium text-slate-300">
          Status
          <select
            value={status}
            onChange={(event) => setStatus(id, event.target.value as Status)}
            className="focus-ring rounded-md border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-white"
          >
            {studyStatuses.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-xs font-medium text-slate-300">
          Date completed
          <input
            type="date"
            value={item?.completedDate ?? ""}
            onChange={(event) => setItemProgress(id, { completedDate: event.target.value })}
            className="focus-ring rounded-md border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-white"
          />
        </label>
        <label className="grid gap-1 text-xs font-medium text-slate-300">
          Upload badge link
          <input
            type="url"
            value={item?.badgeUrl ?? ""}
            onChange={(event) => setItemProgress(id, { badgeUrl: event.target.value })}
            placeholder="https://..."
            className="focus-ring rounded-md border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-white placeholder:text-slate-600"
          />
        </label>
        <label className="grid gap-1 text-xs font-medium text-slate-300">
          Certificate URL
          <input
            type="url"
            value={item?.certificateUrl ?? ""}
            onChange={(event) => setItemProgress(id, { certificateUrl: event.target.value })}
            placeholder="https://..."
            className="focus-ring rounded-md border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-white placeholder:text-slate-600"
          />
        </label>
      </div>
    </article>
  );
}

export function PaidCertificationCard({ certification }: { certification: PaidCertification }) {
  const id = `paid-cert:${certification.id}`;
  const { progress, setStatus } = useProgress();
  const rawStatus = progress.items[id]?.status;
  const status = rawStatus === "Not Started" || rawStatus === "Studying" ? "Later" : rawStatus ?? "Later";

  return (
    <article className="glass-panel rounded-lg p-5 transition hover:border-violet-300/[0.35] hover:shadow-violet">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            <Badge tone={certification.priority === "Highest" ? "cyan" : certification.priority === "High" ? "green" : "violet"}>
              {certification.priority} priority
            </Badge>
            <Badge tone="amber">{certification.costStatus}</Badge>
          </div>
          <h3 className="text-lg font-semibold text-white">{certification.title}</h3>
        </div>
        <select
          value={status}
          onChange={(event) => setStatus(id, event.target.value as (typeof futureStatuses)[number])}
          className="focus-ring rounded-md border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-white"
          aria-label={`Set planning status for ${certification.title}`}
        >
          {futureStatuses.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <dl className="mt-5 grid gap-4 text-sm md:grid-cols-2">
        <div>
          <dt className="font-semibold text-slate-100">Prerequisites</dt>
          <dd className="mt-1 leading-6 text-slate-300">{certification.prerequisites}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-100">When to take</dt>
          <dd className="mt-1 leading-6 text-slate-300">{certification.whenToTake}</dd>
        </div>
      </dl>
      <div className="mt-4 flex flex-wrap gap-2">
        {certification.skillsCovered.map((skill) => (
          <Badge key={skill} tone="slate">
            {skill}
          </Badge>
        ))}
      </div>
      <a
        href={certification.link}
        target="_blank"
        rel="noreferrer"
        className="focus-ring mt-5 inline-flex items-center gap-2 rounded-md text-sm font-medium text-cyan-100 transition hover:text-white"
      >
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
        Certification link
      </a>
    </article>
  );
}
