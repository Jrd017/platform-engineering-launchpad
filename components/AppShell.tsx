import type { ReactNode } from "react";
import { FloatingGeometry } from "@/components/FloatingGeometry";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden shell-grid">
      <FloatingGeometry />
      <Sidebar />
      <div className="relative z-10 lg:pl-72">
        <Navbar />
        <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
