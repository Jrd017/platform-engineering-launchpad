"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Award,
  Brain,
  CalendarCheck,
  Code2,
  FileText,
  FolderGit2 as Github,
  Home,
  Layers,
  Library,
  Lightbulb,
  Share2 as Linkedin,
  Palette,
  Route,
  Trophy,
  type LucideIcon
} from "lucide-react";
import { clsx } from "clsx";
import { navigationItems, type IconKey } from "@/data/navigation";

const iconMap: Record<IconKey, LucideIcon> = {
  home: Home,
  route: Route,
  layers: Layers,
  library: Library,
  code: Code2,
  award: Award,
  trophy: Trophy,
  github: Github,
  file: FileText,
  palette: Palette,
  linkedin: Linkedin,
  lightbulb: Lightbulb,
  brain: Brain,
  calendar: CalendarCheck
};

export function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <aside className="app-sidebar fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-white/10 bg-black/35 px-4 py-5 backdrop-blur-2xl lg:block">
        <Link href="/" className="focus-ring block rounded-lg px-2 py-2">
          <p className="text-sm font-semibold uppercase text-cyan-100">Jared</p>
          <h2 className="mt-1 text-xl font-semibold text-white">Platform Engineering Launchpad</h2>
        </Link>
        <nav className="scrollbar-soft mt-6 max-h-[calc(100vh-132px)] space-y-1 overflow-y-auto pr-1" aria-label="Primary navigation">
          {navigationItems.map((item) => {
            const Icon = iconMap[item.icon];
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "focus-ring flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition",
                  active
                    ? "border border-cyan-300/35 bg-cyan-300/[0.14] text-white shadow-pill"
                    : "text-slate-300 hover:bg-white/[0.09] hover:text-white hover:shadow-pill"
                )}
              >
                <Icon className={clsx("h-4 w-4", active ? "text-cyan-100" : "text-slate-500")} aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      <nav
        className="app-mobile-nav scrollbar-soft sticky top-[73px] z-20 flex gap-2 overflow-x-auto border-y border-white/10 bg-black/35 px-4 py-3 backdrop-blur-2xl lg:hidden"
        aria-label="Mobile navigation"
      >
        {navigationItems.map((item) => {
          const Icon = iconMap[item.icon];
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "focus-ring inline-flex shrink-0 items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition",
                active
                  ? "border-cyan-300/[0.35] bg-cyan-300/[0.14] text-white shadow-pill"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white hover:shadow-pill"
              )}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span>{item.shortLabel}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
