"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";
import { ResourceCard } from "@/components/ResourceCard";
import { SectionPanel } from "@/components/SectionPanel";
import { resources } from "@/data/resources";

export default function ResourcesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = useMemo(() => ["All", ...Array.from(new Set(resources.map((resource) => resource.category)))], []);

  const filteredResources = resources.filter((resource) => {
    const haystack = `${resource.title} ${resource.description} ${resource.category}`.toLowerCase();
    const matchesQuery = haystack.includes(query.toLowerCase());
    const matchesCategory = category === "All" || resource.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Study links"
        title="Study Links Library"
        description="Search roadmaps, official docs, certification pages, cloud learning portals, GitOps resources, observability docs, and developer portal references."
      />

      <SectionPanel>
        <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_260px]">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" aria-hidden="true" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search resources"
              className="focus-ring w-full rounded-md border border-white/10 bg-slate-950/80 py-3 pl-10 pr-3 text-sm text-white placeholder:text-slate-600"
            />
          </label>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="focus-ring rounded-md border border-white/10 bg-slate-950/80 px-3 py-3 text-sm text-white"
            aria-label="Filter by category"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </SectionPanel>

      {filteredResources.length === 0 ? (
        <EmptyState title="No resources found" description="Try a different search term or category." />
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      )}
    </div>
  );
}
