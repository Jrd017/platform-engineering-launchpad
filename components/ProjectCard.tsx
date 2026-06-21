"use client";

import { Badge } from "@/components/Badge";
import { ChecklistItem } from "@/components/ChecklistItem";
import { useProgress } from "@/components/ProgressProvider";
import type { ProjectIdea } from "@/data/projects";
import type { Status } from "@/data/types";

const statusOptions: Status[] = ["Not Started", "Studying", "Done"];

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function ProjectCard({ project }: { project: ProjectIdea }) {
  const id = `project:${project.id}`;
  const { progress, setStatus } = useProgress();
  const rawStatus = progress.items[id]?.status;
  const status = rawStatus === "Queued" || rawStatus === "Ready" || rawStatus === "Later" ? "Not Started" : rawStatus ?? "Not Started";
  const trackableItems = project.features ?? project.deliverables ?? [];

  return (
    <article className="glass-panel rounded-lg p-5 transition hover:border-cyan-300/[0.35] hover:shadow-glow">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Badge tone={project.priority === "Highest" ? "cyan" : project.priority === "High" ? "green" : project.priority === "Medium" ? "violet" : "slate"}>
            {project.priority} priority
          </Badge>
          <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
        </div>
        <select
          value={status}
          onChange={(event) => setStatus(id, event.target.value as Status)}
          className="focus-ring rounded-md border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-white"
          aria-label={`Set status for ${project.title}`}
        >
          {statusOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-300">{project.description}</p>
      {project.important ? (
        <p className="mt-3 rounded-lg border border-amber-300/25 bg-amber-300/10 p-3 text-sm leading-6 text-amber-100">{project.important}</p>
      ) : null}
      {project.reasonForLowPriority ? (
        <p className="mt-3 rounded-lg border border-white/10 bg-white/[0.04] p-3 text-sm leading-6 text-slate-300">{project.reasonForLowPriority}</p>
      ) : null}
      {project.techStack?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} tone="slate">
              {tech}
            </Badge>
          ))}
        </div>
      ) : null}
      {trackableItems.length ? (
        <div className="mt-5 grid gap-3">
          {trackableItems.map((item) => (
            <ChecklistItem key={item} id={`${id}:${slugify(item)}`} title={item} compact />
          ))}
        </div>
      ) : null}
      {project.later?.length ? (
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase text-slate-400">Later</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.later.map((item) => (
              <Badge key={item} tone="violet">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}
