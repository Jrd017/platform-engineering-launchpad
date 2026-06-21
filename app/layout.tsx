import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/app/globals.css";
import { Providers } from "@/app/providers";
import { AppShell } from "@/components/AppShell";

export const metadata: Metadata = {
  title: "Jared Platform Engineering Launchpad",
  description: "A polished career dashboard for platform engineering, backend development, and developer tools growth."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
