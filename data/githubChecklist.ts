import type { ChecklistEntry } from "./types";

export const githubProfileUrl = "https://github.com/Jrd017";

export const suggestedGithubBio =
  "Computer Science Student | Backend and Platform Engineering Learner | React, Node.js, TypeScript, Python, Docker";

export const suggestedPinnedRepos = [
  "Sandata",
  "Where_Did_I_Put_It",
  "ccs308-software-engineering-reviewer",
  "NLP-reviewer",
  "Parallel-Final-Reviewer",
  "platform-engineering-lab",
  "portfolio-website"
];

export const repoCleanupNotes = [
  "Rename Where_Did_I_Put_It to where-did-i-put-it.",
  "Rename \"OPEN THIS CUH SETUP_GUIDE.md\" to \"SETUP_GUIDE.md.\"",
  "Make \"noapikey\" private or clean it.",
  "Add serious descriptions to reviewer apps."
];

export const githubChecklist: ChecklistEntry[] = [
  { id: "github-bio", title: "Change bio", description: "Use a clear backend and platform engineering learner positioning." },
  { id: "github-profile-readme", title: "Create profile README", description: "Make the profile tell recruiters what to inspect first." },
  { id: "github-pin-repos", title: "Pin best repos", description: "Pin projects that show proof, polish, and direction." },
  { id: "github-repo-names", title: "Fix repo names", description: "Prefer lowercase kebab-case names where possible." },
  { id: "github-descriptions", title: "Add descriptions", description: "Every public repo should explain what it is in one sentence." },
  { id: "github-screenshots", title: "Add screenshots", description: "Screenshots make projects easier to trust quickly." },
  { id: "github-demo-links", title: "Add live demo links", description: "Use Vercel or README links when a project can be viewed." },
  { id: "github-readmes", title: "Add proper README files", description: "Overview, features, stack, screenshots, run steps, and lessons learned." },
  { id: "github-private-weak", title: "Make weak repos private", description: "Keep public repos intentional and recruiter-friendly." },
  { id: "github-topics", title: "Add topics", description: "Use topics like react, typescript, docker, platform-engineering, nlp." },
  { id: "github-file-names", title: "Clean file names", description: "Remove joke names and confusing setup file names." },
  { id: "github-gitignore", title: "Add .gitignore", description: "Avoid committing dependencies, secrets, and local build output." },
  { id: "github-license", title: "Add license", description: "Use a clear license for public projects when appropriate." },
  {
    id: "github-architecture-diagrams",
    title: "Add project architecture diagrams",
    description: "A simple diagram can make student projects feel engineered."
  }
];
