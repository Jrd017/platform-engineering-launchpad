"use client";

import { useMemo, useState } from "react";
import { CopyButton } from "@/components/CopyButton";
import { SectionPanel } from "@/components/SectionPanel";

const templates = [
  "Certificate completion post",
  "Project launch post",
  "GitHub cleanup progress post",
  "Portfolio launch post",
  "Platform engineering study milestone post",
  "Hackathon project post",
  "Leadership achievement post"
];

const examplePost = `I started cleaning up my GitHub and building my platform engineering path.

As a 4th year Computer Science student, I realized that learning is not enough if I do not package my work properly.

This week, I started organizing my GitHub, building a portfolio, and creating a platform engineering lab using Docker, CI/CD, Kubernetes basics, and developer tools.

My goal is simple:
Build. Publish. Document. Repeat.`;

type Tone = "Humble" | "Confident" | "Student-friendly";

const initialFields = {
  title: "Started my platform engineering launchpad",
  built: "A career dashboard for my roadmap, GitHub cleanup, resume, certifications, projects, and weekly action plan.",
  stack: "Next.js, TypeScript, Tailwind CSS, Framer Motion, localStorage",
  problem: "I needed one place to organize proof instead of feeling behind.",
  learned: "I learned that progress becomes stronger when it is visible, organized, and documented.",
  link: "https://github.com/Jrd017",
  tone: "Student-friendly" as Tone,
  template: "Project launch post"
};

export function PostGenerator() {
  const [fields, setFields] = useState(initialFields);

  const outputs = useMemo(() => {
    const opener =
      fields.tone === "Humble"
        ? `I recently worked on ${fields.title}.`
        : fields.tone === "Confident"
          ? `I built and shipped: ${fields.title}.`
          : `As a 4th year Computer Science student, I worked on ${fields.title}.`;

    const post = `${opener}

${fields.built}

The problem I wanted to solve:
${fields.problem}

Tech used:
${fields.stack}

What I learned:
${fields.learned}

${fields.link ? `Link: ${fields.link}\n\n` : ""}Build. Publish. Document. Repeat.`;

    return {
      post,
      short: `${fields.title}: ${fields.built} Built with ${fields.stack}.`,
      resumeBullet: `Built ${fields.title}, ${fields.problem.toLowerCase()} using ${fields.stack}.`,
      readmeLine: `Update: ${fields.title} now documents ${fields.learned.toLowerCase()}`
    };
  }, [fields]);

  function updateField<K extends keyof typeof fields>(key: K, value: (typeof fields)[K]) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  return (
    <SectionPanel
      title="LinkedIn Achievement Agent Poster"
      description="Draft only. This tool prepares posts, bullets, and README update lines without posting anywhere."
    >
      <div className="grid gap-5 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="grid gap-3">
          <label className="grid gap-1 text-xs font-medium text-slate-300">
            Template
            <select
              value={fields.template}
              onChange={(event) => updateField("template", event.target.value)}
              className="focus-ring rounded-md border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-white"
            >
              {templates.map((template) => (
                <option key={template} value={template}>
                  {template}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-1 text-xs font-medium text-slate-300">
            Tone
            <select
              value={fields.tone}
              onChange={(event) => updateField("tone", event.target.value as Tone)}
              className="focus-ring rounded-md border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-white"
            >
              <option>Humble</option>
              <option>Confident</option>
              <option>Student-friendly</option>
            </select>
          </label>
          <TextInput label="Achievement title" value={fields.title} onChange={(value) => updateField("title", value)} />
          <TextArea label="What I built" value={fields.built} onChange={(value) => updateField("built", value)} rows={4} />
          <TextInput label="Tech stack" value={fields.stack} onChange={(value) => updateField("stack", value)} />
          <TextArea label="Problem solved" value={fields.problem} onChange={(value) => updateField("problem", value)} rows={3} />
          <TextArea label="What I learned" value={fields.learned} onChange={(value) => updateField("learned", value)} rows={3} />
          <TextInput label="Link to project or certificate" value={fields.link} onChange={(value) => updateField("link", value)} />
        </div>

        <div className="grid gap-4">
          <OutputCard title="LinkedIn post draft" value={outputs.post} />
          <OutputCard title="Short version" value={outputs.short} />
          <OutputCard title="Resume bullet" value={outputs.resumeBullet} />
          <OutputCard title="GitHub README update line" value={outputs.readmeLine} />
          <div className="surface-card rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-white">Example post</h3>
              <CopyButton value={examplePost} />
            </div>
            <p className="whitespace-pre-wrap text-sm leading-6 text-slate-300">{examplePost}</p>
          </div>
        </div>
      </div>
    </SectionPanel>
  );
}

function OutputCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="surface-card rounded-lg border border-white/10 bg-slate-950/[0.65] p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <CopyButton value={value} />
      </div>
      <p className="whitespace-pre-wrap text-sm leading-6 text-slate-300">{value}</p>
    </div>
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
