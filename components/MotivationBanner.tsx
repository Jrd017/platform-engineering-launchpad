"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const motivationLines = [
  "You are not starting from zero.",
  "You already have proof. Now package it.",
  "One public project beats ten unfinished ideas.",
  "Build. Publish. Document. Repeat.",
  "You are not cooked. You are in cleanup mode."
];

export function MotivationBanner({ compact = false }: { compact?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="gradient-border rounded-lg"
    >
      <div className="glass-panel rounded-lg p-5">
        <div className="flex items-start gap-3">
          <div className="rounded-md border border-cyan-300/30 bg-cyan-300/10 p-2 text-cyan-100">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-100">Launchpad message</p>
            <div className={compact ? "mt-2 text-sm text-slate-200" : "mt-3 grid gap-2 text-sm text-slate-200 sm:grid-cols-2"}>
              {motivationLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
