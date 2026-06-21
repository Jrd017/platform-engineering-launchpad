"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/Badge";
import { ProgressBar } from "@/components/ProgressBar";

export function DashboardCard({
  title,
  value,
  href,
  icon: Icon,
  badge,
  loading = false
}: {
  title: string;
  value: number;
  href: string;
  icon: LucideIcon;
  badge: string;
  loading?: boolean;
}) {
  return (
    <motion.div whileHover={{ y: -4, scale: 1.01 }} transition={{ type: "spring", stiffness: 260, damping: 22 }}>
      <Link
        href={href}
        className="focus-ring glass-panel group block h-full rounded-lg p-5 transition hover:border-cyan-300/[0.35] hover:shadow-glow"
      >
        <div className="mb-5 flex items-start justify-between gap-3">
          <div className="rounded-md border border-white/10 bg-white/10 p-2 text-cyan-100">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <ArrowUpRight className="h-4 w-4 text-slate-500 transition group-hover:text-cyan-100" aria-hidden="true" />
        </div>
        <h3 className="min-h-12 text-base font-semibold leading-6 text-white">{title}</h3>
        <div className="mt-3">
          <Badge tone={value >= 75 ? "green" : value >= 35 ? "cyan" : "violet"}>{badge}</Badge>
        </div>
        <div className="mt-5">
          <ProgressBar value={value} loading={loading} />
        </div>
      </Link>
    </motion.div>
  );
}
