import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";

export function RoadmapConnector({ active }: { active: boolean }) {
  return (
    <div className="hidden min-w-16 flex-1 items-center md:flex" aria-hidden="true">
      <div
        className={clsx(
          "h-px flex-1 rounded-full transition-all duration-300",
          active
            ? "animate-pulseLine bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 shadow-[0_0_18px_rgba(34,211,238,0.42)]"
            : "bg-white/[0.15]"
        )}
      />
      <ArrowRight className={clsx("mx-2 h-4 w-4 transition", active ? "text-cyan-100" : "text-slate-600")} />
      <div
        className={clsx(
          "h-px flex-1 rounded-full transition-all duration-300",
          active
            ? "animate-pulseLine bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 shadow-[0_0_18px_rgba(167,139,250,0.42)]"
            : "bg-white/[0.15]"
        )}
      />
    </div>
  );
}
