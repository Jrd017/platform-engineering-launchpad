"use client";

import { ExternalLink, X } from "lucide-react";
import { Badge } from "@/components/Badge";
import type { RoadmapStage } from "@/data/roadmap";

export function RoadmapDetailPanel({
  stage,
  locked,
  onClose
}: {
  stage: RoadmapStage;
  locked: boolean;
  onClose: () => void;
}) {
  return (
    <aside id="roadmap-detail" className="glass-panel rounded-lg p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge tone={stage.status === "Current focus" ? "cyan" : stage.label === "Goal" ? "green" : "violet"}>
              {stage.status}
            </Badge>
            {locked ? <Badge tone="green">Locked open</Badge> : <Badge tone="slate">Detail panel</Badge>}
          </div>
          <h2 className="mt-4 text-xl font-semibold text-white">{stage.title}</h2>
        </div>
        {locked ? (
          <button
            type="button"
            onClick={onClose}
            className="focus-ring rounded-md border border-white/10 bg-white/[0.06] p-2 text-slate-200 transition hover:border-rose-300/40 hover:text-white"
            aria-label="Close locked roadmap detail"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        ) : null}
      </div>

      <div className="mt-5 space-y-5">
        <DetailBlock title="Why it matters" body={stage.why} />
        <div>
          <h3 className="text-sm font-semibold text-white">What to do</h3>
          <ul className="mt-2 grid gap-2 text-sm leading-6 text-slate-300">
            {stage.whatToDo.map((item) => (
              <li key={item} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
        {stage.studyLinks?.length ? (
          <div>
            <h3 className="text-sm font-semibold text-white">Study links</h3>
            <div className="mt-2 grid gap-2">
              {stage.studyLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-cyan-100 transition hover:border-cyan-300/[0.35] hover:text-white"
                >
                  <span>{link.label}</span>
                  <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        ) : null}
        <div className="grid gap-3 text-sm md:grid-cols-2">
          <DetailMetric label="Related project" value={stage.relatedProject ?? "None yet"} />
          <DetailMetric label="Related certification" value={stage.relatedCertification ?? "None required"} />
          <DetailMetric label="Estimated time" value={stage.estimatedTime} />
          <DetailMetric label="Next action" value={stage.nextAction} />
        </div>
      </div>
    </aside>
  );
}

function DetailBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{body}</p>
    </div>
  );
}

function DetailMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
      <dt className="text-xs font-semibold uppercase text-slate-500">{label}</dt>
      <dd className="mt-1 text-sm leading-5 text-slate-200">{value}</dd>
    </div>
  );
}
