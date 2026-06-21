"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";
import { Badge } from "@/components/Badge";
import type { RoadmapStage } from "@/data/roadmap";

export function RoadmapNode({
  stage,
  active,
  faded,
  selected,
  onHover,
  onLeave,
  onSelect,
  className
}: {
  stage: RoadmapStage;
  active: boolean;
  faded: boolean;
  selected: boolean;
  onHover: () => void;
  onLeave: () => void;
  onSelect: () => void;
  className?: string;
}) {
  return (
    <motion.button
      type="button"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      onClick={onSelect}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect();
        }
      }}
      aria-label={`${stage.label}: ${stage.title}. ${stage.status}`}
      aria-pressed={selected}
      whileHover={{ scale: 1.04 }}
      animate={{
        scale: active ? 1.04 : 1,
        opacity: faded ? 0.42 : 1
      }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className={clsx(
        "focus-ring min-h-40 w-full rounded-lg border p-4 text-left transition",
        active
          ? "border-cyan-300/70 bg-cyan-300/[0.1] shadow-[0_0_34px_rgba(34,211,238,0.28),0_0_42px_rgba(167,139,250,0.16)]"
          : "border-white/10 bg-white/[0.055] hover:border-cyan-300/[0.45] hover:bg-white/[0.08]",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <Badge tone={stage.status === "Current focus" ? "cyan" : stage.label === "Goal" ? "green" : "slate"}>{stage.label}</Badge>
        <span className="text-xs font-semibold text-slate-400">{stage.progress}%</span>
      </div>
      <h3 className="mt-4 text-base font-semibold leading-6 text-white">{stage.title}</h3>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-slate-950/70">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 transition-all duration-500"
            style={{ width: `${Math.max(4, stage.progress)}%` }}
          />
        </div>
        <span className="text-xs font-semibold text-slate-200">{stage.progress}%</span>
      </div>
      <p className="mt-4 inline-flex rounded-md border border-white/10 bg-white/[0.07] px-2.5 py-1.5 text-xs font-medium leading-5 text-slate-200">
        {stage.status}
      </p>
    </motion.button>
  );
}
