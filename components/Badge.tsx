import { clsx } from "clsx";
import type { ReactNode } from "react";

type BadgeTone = "cyan" | "violet" | "green" | "amber" | "slate" | "rose";

const toneClasses: Record<BadgeTone, string> = {
  cyan: "border-cyan-300/30 bg-cyan-300/10 text-cyan-100",
  violet: "border-violet-300/30 bg-violet-300/10 text-violet-100",
  green: "border-emerald-300/30 bg-emerald-300/10 text-emerald-100",
  amber: "border-amber-300/30 bg-amber-300/10 text-amber-100",
  slate: "border-slate-300/20 bg-slate-300/10 text-slate-200",
  rose: "border-rose-300/30 bg-rose-300/10 text-rose-100"
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
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
