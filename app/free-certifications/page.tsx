"use client";

import { AlertCircle } from "lucide-react";
import { Badge } from "@/components/Badge";
import { FreeCertificationCard } from "@/components/CertificationCard";
import { PageHeader } from "@/components/PageHeader";
import { ProgressBar } from "@/components/ProgressBar";
import { useProgress } from "@/components/ProgressProvider";
import { SectionPanel } from "@/components/SectionPanel";
import { freeCertifications } from "@/data/certifications";
import { paidPythonCertificationWarning } from "@/data/pythonCertificates";
import { calculateProgress } from "@/lib/progress";

export default function FreeCertificationsPage() {
  const { progress, isLoaded } = useProgress();
  const ids = freeCertifications.map((certification) => `free-cert:${certification.id}`);
  const pythonCertifications = freeCertifications.filter((certification) => certification.category === "Python");
  const otherCertifications = freeCertifications.filter((certification) => certification.category !== "Python");
  const pythonIds = pythonCertifications.map((certification) => `free-cert:${certification.id}`);
  const certProgress = calculateProgress(ids, progress.items);
  const pythonProgress = calculateProgress(pythonIds, progress.items);

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Free path"
        title="Free Certification Tracker"
        description="Track free certificates, badges, course links, completion dates, uploaded badge links, and certificate URLs."
      />

      <SectionPanel>
        <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(260px,360px)] md:items-center">
          <div className="surface-card rounded-lg border border-amber-300/25 bg-amber-300/10 p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-200" aria-hidden="true" />
              <p className="text-sm leading-6 text-amber-100">Do not list a badge as completed until you actually finish it. {paidPythonCertificationWarning}</p>
            </div>
          </div>
          <ProgressBar value={certProgress} loading={!isLoaded} label="Free certification progress" />
        </div>
      </SectionPanel>

      <SectionPanel title="Label System" description="Proof labels keep free learning proof separate from paid exams.">
        <div className="flex flex-wrap gap-2">
          <Badge tone="green">Free certificate</Badge>
          <Badge tone="cyan">Free badge</Badge>
          <Badge tone="amber">Free course</Badge>
          <Badge tone="rose">Paid certification</Badge>
        </div>
      </SectionPanel>

      <SectionPanel title="Python Free Certificates and Badges" description="Cisco, CS50P, freeCodeCamp, Kaggle, and Cisco intermediate Python proof.">
        <div className="mb-5">
          <ProgressBar value={pythonProgress} loading={!isLoaded} label="Python free certificate and badge progress" />
        </div>
        <div className="grid gap-4 xl:grid-cols-2">
          {pythonCertifications.map((certification) => (
            <FreeCertificationCard key={certification.id} certification={certification} />
          ))}
        </div>
      </SectionPanel>

      <section className="grid gap-4 xl:grid-cols-2">
        {otherCertifications.map((certification) => (
          <FreeCertificationCard key={certification.id} certification={certification} />
        ))}
      </section>
    </div>
  );
}
