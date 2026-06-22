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
    focus: "Start Cisco Python Essentials 1 and finish the setup loop.",
    items: [
      { id: "week-1-start-cisco-python-1", title: "Start Cisco Python Essentials 1" },
      { id: "week-1-finish-python-setup", title: "Finish Python setup" },
      { id: "week-1-build-calculator", title: "Build calculator" },
      { id: "week-1-build-number-guessing-game", title: "Build number guessing game" },
      { id: "week-1-clean-github-profile", title: "Clean GitHub profile" }
    ]
  },
  {
    id: "week-2",
    title: "Week 2",
    focus: "Continue Cisco Python Essentials 1 and start CS50P.",
    items: [
      { id: "week-2-continue-cisco-python-1", title: "Continue Cisco Python Essentials 1" },
      { id: "week-2-start-cs50p", title: "Start CS50P" },
      { id: "week-2-build-todo-cli", title: "Build to-do CLI app" },
      { id: "week-2-build-file-reader", title: "Build file reader" },
      { id: "week-2-fix-readme-files", title: "Fix README files" }
    ]
  },
  {
    id: "week-3",
    title: "Week 3",
    focus: "Continue CS50P and start freeCodeCamp Python Certification.",
    items: [
      { id: "week-3-continue-cs50p", title: "Continue CS50P" },
      { id: "week-3-start-freecodecamp-python", title: "Start freeCodeCamp Python Certification" },
      { id: "week-3-build-expense-tracker", title: "Build expense tracker" },
      { id: "week-3-build-csv-grade-analyzer", title: "Build CSV grade analyzer" },
      { id: "week-3-deploy-portfolio-project", title: "Deploy portfolio project" }
    ]
  },
  {
    id: "week-4",
    title: "Week 4",
    focus: "Finish at least one Python proof item and start Kaggle Python.",
    items: [
      { id: "week-4-finish-python-proof", title: "Finish at least one Python certificate or badge" },
      { id: "week-4-start-kaggle-python", title: "Start Kaggle Python" },
      { id: "week-4-build-github-repo-analyzer-v1", title: "Build GitHub Repo Analyzer version 1" },
      { id: "week-4-linkedin-progress-update", title: "Post one LinkedIn progress update" }
    ]
  },
  {
    id: "week-5",
    title: "Week 5",
    focus: "Move into Cisco Python Essentials 2 and stronger automation projects.",
    items: [
      { id: "week-5-start-cisco-python-2", title: "Start Cisco Python Essentials 2" },
      { id: "week-5-build-file-organizer", title: "Build File Organizer" },
      { id: "week-5-build-log-parser", title: "Build Log Parser" },
      { id: "week-5-add-docker-to-one-project", title: "Add Docker to one project" }
    ]
  },
  {
    id: "week-6",
    title: "Week 6",
    focus: "Start FastAPI and test the first Python backend project.",
    items: [
      { id: "week-6-start-fastapi", title: "Start FastAPI" },
      { id: "week-6-build-fastapi-notes-api", title: "Build FastAPI Notes API" },
      { id: "week-6-add-pytest-tests", title: "Add pytest tests" },
      { id: "week-6-document-project", title: "Document project" }
    ]
  }
];

export const dailyChecklist: ChecklistEntry[] = [
  { id: "daily-typescript-45", title: "Code in TypeScript for 45 minutes" },
  { id: "daily-python-tutorial-45", title: "Study Python tutorial for 45 minutes" },
  { id: "daily-python-practice-30", title: "Practice Python exercise for 30 minutes" },
  { id: "daily-build-small-feature", title: "Build one small feature or script" },
  { id: "daily-write-documentation", title: "Write documentation" },
  { id: "daily-push-to-github", title: "Push to GitHub" }
];
