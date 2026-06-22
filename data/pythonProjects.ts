import type { Difficulty } from "./types";

export type PythonProject = {
  id: string;
  afterStep: string;
  title: string;
  skillLevel: Difficulty;
  language: string;
  conceptsUsed: string[];
  expectedOutput: string;
  portfolioValue: string;
  liveDemoApplicable?: boolean;
};

export const pythonProjects: PythonProject[] = [
  {
    id: "calculator",
    afterStep: "After Step 1",
    title: "Calculator",
    skillLevel: "Beginner",
    language: "Python",
    conceptsUsed: ["Input", "conditionals", "functions"],
    expectedOutput: "A terminal calculator that performs basic arithmetic.",
    portfolioValue: "Small beginner proof that you can turn syntax into a usable script."
  },
  {
    id: "number-guessing-game",
    afterStep: "After Step 1",
    title: "Number guessing game",
    skillLevel: "Beginner",
    language: "Python",
    conceptsUsed: ["Loops", "random numbers", "conditionals"],
    expectedOutput: "A terminal game that gives feedback until the number is guessed.",
    portfolioValue: "Shows control flow and beginner problem solving."
  },
  {
    id: "terminal-quiz",
    afterStep: "After Step 1",
    title: "Terminal quiz",
    skillLevel: "Beginner",
    language: "Python",
    conceptsUsed: ["Lists", "loops", "scoring"],
    expectedOutput: "A command-line quiz that tracks correct answers.",
    portfolioValue: "Connects Python basics to your study-tool direction."
  },
  {
    id: "todo-cli-app",
    afterStep: "After Step 2",
    title: "To-do CLI app",
    skillLevel: "Beginner",
    language: "Python",
    conceptsUsed: ["Functions", "files", "lists", "CLI menus"],
    expectedOutput: "A local command-line app for adding, listing, and completing tasks.",
    portfolioValue: "A clean first utility project with practical value."
  },
  {
    id: "file-reader",
    afterStep: "After Step 2",
    title: "File reader",
    skillLevel: "Beginner",
    language: "Python",
    conceptsUsed: ["File I/O", "exceptions", "strings"],
    expectedOutput: "A script that reads text files and summarizes line, word, and character counts.",
    portfolioValue: "Shows safe file handling and basic automation."
  },
  {
    id: "expense-tracker",
    afterStep: "After Step 2",
    title: "Expense tracker",
    skillLevel: "Beginner",
    language: "Python",
    conceptsUsed: ["CSV files", "functions", "validation"],
    expectedOutput: "A CLI tracker that saves expenses and prints category totals.",
    portfolioValue: "A practical student-life tool with data handling."
  },
  {
    id: "freecodecamp-certification-projects",
    afterStep: "After Step 3",
    title: "freeCodeCamp certification projects",
    skillLevel: "Beginner",
    language: "Python",
    conceptsUsed: ["String formatting", "time math", "budgets", "geometry", "probability"],
    expectedOutput: "The required project set for the Python certification.",
    portfolioValue: "Direct certification proof with project-based output."
  },
  {
    id: "csv-grade-analyzer",
    afterStep: "After Step 4",
    title: "CSV grade analyzer",
    skillLevel: "Beginner",
    language: "Python",
    conceptsUsed: ["CSV parsing", "lists", "averages"],
    expectedOutput: "A script that reads grade data and prints averages, top scores, and weak areas.",
    portfolioValue: "Useful data project tied to academic workflow."
  },
  {
    id: "simple-data-summary-script",
    afterStep: "After Step 4",
    title: "Simple data summary script",
    skillLevel: "Beginner",
    language: "Python",
    conceptsUsed: ["Dictionaries", "functions", "file input"],
    expectedOutput: "A script that summarizes a small dataset into readable totals.",
    portfolioValue: "Shows the first step toward automation and reporting."
  },
  {
    id: "file-organizer",
    afterStep: "After Step 5",
    title: "File organizer",
    skillLevel: "Intermediate",
    language: "Python",
    conceptsUsed: ["pathlib", "file operations", "exceptions"],
    expectedOutput: "A script that sorts files into folders by type or date.",
    portfolioValue: "Strong automation utility for daily developer cleanup."
  },
  {
    id: "log-parser",
    afterStep: "After Step 5",
    title: "Log parser",
    skillLevel: "Intermediate",
    language: "Python",
    conceptsUsed: ["Regular expressions", "file reading", "reporting"],
    expectedOutput: "A script that scans logs and summarizes errors, warnings, and request counts.",
    portfolioValue: "Connects directly to backend and platform engineering work."
  },
  {
    id: "github-repo-analyzer",
    afterStep: "After Step 5",
    title: "GitHub repo analyzer",
    skillLevel: "Intermediate",
    language: "Python",
    conceptsUsed: ["API clients", "JSON", "reports"],
    expectedOutput: "A markdown report with cleanup suggestions for GitHub repositories.",
    portfolioValue: "High-value proof for GitHub cleanup, automation, and developer tooling."
  },
  {
    id: "fastapi-notes-api",
    afterStep: "After Step 7",
    title: "FastAPI Notes API",
    skillLevel: "Intermediate",
    language: "Python",
    conceptsUsed: ["FastAPI", "routes", "Pydantic", "pytest"],
    expectedOutput: "A REST API for creating, reading, updating, and deleting notes.",
    portfolioValue: "Clear backend API proof that pairs well with a TypeScript frontend.",
    liveDemoApplicable: true
  },
  {
    id: "certificate-tracker-api",
    afterStep: "After Step 7",
    title: "Certificate Tracker API",
    skillLevel: "Intermediate",
    language: "Python",
    conceptsUsed: ["FastAPI", "CRUD", "validation", "testing"],
    expectedOutput: "An API for tracking certifications, badges, links, and completion dates.",
    portfolioValue: "Directly extends this launchpad into a backend-capable project.",
    liveDemoApplicable: true
  },
  {
    id: "resume-keyword-checker-api",
    afterStep: "After Step 7",
    title: "Resume Keyword Checker API",
    skillLevel: "Intermediate",
    language: "Python",
    conceptsUsed: ["Text parsing", "FastAPI", "keyword matching"],
    expectedOutput: "An API that compares resume text with internship job descriptions.",
    portfolioValue: "Strong internship-prep tool with practical career value.",
    liveDemoApplicable: true
  },
  {
    id: "study-quiz-generator-api",
    afterStep: "After Step 7",
    title: "Study Quiz Generator API",
    skillLevel: "Intermediate",
    language: "Python and TypeScript",
    conceptsUsed: ["APIs", "question generation", "review tracking"],
    expectedOutput: "A backend that accepts notes and returns quiz questions.",
    portfolioValue: "Connects your Python tooling path to your TypeScript dashboard direction.",
    liveDemoApplicable: true
  },
  {
    id: "certification-progress-report-generator",
    afterStep: "After Step 8",
    title: "Certification progress report generator",
    skillLevel: "Intermediate",
    language: "Python",
    conceptsUsed: ["CSV", "pandas", "markdown export"],
    expectedOutput: "A generated markdown or CSV report of certificate progress.",
    portfolioValue: "Useful internal tool that turns study progress into publishable proof."
  },
  {
    id: "study-analytics-dashboard",
    afterStep: "After Step 8",
    title: "Study analytics dashboard",
    skillLevel: "Intermediate",
    language: "Python and TypeScript",
    conceptsUsed: ["pandas", "charts", "dashboard data"],
    expectedOutput: "A small dashboard showing study time, weak topics, and completed projects.",
    portfolioValue: "Bridges Python data work with your TypeScript web-app strength.",
    liveDemoApplicable: true
  }
];
