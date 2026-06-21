import type { ChecklistEntry } from "./types";

export type WeeklyPlan = {
  id: string;
  title: string;
  focus: string;
  items: ChecklistEntry[];
};

export const weeklyPlan: WeeklyPlan[] = [
  {
    id: "week-1",
    title: "Week 1",
    focus: "Package the base proof.",
    items: [
      { id: "week-1-fix-github", title: "Fix GitHub" },
      { id: "week-1-profile-readme", title: "Create profile README" },
      { id: "week-1-pin-repos", title: "Pin best repos" },
      { id: "week-1-fix-readmes", title: "Fix README files" },
      { id: "week-1-start-resume", title: "Start resume" },
      { id: "week-1-start-portfolio", title: "Start portfolio website" }
    ]
  },
  {
    id: "week-2",
    title: "Week 2",
    focus: "Build ForgePanel version 1.",
    items: [
      { id: "week-2-forgepanel", title: "Build ForgePanel version 1" },
      { id: "week-2-dashboard", title: "Add dashboard" },
      { id: "week-2-app-list", title: "Add app list" },
      { id: "week-2-history", title: "Add deployment history" },
      { id: "week-2-logs", title: "Add logs page" },
      { id: "week-2-status-cards", title: "Add status cards" }
    ]
  },
  {
    id: "week-3",
    title: "Week 3",
    focus: "Make the project feel deployable.",
    items: [
      { id: "week-3-docker", title: "Add Docker" },
      { id: "week-3-github-actions", title: "Add GitHub Actions" },
      { id: "week-3-deploy-frontend", title: "Deploy frontend" },
      { id: "week-3-deploy-backend", title: "Deploy backend if needed" },
      { id: "week-3-screenshots", title: "Add screenshots" },
      { id: "week-3-documentation", title: "Write documentation" }
    ]
  },
  {
    id: "week-4",
    title: "Week 4",
    focus: "Turn progress into public signal.",
    items: [
      { id: "week-4-study", title: "Study Docker and Kubernetes" },
      { id: "week-4-badges", title: "Finish 2 to 3 free badges" },
      { id: "week-4-linkedin", title: "Post LinkedIn update" },
      { id: "week-4-apply", title: "Apply to internships" },
      { id: "week-4-lab", title: "Continue platform engineering lab" }
    ]
  }
];

export const dailyChecklist: ChecklistEntry[] = [
  { id: "daily-study", title: "Study 1 hour" },
  { id: "daily-build", title: "Build 1 hour" },
  { id: "daily-document", title: "Document 30 minutes" },
  { id: "daily-push", title: "Push to GitHub" },
  { id: "daily-update-progress", title: "Update progress" }
];
