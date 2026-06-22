import type { Priority } from "./types";

export type ProjectIdea = {
  id: string;
  title: string;
  priority: Priority;
  language?: string;
  description: string;
  features?: string[];
  deliverables?: string[];
  techStack?: string[];
  later?: string[];
  important?: string;
  reasonForLowPriority?: string;
};

export const projectIdeas: ProjectIdea[] = [
  {
    id: "forgepanel",
    title: "ForgePanel",
    priority: "Highest",
    description: "A self-service deployment dashboard for student developers.",
    features: [
      "App list",
      "Deploy button",
      "Deployment history",
      "Logs page",
      "Environment variables page",
      "App status",
      "GitHub repo link per app",
      "Mock CI/CD status"
    ],
    techStack: ["Next.js", "TypeScript", "Docker", "GitHub Actions", "localStorage for version 1"],
    later: ["Kubernetes", "Terraform", "Argo CD", "Prometheus"]
  },
  {
    id: "platform-engineering-lab",
    title: "Platform Engineering Lab",
    priority: "Highest",
    description: "A hands-on repo that shows Docker, CI/CD, Kubernetes, Terraform, GitOps, and monitoring.",
    deliverables: [
      "Dockerized app",
      "Docker Compose",
      "GitHub Actions workflow",
      "Kubernetes manifests",
      "Terraform folder",
      "Argo CD app manifest",
      "Prometheus and Grafana notes"
    ]
  },
  {
    id: "home-server-lab",
    title: "Personal Home Server Lab",
    priority: "Medium",
    description: "Use your PC as a learning server.",
    features: ["Local dashboard", "Docker services", "Reverse proxy", "Local DNS notes", "Monitoring", "File backup", "Security checklist"],
    important: "Make it safe. No public exposure unless properly secured. Start local only."
  },
  {
    id: "linkedin-agent",
    title: "LinkedIn Achievement Agent Poster",
    priority: "Medium",
    description: "A tool that turns achievements into LinkedIn posts, resume bullets, and GitHub updates.",
    features: ["No auto-posting in version 1", "Draft only"]
  },
  {
    id: "quiz-review-system",
    title: "Quiz Creator and Review System App",
    priority: "High",
    description: "A study tool that creates quizzes, study guides, flashcards, and reviewers.",
    features: ["Subject selection", "Quiz mode", "Study mode", "Glossary", "Wrong answer review", "Progress tracking", "Export notes"]
  },
  {
    id: "github-repo-analyzer",
    title: "GitHub Repo Analyzer",
    priority: "High",
    language: "Python",
    description: "Analyze my GitHub repositories and generate cleanup suggestions.",
    features: [
      "Check missing README",
      "Check missing description",
      "Check missing topics",
      "Check old commits",
      "Check missing license",
      "Generate improvement report",
      "Export markdown summary"
    ],
    techStack: ["Python", "Requests", "GitHub API", "Markdown export"]
  },
  {
    id: "resume-keyword-checker",
    title: "Resume Keyword Checker",
    priority: "High",
    language: "Python",
    description: "Compare my resume text against internship job descriptions.",
    features: [
      "Paste resume",
      "Paste job description",
      "Detect missing keywords",
      "Suggest stronger project bullets",
      "Generate improvement checklist"
    ],
    techStack: ["Python", "Text processing", "FastAPI later"]
  },
  {
    id: "study-quiz-generator",
    title: "Study Quiz Generator",
    priority: "High",
    language: "Python and TypeScript",
    description: "Generate quizzes from notes and track wrong answers.",
    features: ["Add notes", "Generate questions", "Take quiz", "Review weak topics", "Export reviewer"],
    techStack: ["Python", "TypeScript", "Next.js", "FastAPI later"]
  },
  {
    id: "fastapi-certificate-tracker",
    title: "FastAPI Certificate Tracker",
    priority: "Medium",
    language: "Python",
    description: "API for tracking certifications, badges, links, and completion dates.",
    features: ["CRUD certifications", "Add provider", "Add link", "Add badge URL", "Add completion status", "Connect later to frontend"],
    techStack: ["Python", "FastAPI", "Pydantic", "pytest"]
  },
  {
    id: "cli-platform-helper",
    title: "CLI Platform Helper",
    priority: "Medium",
    language: "Python",
    description: "Command line helper for platform engineering study commands.",
    features: [
      "Show Docker commands",
      "Show Git commands",
      "Show Kubernetes commands",
      "Show Terraform commands",
      "Save personal notes"
    ],
    techStack: ["Python", "CLI", "File storage"]
  },
  {
    id: "language-teacher",
    title: "Language Teacher Conversation App",
    priority: "Low",
    description: "A conversational language tutor that talks with the user and gives feedback after the conversation.",
    reasonForLowPriority: "Possible thesis project. Do not build now. Keep as future thesis idea."
  }
];
