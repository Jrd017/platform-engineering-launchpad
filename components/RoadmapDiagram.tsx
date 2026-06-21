"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { RoadmapDetailPanel } from "@/components/RoadmapDetailPanel";
import { RoadmapNode } from "@/components/RoadmapNode";
import { roadmapStages } from "@/data/roadmap";

export function RoadmapDiagram() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const defaultStage = useMemo(() => roadmapStages.find((stage) => stage.status === "Current focus") ?? roadmapStages[0], []);
  const activeId = selectedId ?? hoveredId ?? defaultStage.id;
  const activeIndex = roadmapStages.findIndex((stage) => stage.id === activeId);
  const activeStage = roadmapStages[activeIndex] ?? defaultStage;
  const hasIntentionalFocus = Boolean(selectedId || hoveredId);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedId(null);
      }
    }

    function handlePointerDown(event: MouseEvent) {
      if (!selectedId) {
        return;
      }

      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setSelectedId(null);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [selectedId]);

  return (
    <div ref={containerRef} className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="glass-panel overflow-hidden rounded-lg p-4 md:p-6"
      >
        <div className="relative mx-auto max-w-5xl py-2 md:px-4 md:py-10">
          <div className="grid gap-5 md:gap-8">
            {roadmapStages.map((stage, index) => {
              const active = stage.id === activeId;
              const connectorActive = Math.abs(index - activeIndex) <= 1;
              const segmentActive = index === activeIndex || index === activeIndex - 1;
              const side = index % 2 === 0 ? "left" : "right";

              return (
                <div
                  key={stage.id}
                  className="relative grid grid-cols-[44px_minmax(0,1fr)] gap-3 md:min-h-[11rem] md:grid-cols-[minmax(0,1fr)_96px_minmax(0,1fr)] md:gap-0"
                >
                  <div className="relative z-10 col-start-1 row-start-1 flex justify-center pt-5 md:col-start-2 md:flex md:h-full md:items-center md:justify-center md:pt-0">
                    {index < roadmapStages.length - 1 ? <RoadmapSpineSegment active={segmentActive} side={side} /> : null}
                    <span
                      className={clsx(
                        "absolute top-1/2 hidden h-px w-11 -translate-y-1/2 md:block",
                        side === "left" ? "right-[calc(50%+18px)]" : "left-[calc(50%+18px)]",
                        connectorActive
                          ? "bg-gradient-to-r from-cyan-300 to-violet-400 shadow-[0_0_16px_rgba(34,211,238,0.42)]"
                          : "bg-white/[0.14]"
                      )}
                    />
                    <TimelineMarker index={index} active={active} related={connectorActive} />
                  </div>

                  <div
                    className={clsx(
                      "col-start-2 row-start-1 min-w-0 md:row-start-1 md:self-center",
                      side === "left" ? "md:col-start-1 md:pr-6" : "md:col-start-3 md:pl-6"
                    )}
                  >
                    <RoadmapNode
                      stage={stage}
                      active={active}
                      selected={selectedId === stage.id}
                      faded={hasIntentionalFocus && !active}
                      onHover={() => {
                        if (!selectedId) {
                          setHoveredId(stage.id);
                        }
                      }}
                      onLeave={() => setHoveredId(null)}
                      onSelect={() => setSelectedId(stage.id)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      <div className="xl:sticky xl:top-28 xl:self-start">
        <RoadmapDetailPanel stage={activeStage} locked={Boolean(selectedId)} onClose={() => setSelectedId(null)} />
      </div>
    </div>
  );
}

function RoadmapSpineSegment({ active, side }: { active: boolean; side: "left" | "right" }) {
  const path =
    side === "left"
      ? "M 48 0 C 16 42, 80 86, 48 128 C 20 166, 70 190, 48 224"
      : "M 48 0 C 80 42, 16 86, 48 128 C 76 166, 26 190, 48 224";

  return (
    <>
      <span
        data-roadmap-segment="mobile"
        className={clsx(
          "absolute left-1/2 top-[calc(50%+18px)] h-[calc(100%+2.5rem)] w-px -translate-x-1/2 md:hidden",
          active ? "bg-gradient-to-b from-cyan-300 to-violet-400 shadow-[0_0_18px_rgba(34,211,238,0.44)]" : "bg-white/[0.16]"
        )}
        aria-hidden="true"
      />
      <svg
        data-roadmap-segment="desktop"
        className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[calc(100%+4rem)] w-24 -translate-x-1/2 overflow-visible md:block"
        viewBox="0 0 96 224"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d={path} fill="none" stroke="rgba(148, 163, 184, 0.18)" strokeLinecap="round" strokeWidth="10" />
        <path
          d={path}
          fill="none"
          stroke={active ? "url(#segmentActiveGradient)" : "url(#segmentBaseGradient)"}
          strokeLinecap="round"
          strokeWidth={active ? 7 : 4}
          className={active ? "drop-shadow-[0_0_12px_rgba(34,211,238,0.62)]" : ""}
        />
        <defs>
          <linearGradient id="segmentBaseGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(34, 211, 238, 0.38)" />
            <stop offset="100%" stopColor="rgba(167, 139, 250, 0.32)" />
          </linearGradient>
          <linearGradient id="segmentActiveGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="52%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}

function TimelineMarker({ index, active, related }: { index: number; active: boolean; related: boolean }) {
  return (
    <span
      data-roadmap-marker={index + 1}
      className={clsx(
        "flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition",
        active
          ? "border-cyan-200 bg-cyan-300/20 text-white shadow-[0_0_28px_rgba(34,211,238,0.55)]"
          : related
            ? "border-violet-300/[0.65] bg-violet-300/[0.12] text-violet-50 shadow-[0_0_20px_rgba(167,139,250,0.3)]"
            : "border-white/[0.15] bg-slate-950/80 text-slate-300"
      )}
    >
      {index + 1}
    </span>
  );
}
