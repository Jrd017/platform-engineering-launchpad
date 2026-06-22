import { clsx } from "clsx";
import type { ReactNode } from "react";

type BadgeTone = "cyan" | "violet" | "green" | "amber" | "slate" | "rose";

const toneClasses: Record<BadgeTone, string> = {
  cyan: "border-cyan-200/35 bg-cyan-300/[0.16] text-cyan-50 shadow-[0_0_22px_rgba(34,211,238,0.12)]",
  violet: "border-violet-200/35 bg-violet-300/[0.15] text-violet-50 shadow-[0_0_22px_rgba(167,139,250,0.12)]",
  green: "border-lime-200/35 bg-lime-300/[0.16] text-lime-50 shadow-[0_0_22px_rgba(190,242,100,0.12)]",
  amber: "border-amber-200/35 bg-amber-300/[0.17] text-amber-50 shadow-[0_0_22px_rgba(251,191,36,0.13)]",
  slate: "border-slate-200/20 bg-white/[0.09] text-slate-100",
  rose: "border-rose-200/35 bg-rose-300/[0.15] text-rose-50 shadow-[0_0_22px_rgba(244,114,182,0.12)]"
};

export function Badge({
  children,
  tone = "slate",
  className
}: {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium",
        "shadow-pill backdrop-blur-md",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
