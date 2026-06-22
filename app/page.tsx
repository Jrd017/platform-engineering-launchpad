"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  BookOpenCheck,
  Brain,
  CalendarCheck,
  Code2,
  FileText,
  FolderGit2 as Github,
  Layers,
  Lightbulb,
  Share2 as Linkedin,
  Palette,
  Rocket,
  Route
} from "lucide-react";
import { Badge } from "@/components/Badge";
import { DashboardCard } from "@/components/DashboardCard";
import { MotivationBanner } from "@/components/MotivationBanner";
import { ProgressBar } from "@/components/ProgressBar";
import { useProgress } from "@/components/ProgressProvider";
import { SectionPanel } from "@/components/SectionPanel";
import { freeCertifications } from "@/data/certifications";
import { githubChecklist } from "@/data/githubChecklist";
import { platformRoadmap } from "@/data/platformRoadmap";
import { portfolioChecklist } from "@/data/portfolioChecklist";
import { pythonCertificates } from "@/data/pythonCertificates";
import { pythonStudySteps } from "@/data/pythonLearningPath";
import { pythonProjects } from "@/data/pythonProjects";
import { projectIdeas } from "@/data/projects";
import { resumeChecklist } from "@/data/resumeChecklist";
import { dailyChecklist, weeklyPlan } from "@/data/weeklyPlan";
import { calculateProgress } from "@/lib/progress";

const quickActions = [
  { label: "Open Python Learning Path", href: "/python-learning-path", icon: Code2 },
  { label: "Start Roadmap", href: "/platform-roadmap", icon: Route },
  { label: "Fix GitHub", href: "/github-cleanup", icon: Github },
  { label: "Build Resume", href: "/resume", icon: FileText },
  { label: "Create LinkedIn Post", href: "/linkedin-agent", icon: Linkedin },
  { label: "Generate Quiz", href: "/quiz", icon: Brain },
  { label: "View Projects", href: "/project-board", icon: Lightbulb }
];

export default function HomeDashboardPage() {
  const { progress, isLoaded } = useProgress();
  const platformIds = platformRoadmap.flatMap((phase) => phase.topics.map((topic) => `platform:${topic.id}`));
  const freeCertIds = freeCertifications.map((certification) => `free-cert:${certification.id}`);
  const githubIds = githubChecklist.map((item) => item.id);
  const resumeIds = resumeChecklist.map((item) => item.id);
  const portfolioIds = portfolioChecklist.map((item) => item.id);
  const projectIds = projectIdeas.map((project) => `project:${project.id}`);
  const pythonPathIds = pythonStudySteps.map((step) => `python:path:${step.id}`);
  const pythonCertificateIds = pythonCertificates.map((certificate) => `free-cert:${certificate.id}`);
  const pythonProjectIds = pythonProjects.map((project) => `python-project:${project.id}`);
  const weeklyIds = [...weeklyPlan.flatMap((week) => week.items.map((item) => item.id)), ...dailyChecklist.map((item) => item.id)];

  const platformProgress = calculateProgress(platformIds, progress.items);
  const freeCertProgress = calculateProgress(freeCertIds, progress.items);
  const githubProgress = calculateProgress(githubIds, progress.items);
  const resumeProgress = calculateProgress(resumeIds, progress.items);
  const portfolioProgress = calculateProgress(portfolioIds, progress.items);
  const projectProgress = calculateProgress(projectIds, progress.items);
  const pythonPathProgress = calculateProgress(pythonPathIds, progress.items);
  const pythonCertificateProgress = calculateProgress(pythonCertificateIds, progress.items);
  const pythonProjectProgress = calculateProgress(pythonProjectIds, progress.items);
  const weeklyProgress = calculateProgress(weeklyIds, progress.items);
  const overall = Math.round(
    (
      platformProgress +
      freeCertProgress +
      githubProgress +
      resumeProgress +
      portfolioProgress +
      projectProgress +
      pythonPathProgress +
      pythonCertificateProgress +
      pythonProjectProgress +
      weeklyProgress
    ) /
      10
  );

  return (
    <div className="space-y-6">
      <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-lg p-6 md:p-8"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2">
                <Badge tone="cyan">Jared P. Oxales</Badge>
                <Badge tone="violet">4th Year Computer Science Student</Badge>
                <Badge tone="green">Aspiring Platform Engineer</Badge>
              </div>
              <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
                Jared Platform Engineering Launchpad
              </h1>
              <div className="mt-5 grid gap-2 text-lg leading-8 text-slate-200">
                <p>You are not cooked. You are in cleanup mode.</p>
                <p>You already have proof. Now package it.</p>
                <p>Build. Publish. Document. Repeat.</p>
              </div>
            </div>
            <div className="shrink-0">
              <div className="relative h-32 w-32 overflow-hidden rounded-lg border border-cyan-300/30 bg-white/[0.06] shadow-glow md:h-40 md:w-40">
                <Image src="https://github.com/Jrd017.png" alt="Jared P. Oxales GitHub avatar" fill sizes="160px" className="object-cover" priority />
              </div>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <InfoTile label="Goal" value="Aspiring Platform Engineer and Backend Developer" />
            <InfoTile label="Status" value="Building portfolio, resume, GitHub proof, and platform engineering skills" />
            <InfoTile label="GitHub" value="github.com/Jrd017" />
            <InfoTile label="Operating mode" value="Build, publish, document, repeat" />
          </div>
        </motion.div>

        <SectionPanel title="Launch Readiness" description="One number to keep the dashboard honest without making it heavy.">
          <div className="space-y-5">
            <div>
              <p className="text-5xl font-semibold text-white">{isLoaded ? `${overall}%` : "..."}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">You are not starting from zero. This is packaging progress.</p>
            </div>
            <ProgressBar value={overall} loading={!isLoaded} label="Overall proof package" />
            <MotivationBanner compact />
          </div>
        </SectionPanel>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <DashboardCard title="Platform Engineering Roadmap Progress" value={platformProgress} href="/platform-roadmap" icon={Layers} badge="Core study" loading={!isLoaded} />
        <DashboardCard title="Free Certifications Progress" value={freeCertProgress} href="/free-certifications" icon={Award} badge="Free badges" loading={!isLoaded} />
        <DashboardCard title="Python Learning Path Progress" value={pythonPathProgress} href="/python-learning-path" icon={BookOpenCheck} badge="Exact order" loading={!isLoaded} />
        <DashboardCard title="Free Python Certificates Progress" value={pythonCertificateProgress} href="/python-learning-path" icon={Code2} badge="Python proof" loading={!isLoaded} />
        <DashboardCard title="Python Projects Progress" value={pythonProjectProgress} href="/python-learning-path" icon={Rocket} badge="Build proof" loading={!isLoaded} />
        <DashboardCard title="GitHub Cleanup Progress" value={githubProgress} href="/github-cleanup" icon={Github} badge="Public proof" loading={!isLoaded} />
        <DashboardCard title="Resume Progress" value={resumeProgress} href="/resume" icon={FileText} badge="One-page target" loading={!isLoaded} />
        <DashboardCard title="Portfolio Progress" value={portfolioProgress} href="/portfolio-planner" icon={Palette} badge="Project home" loading={!isLoaded} />
        <DashboardCard title="Personal Project Progress" value={projectProgress} href="/project-board" icon={Lightbulb} badge="Flagship ideas" loading={!isLoaded} />
        <DashboardCard title="Weekly Action Progress" value={weeklyProgress} href="/weekly-plan" icon={CalendarCheck} badge="Shipping cadence" loading={!isLoaded} />
        <DashboardCard title="Interactive Roadmap Diagram" value={18} href="/roadmap-diagram" icon={Route} badge="Current focus" loading={false} />
      </section>

      <SectionPanel title="Quick Actions" description="Jump straight into the parts that turn existing proof into public signal.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {quickActions.map((action) => {
            const Icon = action.icon;

            return (
              <Link
                key={action.href}
                href={action.href}
                className="surface-card focus-ring group flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.05] p-4 text-sm font-semibold text-white transition hover:border-cyan-300/[0.35] hover:bg-cyan-300/10"
              >
                <span className="rounded-md border border-white/10 bg-white/[0.06] p-2 text-cyan-100">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                {action.label}
              </Link>
            );
          })}
        </div>
      </SectionPanel>
    </div>
  );
}

function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="surface-card rounded-lg border border-white/10 bg-white/[0.045] p-4">
      <p className="text-xs font-semibold uppercase text-slate-500">{label}</p>
      <p className="mt-2 text-sm leading-6 text-slate-200">{value}</p>
    </div>
  );
}
