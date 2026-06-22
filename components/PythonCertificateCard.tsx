"use client";

import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/Badge";
import { CopyButton } from "@/components/CopyButton";
import { useProgress } from "@/components/ProgressProvider";
import type { PythonCertificate, PythonProofLabel } from "@/data/pythonCertificates";
import type { Status } from "@/data/types";

const statusOptions: { value: Status; label: string }[] = [
  { value: "Not Started", label: "Not started" },
  { value: "Studying", label: "In progress" },
  { value: "Done", label: "Completed" }
];

const labelTone: Record<PythonProofLabel, "cyan" | "green" | "amber" | "rose"> = {
  "Free certificate": "green",
  "Free badge": "cyan",
  "Free course": "amber",
  "Paid certification": "rose"
};

export function PythonCertificateCard({ certificate }: { certificate: PythonCertificate }) {
  const id = `free-cert:${certificate.id}`;
  const { progress, setItemProgress, setStatus } = useProgress();
  const item = progress.items[id];
  const status = (item?.status === "Queued" || item?.status === "Ready" || item?.status === "Later" ? "Not Started" : item?.status) ?? "Not Started";
  const proofUrlKey = certificate.label === "Free badge" ? "badgeUrl" : "certificateUrl";
  const proofUrl = proofUrlKey === "badgeUrl" ? item?.badgeUrl ?? "" : item?.certificateUrl ?? "";

  return (
    <article className="floating-card glass-panel rounded-lg p-5 transition hover:border-cyan-300/[0.35] hover:shadow-float">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge tone={status === "Done" ? "green" : status === "Studying" ? "cyan" : "violet"}>
              {status === "Done" ? "Completed" : status === "Studying" ? "In progress" : "Not started"}
            </Badge>
            <Badge tone={labelTone[certificate.label]}>{certificate.label}</Badge>
            <Badge tone="slate">{certificate.category}</Badge>
          </div>
          <h3 className="mt-3 text-lg font-semibold text-white">{certificate.title}</h3>
          <p className="mt-1 text-sm text-slate-400">{certificate.provider}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href={certificate.link}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-cyan-100 transition hover:border-cyan-300/40"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Link
          </a>
          <CopyButton value={certificate.link} label="Copy" />
        </div>
      </div>

      <p className="surface-card mt-4 rounded-lg border border-white/10 bg-white/[0.04] p-3 text-sm leading-6 text-slate-300">Proof to collect: {certificate.proof}</p>

      {certificate.certificatePage ? (
        <div className="surface-card mt-3 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-white/10 bg-white/[0.04] p-3">
          <a href={certificate.certificatePage} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-md text-sm text-cyan-100 transition hover:text-white">
            Certificate page
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          <CopyButton value={certificate.certificatePage} label="Copy page" className="px-2 py-1 text-xs" />
        </div>
      ) : null}

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <label className="grid gap-1 text-xs font-medium text-slate-300">
          Status
          <select
            value={status}
            onChange={(event) => setStatus(id, event.target.value as Status)}
            className="focus-ring rounded-md border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-white"
          >
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-xs font-medium text-slate-300">
          Start date
          <input
            type="date"
            value={item?.startDate ?? ""}
            onChange={(event) => setItemProgress(id, { startDate: event.target.value })}
            className="focus-ring rounded-md border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-white"
          />
        </label>
        <label className="grid gap-1 text-xs font-medium text-slate-300">
          Completion date
          <input
            type="date"
            value={item?.completedDate ?? ""}
            onChange={(event) => setItemProgress(id, { completedDate: event.target.value })}
            className="focus-ring rounded-md border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-white"
          />
        </label>
        <label className="grid gap-1 text-xs font-medium text-slate-300">
          {certificate.label === "Free badge" ? "Badge URL" : "Certificate URL"}
          <input
            type="url"
            value={proofUrl}
            onChange={(event) =>
              setItemProgress(id, proofUrlKey === "badgeUrl" ? { badgeUrl: event.target.value } : { certificateUrl: event.target.value })
            }
            placeholder="https://..."
            className="focus-ring rounded-md border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-white placeholder:text-slate-600"
          />
        </label>
        {certificate.id === "cs50p-python" ? (
          <label className="grid gap-1 text-xs font-medium text-slate-300">
            Final project link
            <input
              type="url"
              value={item?.finalProjectUrl ?? ""}
              onChange={(event) => setItemProgress(id, { finalProjectUrl: event.target.value })}
              placeholder="https://..."
              className="focus-ring rounded-md border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-white placeholder:text-slate-600"
            />
          </label>
        ) : null}
        {certificate.id === "freecodecamp-python" ? (
          <label className="grid gap-1 text-xs font-medium text-slate-300 md:col-span-2">
            Project links
            <textarea
              value={item?.projectLinks ?? ""}
              onChange={(event) => setItemProgress(id, { projectLinks: event.target.value })}
              rows={3}
              placeholder="Paste project links, one per line"
              className="focus-ring resize-y rounded-md border border-white/10 bg-slate-950/80 px-3 py-2 text-sm leading-6 text-white placeholder:text-slate-600"
            />
          </label>
        ) : null}
        <label className="grid gap-1 text-xs font-medium text-slate-300 md:col-span-2">
          Notes
          <textarea
            value={item?.notes ?? ""}
            onChange={(event) => setItemProgress(id, { notes: event.target.value })}
            rows={3}
            className="focus-ring resize-y rounded-md border border-white/10 bg-slate-950/80 px-3 py-2 text-sm leading-6 text-white"
          />
        </label>
      </div>
    </article>
  );
}
