"use client";

import { useMemo, useState } from "react";
import { CopyButton } from "@/components/CopyButton";
import { SectionPanel } from "@/components/SectionPanel";

const initialFields = {
  projectName: "ForgePanel",
  overview: "A self-service deployment dashboard for student developers.",
  techStack: "Next.js, TypeScript, Tailwind CSS, Docker, GitHub Actions",
  features: "App list\nDeploy button\nDeployment history\nLogs page\nStatus cards",
  demoLink: "",
  screenshotLinks: "",
  learned: "I learned how to design a platform-style dashboard and organize deployment workflows.",
  future: "Add real GitHub Actions integration\nAdd Kubernetes deployment status\nAdd role-based access"
};

type ReadmeFields = typeof initialFields;

export function ReadmeGenerator() {
  const [fields, setFields] = useState<ReadmeFields>(initialFields);

  const generated = useMemo(() => {
    const features = toMarkdownList(fields.features);
    const screenshots = toMarkdownList(fields.screenshotLinks, (value) => `![Screenshot](${value})`);
    const future = toMarkdownList(fields.future);

    return `# ${fields.projectName || "Project Name"}

## Overview
${fields.overview || "Write a short project overview."}

## Features
${features || "- Add project features."}

## Tech Stack
${fields.techStack || "Add technologies used."}

## Screenshots
${screenshots || "- Add screenshot links."}

## Live Demo
${fields.demoLink || "Add live demo link."}

## How to Run
\`\`\`bash
npm install
npm run dev
\`\`\`

## What I Learned
${fields.learned || "Add what you learned while building this project."}

## Future Improvements
${future || "- Add future improvements."}
`;
  }, [fields]);

  function updateField(field: keyof ReadmeFields, value: string) {
    setFields((current) => ({ ...current, [field]: value }));
  }

  return (
    <SectionPanel
      title="README Generator"
      description="Turn a project idea into a structured README that looks intentional on GitHub."
    >
      <div className="grid gap-5 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="grid gap-3">
          <TextInput label="Project name" value={fields.projectName} onChange={(value) => updateField("projectName", value)} />
          <TextArea label="Overview" value={fields.overview} onChange={(value) => updateField("overview", value)} rows={3} />
          <TextInput label="Tech stack" value={fields.techStack} onChange={(value) => updateField("techStack", value)} />
          <TextArea label="Features" value={fields.features} onChange={(value) => updateField("features", value)} rows={5} />
          <TextInput label="Demo link" value={fields.demoLink} onChange={(value) => updateField("demoLink", value)} />
          <TextArea label="Screenshot links" value={fields.screenshotLinks} onChange={(value) => updateField("screenshotLinks", value)} rows={3} />
          <TextArea label="What I learned" value={fields.learned} onChange={(value) => updateField("learned", value)} rows={3} />
          <TextArea label="Future improvements" value={fields.future} onChange={(value) => updateField("future", value)} rows={4} />
        </div>
        <div className="surface-card rounded-lg border border-white/10 bg-slate-950/70 p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 className="text-sm font-semibold text-white">Generated README</h3>
            <CopyButton value={generated} />
          </div>
          <pre className="scrollbar-soft max-h-[620px] overflow-auto whitespace-pre-wrap rounded-md bg-black/30 p-4 text-sm leading-6 text-slate-200">
            {generated}
          </pre>
        </div>
      </div>
    </SectionPanel>
  );
}

function TextInput({
  label,
  value,
  onChange
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-1 text-xs font-medium text-slate-300">
      {label}
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="focus-ring rounded-md border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-white placeholder:text-slate-600"
      />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
  rows
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows: number;
}) {
  return (
    <label className="grid gap-1 text-xs font-medium text-slate-300">
      {label}
      <textarea
        value={value}
        rows={rows}
        onChange={(event) => onChange(event.target.value)}
        className="focus-ring resize-y rounded-md border border-white/10 bg-slate-950/80 px-3 py-2 text-sm leading-6 text-white placeholder:text-slate-600"
      />
    </label>
  );
}

function toMarkdownList(value: string, mapper: (value: string) => string = (item) => `- ${item}`) {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean)
    .map(mapper)
    .join("\n");
}
