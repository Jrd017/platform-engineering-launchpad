"use client";

import { useMemo, useState } from "react";
import { AlertCircle, Code2 } from "lucide-react";
import { Badge } from "@/components/Badge";
import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";
import { PythonCertificateCard } from "@/components/PythonCertificateCard";
import { PythonPathStepCard } from "@/components/PythonPathStepCard";
import { PythonProgressSummary } from "@/components/PythonProgressSummary";
import { PythonProjectCard } from "@/components/PythonProjectCard";
import { PythonResourceCard } from "@/components/PythonResourceCard";
import { ResourceSearchBar } from "@/components/ResourceSearchBar";
import { SectionPanel } from "@/components/SectionPanel";
import { paidPythonCertificationWarning, pythonCertificates } from "@/data/pythonCertificates";
import { pythonStudySteps } from "@/data/pythonLearningPath";
import { pythonProjects } from "@/data/pythonProjects";
import { pythonResources } from "@/data/pythonResources";

const careerCards = [
  {
    title: "Python for software engineering",
    items: ["Scripts.", "Automation.", "Testing.", "APIs.", "Internal tools."]
  },
  {
    title: "Python for backend",
    items: ["FastAPI.", "Flask.", "REST APIs.", "Validation.", "pytest."]
  },
  {
    title: "Python for platform engineering",
    items: ["CLI helpers.", "Log parsing.", "Infrastructure scripts.", "CI/CD scripts.", "API clients.", "Monitoring helpers.", "Cloud automation."]
  },
  {
    title: "Python for AI and data",
    items: ["pandas.", "CSV analysis.", "Jupyter.", "NLP basics later.", "Thesis support later."]
  }
];

export default function PythonLearningPathPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = useMemo(() => ["All", ...Array.from(new Set(pythonResources.map((resource) => resource.category)))], []);
  const filteredResources = pythonResources.filter((resource) => {
    const haystack = `${resource.title} ${resource.category} ${resource.skillLevel} ${resource.why}`.toLowerCase();
    return haystack.includes(query.toLowerCase()) && (category === "All" || resource.category === category);
  });
  const projectGroups = useMemo(
    () =>
      Array.from(new Set(pythonProjects.map((project) => project.afterStep))).map((afterStep) => ({
        afterStep,
        projects: pythonProjects.filter((project) => project.afterStep === afterStep)
      })),
    []
  );

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Python path"
        title="Python Learning Path and Free Certifications"
        description="A clear Python path from basics to automation, backend APIs, testing, and portfolio projects."
      />

      <section className="floating-card glass-panel rounded-lg p-5">
        <div className="flex items-start gap-3">
          <div className="rounded-md border border-cyan-300/30 bg-cyan-300/10 p-2 text-cyan-100">
            <Code2 className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <Badge tone="cyan">Start here</Badge>
            <p className="mt-3 text-xl font-semibold text-white">Start here. Follow the order. Do not jump around.</p>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
              Python is Jared&apos;s automation, scripting, backend, data, AI support, and tooling language. TypeScript stays the main web app and dashboard language.
            </p>
          </div>
        </div>
      </section>

      <PythonProgressSummary />

      <SectionPanel title="Section 1. Exact Python Study Order" description="Follow this numbered path from setup to backend APIs, testing, data, and automation.">
        <div className="grid gap-4">
          {pythonStudySteps.map((step) => (
            <PythonPathStepCard key={step.id} step={step} />
          ))}
        </div>
      </SectionPanel>

      <SectionPanel title="Section 2. Free Python Certificates and Badges Tracker" description="Free certificates, free badges, and free courses are tracked separately from paid exams.">
        <div className="surface-card mb-5 rounded-lg border border-amber-300/25 bg-amber-300/10 p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-200" aria-hidden="true" />
            <p className="text-sm leading-6 text-amber-100">{paidPythonCertificationWarning}</p>
          </div>
        </div>
        <div className="grid gap-4 xl:grid-cols-2">
          {pythonCertificates.map((certificate) => (
            <PythonCertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </SectionPanel>

      <SectionPanel title="Section 3. Python Tutorial Library" description="Search tutorials, references, and practice sites. Mark each resource done and keep notes locally.">
        <ResourceSearchBar query={query} onQueryChange={setQuery} category={category} onCategoryChange={setCategory} categories={categories} />
        {filteredResources.length === 0 ? (
          <div className="mt-5">
            <EmptyState title="No Python resources found" description="Try a different search term or category." />
          </div>
        ) : (
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredResources.map((resource) => (
              <PythonResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        )}
      </SectionPanel>

      <SectionPanel title="Section 4. What To Build After Each Step" description="Build small proof after each learning block, then save repo and demo links when they exist.">
        <div className="grid gap-5">
          {projectGroups.map((group) => (
            <section key={group.afterStep}>
              <h3 className="mb-3 text-sm font-semibold uppercase text-cyan-100">{group.afterStep}</h3>
              <div className="grid gap-4 xl:grid-cols-2">
                {group.projects.map((project) => (
                  <PythonProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </SectionPanel>

      <SectionPanel title="Section 5. Python for My Career Path" description="Use Python beside TypeScript, not instead of it.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {careerCards.map((card) => (
            <article key={card.title} className="surface-card rounded-lg border border-white/10 bg-white/[0.045] p-4 transition hover:border-cyan-300/30">
              <h3 className="text-base font-semibold text-white">{card.title}</h3>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-300">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="surface-card mt-5 rounded-lg border border-cyan-300/25 bg-cyan-300/10 p-4 text-sm font-semibold leading-6 text-cyan-100">
          Python is not replacing TypeScript. Python is my automation and tooling language. TypeScript is my web app and dashboard language.
        </p>
      </SectionPanel>
    </div>
  );
}
