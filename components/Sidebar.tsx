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
  PanelLeftClose,
  PanelLeftOpen,
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

export function Sidebar({
  collapsed,
  onToggle
}: {
  collapsed: boolean;
  onToggle: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      <aside
        className={clsx(
          "app-sidebar fixed inset-y-0 left-0 z-30 hidden border-r border-white/10 px-4 py-5 backdrop-blur-2xl transition-[width,padding] duration-300 ease-out lg:block",
          collapsed ? "w-24" : "w-72"
        )}
      >
        <div className={clsx("flex items-start gap-3", collapsed ? "justify-center" : "justify-between")}>
          <Link
            href="/"
            className={clsx(
              "focus-ring rounded-lg py-2 transition",
              collapsed ? "grid h-12 w-12 place-items-center border border-cyan-300/25 bg-cyan-300/[0.12] text-lg font-semibold text-cyan-50 shadow-pill" : "block min-w-0 px-2"
            )}
            title="Jared Platform Engineering Launchpad"
          >
            {collapsed ? (
              <span>J</span>
            ) : (
              <>
                <p className="text-sm font-semibold uppercase text-cyan-100">Jared</p>
                <h2 className="mt-1 text-xl font-semibold text-white">Platform Engineering Launchpad</h2>
              </>
            )}
          </Link>
          <button
            type="button"
            onClick={onToggle}
            className="sidebar-toggle focus-ring hidden h-10 w-10 shrink-0 items-center justify-center rounded-md border text-slate-100 shadow-pill transition hover:text-white lg:inline-flex"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            title={collapsed ? "Expand menu" : "Collapse menu"}
          >
            {collapsed ? <PanelLeftOpen className="h-4 w-4" aria-hidden="true" /> : <PanelLeftClose className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
        <nav className={clsx("scrollbar-soft mt-6 max-h-[calc(100vh-132px)] space-y-1 overflow-y-auto", collapsed ? "px-0" : "pr-1")} aria-label="Primary navigation">
          {navigationItems.map((item) => {
            const Icon = iconMap[item.icon];
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                title={collapsed ? item.label : undefined}
                className={clsx(
                  "focus-ring sidebar-link flex items-center rounded-lg text-sm font-medium transition",
                  collapsed ? "justify-center px-0 py-3" : "gap-3 px-3 py-2.5",
                  active
                    ? "sidebar-link-active border shadow-pill"
                    : "sidebar-link-idle"
                )}
              >
                <Icon className={clsx("h-4 w-4 shrink-0", active ? "text-cyan-100" : "text-slate-500")} aria-hidden="true" />
                {collapsed ? <span className="sr-only">{item.label}</span> : <span className="min-w-0 truncate">{item.label}</span>}
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
                  ? "sidebar-link-active shadow-pill"
                  : "sidebar-link-idle border-white/10"
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
