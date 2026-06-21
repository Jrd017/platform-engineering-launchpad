"use client";

import type { ReactNode } from "react";
import { ProgressProvider } from "@/components/ProgressProvider";

export function Providers({ children }: { children: ReactNode }) {
  return <ProgressProvider>{children}</ProgressProvider>;
}
