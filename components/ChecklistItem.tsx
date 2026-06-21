"use client";

import { ExternalLink } from "lucide-react";
import { clsx } from "clsx";
import type { ReactNode } from "react";
import { useProgress } from "@/components/ProgressProvider";
import type { Status } from "@/data/types";

const statusOptions: Status[] = ["Not Started", "Studying", "Done"];

export function ChecklistItem({
  id,
  title,
  description,
  link,
  meta,
  statusMode = false,
  children,
  compact = false
}: {
  id: string;
  title: string;
  description?: string;
  link?: string;
  meta?: string;
  statusMode?: boolean;
  children?: ReactNode;
  compact?: boolean;
}) {
  const { progress, toggleItem, setStatus } = useProgress();
  const item = progress.items[id];
  const checked = Boolean(item?.checked || item?.status === "Done");
  const currentStatus = (item?.status === "Queued" || item?.status === "Ready" || item?.status === "Later"
    ? "Not Started"
    : item?.status) ?? (checked ? "Done" : "Not Started");

  return (
    <article
      className={clsx(
        "rounded-lg border bg-white/[0.045] transition hover:border-cyan-300/30 hover:bg-white/[0.07]",
        checked ? "border-emerald-300/25" : "border-white/10",
        compact ? "p-3" : "p-4"
      )}
    >
      <div className="flex items-start gap-3">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(event) => toggleItem(id, event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-950 text-cyan-300 focus:ring-cyan-300"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <label htmlFor={id} className="cursor-pointer text-sm font-semibold text-white">
              {title}
            </label>
            {statusMode ? (
              <select
                value={currentStatus}
                onChange={(event) => setStatus(id, event.target.value as Status)}
                className="focus-ring rounded-md border border-white/10 bg-slate-950/80 px-2 py-1 text-xs text-slate-100"
                aria-label={`Set status for ${title}`}
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            ) : null}
          </div>
          {description ? <p className="mt-1 text-sm leading-6 text-slate-300">{description}</p> : null}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-400">
            {meta ? <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1">{meta}</span> : null}
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-1 rounded-md text-cyan-100 transition hover:text-white"
              >
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                Study link
              </a>
            ) : null}
          </div>
          {children ? <div className="mt-3">{children}</div> : null}
        </div>
      </div>
    </article>
  );
}
