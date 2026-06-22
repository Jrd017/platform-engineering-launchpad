"use client";

import { Search } from "lucide-react";

export function ResourceSearchBar({
  query,
  onQueryChange,
  category,
  onCategoryChange,
  categories
}: {
  query: string;
  onQueryChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  categories: string[];
}) {
  return (
    <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_260px]">
      <label className="relative block">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" aria-hidden="true" />
        <input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search Python tutorials"
          className="focus-ring w-full rounded-md border border-white/10 bg-slate-950/80 py-3 pl-10 pr-3 text-sm text-white placeholder:text-slate-600"
        />
      </label>
      <select
        value={category}
        onChange={(event) => onCategoryChange(event.target.value)}
        className="focus-ring rounded-md border border-white/10 bg-slate-950/80 px-3 py-3 text-sm text-white"
        aria-label="Filter Python resources by category"
      >
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
