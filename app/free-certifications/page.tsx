"use client";

import { AlertCircle } from "lucide-react";
import { FreeCertificationCard } from "@/components/CertificationCard";
import { PageHeader } from "@/components/PageHeader";
import { ProgressBar } from "@/components/ProgressBar";
import { useProgress } from "@/components/ProgressProvider";
import { SectionPanel } from "@/components/SectionPanel";
import { freeCertifications } from "@/data/certifications";
import { calculateProgress } from "@/lib/progress";

export default function FreeCertificationsPage() {
  const { progress, isLoaded } = useProgress();
  const ids = freeCertifications.map((certification) => `free-cert:${certification.id}`);
  const certProgress = calculateProgress(ids, progress.items);

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Free path"
        title="Free Certification Tracker"
        description="Track free certificates, badges, course links, completion dates, uploaded badge links, and certificate URLs."
      />

      <SectionPanel>
        <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(260px,360px)] md:items-center">
          <div className="rounded-lg border border-amber-300/25 bg-amber-300/10 p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-200" aria-hidden="true" />
              <p className="text-sm leading-6 text-amber-100">Do not list a badge as completed until you actually finish it.</p>
            </div>
          </div>
          <ProgressBar value={certProgress} loading={!isLoaded} label="Free certification progress" />
        </div>
      </SectionPanel>

      <div className="grid gap-4 xl:grid-cols-2">
        {freeCertifications.map((certification) => (
          <FreeCertificationCard key={certification.id} certification={certification} />
        ))}
      </div>
    </div>
  );
}
