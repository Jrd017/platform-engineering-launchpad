import { clsx } from "clsx";

export function ProgressBar({
  value,
  loading = false,
  label
}: {
  value: number;
  loading?: boolean;
  label?: string;
}) {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3 text-xs text-slate-300">
        <span>{label ?? "Progress"}</span>
        <span className="font-semibold text-slate-100">{loading ? "Loading" : `${clamped}%`}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-950/70 ring-1 ring-white/10">
        <div
          className={clsx(
            "h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 transition-all duration-500",
            loading && "animate-shimmer bg-[length:240px_100%]"
          )}
          style={{ width: loading ? "45%" : `${clamped}%` }}
        />
      </div>
    </div>
  );
}
