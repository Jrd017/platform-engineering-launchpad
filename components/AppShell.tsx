"use client";

import { useEffect, useState, type ReactNode } from "react";
import { clsx } from "clsx";
import { FloatingGeometry } from "@/components/FloatingGeometry";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

const SIDEBAR_STORAGE_KEY = "jared-platform-engineering-launchpad:sidebar-collapsed";

export function AppShell({ children }: { children: ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    setSidebarCollapsed(window.localStorage.getItem(SIDEBAR_STORAGE_KEY) === "true");
  }, []);

  function toggleSidebar() {
    setSidebarCollapsed((current) => {
      const next = !current;
      window.localStorage.setItem(SIDEBAR_STORAGE_KEY, String(next));
      return next;
    });
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden shell-grid">
      <FloatingGeometry />
      <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      <div className={clsx("relative z-10 transition-[padding] duration-300 ease-out", sidebarCollapsed ? "lg:pl-24" : "lg:pl-72")}>
        <Navbar />
        <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
