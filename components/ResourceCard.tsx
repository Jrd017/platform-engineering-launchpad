import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/Badge";
import type { Resource } from "@/data/resources";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="glass-panel group rounded-lg p-5 transition hover:border-cyan-300/[0.35] hover:shadow-glow">
      <div className="flex items-start justify-between gap-4">
        <Badge tone="cyan">{resource.category}</Badge>
        <ExternalLink className="h-4 w-4 shrink-0 text-slate-500 transition group-hover:text-cyan-100" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-white">{resource.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{resource.description}</p>
      <a
        href={resource.url}
        target="_blank"
        rel="noreferrer"
        className="focus-ring mt-4 inline-flex rounded-md text-sm font-medium text-cyan-100 transition hover:text-white"
      >
        Open resource
      </a>
    </article>
  );
}
