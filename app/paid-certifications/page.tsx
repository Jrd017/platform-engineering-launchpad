"use client";

import { AlertTriangle } from "lucide-react";
import { PaidCertificationCard } from "@/components/CertificationCard";
import { PageHeader } from "@/components/PageHeader";
import { SectionPanel } from "@/components/SectionPanel";
import { paidCertifications } from "@/data/certifications";

export default function PaidCertificationsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Future lane"
        title="Paid Future Certifications"
        description="Keep paid exams separate from free proof so you build foundations before spending money."
      />

      <SectionPanel>
        <div className="flex items-start gap-3 rounded-lg border border-amber-300/25 bg-amber-300/10 p-4">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-200" aria-hidden="true" />
          <p className="text-sm leading-6 text-amber-100">Verify prices before registering because certification prices can change.</p>
        </div>
      </SectionPanel>

      <div className="grid gap-4 xl:grid-cols-2">
        {paidCertifications.map((certification) => (
          <PaidCertificationCard key={certification.id} certification={certification} />
        ))}
      </div>
    </div>
  );
}
