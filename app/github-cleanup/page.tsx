"use client";

import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/Badge";
import { ChecklistItem } from "@/components/ChecklistItem";
import { CopyButton } from "@/components/CopyButton";
import { PageHeader } from "@/components/PageHeader";
import { ProgressBar } from "@/components/ProgressBar";
import { useProgress } from "@/components/ProgressProvider";
import { ReadmeGenerator } from "@/components/ReadmeGenerator";
import { SectionPanel } from "@/components/SectionPanel";
import {
  githubChecklist,
  githubProfileUrl,
  repoCleanupNotes,
  suggestedGithubBio,
  suggestedPinnedRepos
} from "@/data/githubChecklist";
import { calculateProgress } from "@/lib/progress";

export default function GitHubCleanupPage() {
  const { progress, isLoaded } = useProgress();
  const ids = githubChecklist.map((item) => item.id);
  const githubProgress = calculateProgress(ids, progress.items);

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Public proof"
        title="GitHub Cleanup Center"
        description="Turn repos into readable proof: clear profile, strong pinned projects, serious descriptions, screenshots, demos, READMEs, and clean file names."
        actions={
          <a
            href={githubProfileUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/[0.15]"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Open GitHub
          </a>
        }
      />

      <SectionPanel title="Cleanup Progress" description="You already have proof. Now package it.">
        <ProgressBar value={githubProgress} loading={!isLoaded} label="GitHub cleanup checklist" />
      </SectionPanel>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
        <SectionPanel title="Checklist" description="Small fixes that compound quickly when recruiters skim your profile.">
          <div className="grid gap-3 md:grid-cols-2">
            {githubChecklist.map((item) => (
              <ChecklistItem key={item.id} id={item.id} title={item.title} description={item.description} />
            ))}
          </div>
        </SectionPanel>

        <div className="space-y-5">
          <SectionPanel title="Suggested Bio">
            <p className="rounded-lg border border-white/10 bg-slate-950/60 p-4 text-sm leading-6 text-slate-200">{suggestedGithubBio}</p>
            <CopyButton value={suggestedGithubBio} className="mt-3" />
          </SectionPanel>

          <SectionPanel title="Suggested Pinned Repos">
            <div className="flex flex-wrap gap-2">
              {suggestedPinnedRepos.map((repo) => (
                <Badge key={repo} tone="cyan">
                  {repo}
                </Badge>
              ))}
            </div>
            <CopyButton value={suggestedPinnedRepos.join("\n")} label="Copy list" className="mt-4" />
          </SectionPanel>

          <SectionPanel title="Repo Cleanup Notes">
            <div className="grid gap-3">
              {repoCleanupNotes.map((note) => (
                <p key={note} className="rounded-lg border border-white/10 bg-white/[0.04] p-3 text-sm leading-6 text-slate-300">
                  {note}
                </p>
              ))}
            </div>
          </SectionPanel>
        </div>
      </div>

      <ReadmeGenerator />
    </div>
  );
}
