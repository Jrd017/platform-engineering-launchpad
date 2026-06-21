"use client";

import { Send } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { PostGenerator } from "@/components/PostGenerator";
import { SectionPanel } from "@/components/SectionPanel";

export default function LinkedInAgentPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Draft-only agent"
        title="LinkedIn Achievement Agent Poster"
        description="Turn certificates, projects, cleanup progress, study milestones, hackathons, portfolio launches, and leadership wins into polished drafts."
      />

      <SectionPanel>
        <div className="flex items-start gap-3 rounded-lg border border-cyan-300/25 bg-cyan-300/10 p-4">
          <Send className="mt-0.5 h-5 w-5 shrink-0 text-cyan-100" aria-hidden="true" />
          <p className="text-sm leading-6 text-cyan-50">This app creates drafts only. It does not post to LinkedIn.</p>
        </div>
      </SectionPanel>

      <PostGenerator />
    </div>
  );
}
