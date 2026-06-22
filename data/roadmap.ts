import type { ResourceLink } from "./types";

export type RoadmapStage = {
  id: string;
  label: string;
  title: string;
  status: string;
  progress: number;
  why: string;
  whatToDo: string[];
  studyLinks?: ResourceLink[];
  relatedProject?: string;
  relatedCertification?: string;
  estimatedTime: string;
  nextAction: string;
};

export const roadmapStages: RoadmapStage[] = [
  {
    id: "start",
    label: "Start",
    title: "Jared, 4th Year CS Student",
    status: "Starting point",
    progress: 8,
    why: "This is the honest baseline: you already have academic work, leadership, and project ideas to package.",
    whatToDo: ["Inventory proof", "Choose the strongest projects", "Turn progress into visible artifacts"],
    relatedProject: "Jared Platform Engineering Launchpad",
    estimatedTime: "1 focused evening",
    nextAction: "Write down the projects and roles you already have proof for."
  },
  {
    id: "github-cleanup",
    label: "Stage 1",
    title: "GitHub cleanup",
    status: "Current focus",
    progress: 18,
    why: "Recruiters check GitHub as proof.",
    whatToDo: [
      "Fix bio",
      "Create profile README",
      "Pin best repos",
      "Clean weak repos",
      "Add README files",
      "Add screenshots"
    ],
    studyLinks: [
      {
        label: "Managing your profile README",
        url: "https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme"
      },
      {
        label: "Pinning items to your profile",
        url: "https://docs.github.com/en/account-and-profile/how-tos/profile-customization/pinning-items-to-your-profile"
      }
    ],
    relatedProject: "GitHub cleanup center",
    estimatedTime: "2 to 3 days",
    nextAction: "Update your bio and create the profile README first."
  },
  {
    id: "resume",
    label: "Stage 2",
    title: "Resume",
    status: "Next",
    progress: 12,
    why: "A clean one-page resume helps you apply fast.",
    whatToDo: ["Create one-page resume", "Add skills", "Add projects", "Add leadership", "Add certifications"],
    relatedProject: "Resume builder checklist",
    estimatedTime: "1 to 2 days",
    nextAction: "Start with the summary, skills, and strongest three projects."
  },
  {
    id: "python-mastery",
    label: "Stage 3",
    title: "Python Mastery",
    status: "Core programming",
    progress: 0,
    why: "Python helps me build automation, backend APIs, tooling, data scripts, and AI support projects.",
    whatToDo: [
      "Cisco Python Essentials 1.",
      "CS50P.",
      "freeCodeCamp Python Certification.",
      "Kaggle Python.",
      "Cisco Python Essentials 2.",
      "FastAPI.",
      "pytest.",
      "pandas and automation projects."
    ],
    studyLinks: [
      { label: "Python Learning Path", url: "/python-learning-path" },
      { label: "Cisco Python Essentials 1", url: "https://www.netacad.com/courses/python-essentials-1" },
      { label: "CS50P", url: "https://cs50.harvard.edu/python/" },
      { label: "freeCodeCamp Python Certification", url: "https://www.freecodecamp.org/learn/python-v9" },
      { label: "Kaggle Python", url: "https://www.kaggle.com/learn/python" }
    ],
    relatedProject: "File Organizer, GitHub Repo Analyzer, Resume Keyword Checker, FastAPI Certificate Tracker",
    relatedCertification: "Cisco Python Essentials 1 badge, CS50P free certificate, freeCodeCamp Python Certification, Kaggle Python certificate, Cisco Python Essentials 2 badge",
    estimatedTime: "8 to 12 weeks",
    nextAction: "Start Cisco Python Essentials 1."
  },
  {
    id: "portfolio",
    label: "Stage 4",
    title: "Portfolio",
    status: "Package proof",
    progress: 10,
    why: "A portfolio shows your projects in one place.",
    whatToDo: [
      "Build personal website",
      "Add featured projects",
      "Add resume PDF",
      "Add GitHub and LinkedIn links"
    ],
    relatedProject: "Portfolio website",
    estimatedTime: "3 to 5 days",
    nextAction: "Publish a simple portfolio with two polished case studies."
  },
  {
    id: "free-certifications",
    label: "Stage 5",
    title: "Free certifications",
    status: "Build signal",
    progress: 6,
    why: "Free badges prove you are studying.",
    whatToDo: [
      "Complete Cisco, AWS Educate, Google Skills, Linux, Docker, and Kubernetes courses",
      "Upload badge links",
      "Only mark finished badges as complete"
    ],
    studyLinks: [
      { label: "AWS Educate", url: "https://aws.amazon.com/education/awseducate/" },
      { label: "Cisco Linux Unhatched", url: "https://www.netacad.com/courses/linux-unhatched" }
    ],
    relatedCertification: "Cisco, AWS Educate, Google Skills, Linux Foundation",
    estimatedTime: "2 to 4 weeks",
    nextAction: "Finish one beginner networking or Linux badge before adding more."
  },
  {
    id: "platform-fundamentals",
    label: "Stage 6",
    title: "Platform engineering fundamentals",
    status: "Core study",
    progress: 8,
    why: "This is the target career path.",
    whatToDo: [
      "Study Linux",
      "Networking",
      "Docker",
      "CI/CD",
      "Kubernetes",
      "Terraform",
      "GitOps",
      "Observability",
      "Security",
      "Backstage"
    ],
    studyLinks: [
      {
        label: "Platform Engineering Roadmap",
        url: "https://mbianchidev.github.io/platform-engineering-roadmap"
      },
      { label: "DevOps Roadmap", url: "https://roadmap.sh/devops" }
    ],
    relatedProject: "Platform engineering roadmap",
    estimatedTime: "8 to 12 weeks",
    nextAction: "Study Docker and GitHub Actions before Kubernetes."
  },
  {
    id: "forgepanel",
    label: "Stage 7",
    title: "ForgePanel project",
    status: "Flagship build",
    progress: 5,
    why: "One strong project beats many unfinished ideas.",
    whatToDo: [
      "Build app list",
      "Add deploy button",
      "Add logs",
      "Track deployment history",
      "Add environment variables",
      "Create status cards"
    ],
    relatedProject: "Next.js, TypeScript, Docker, GitHub Actions",
    estimatedTime: "2 to 3 weeks",
    nextAction: "Ship version 1 with mock deploys and clean documentation."
  },
  {
    id: "platform-lab",
    label: "Stage 8",
    title: "Platform Engineering Lab",
    status: "Proof lab",
    progress: 4,
    why: "This shows real platform engineering practice.",
    whatToDo: [
      "Dockerized app",
      "CI/CD",
      "Docker Compose",
      "Kubernetes manifests",
      "Terraform folder",
      "Argo CD notes",
      "Prometheus and Grafana notes"
    ],
    studyLinks: [
      { label: "Docker Get Started", url: "https://docs.docker.com/get-started/" },
      { label: "Kubernetes Tutorials", url: "https://kubernetes.io/docs/tutorials/" },
      { label: "Terraform Tutorials", url: "https://developer.hashicorp.com/terraform/tutorials" }
    ],
    relatedProject: "Platform Engineering Lab",
    estimatedTime: "3 to 6 weeks",
    nextAction: "Create the repo with folders before the lab is fully complete."
  },
  {
    id: "internship-applications",
    label: "Stage 9",
    title: "Internship applications",
    status: "Apply while building",
    progress: 3,
    why: "You need to apply while building.",
    whatToDo: ["Prepare resume", "Prepare portfolio", "Prepare GitHub", "Prepare LinkedIn", "Track applications"],
    relatedProject: "Application tracker later",
    estimatedTime: "Ongoing",
    nextAction: "Apply to a small batch every week once the resume reaches 80 percent."
  },
  {
    id: "paid-certifications",
    label: "Stage 10",
    title: "Paid certifications later",
    status: "Later",
    progress: 0,
    why: "Do not pay before you build foundations.",
    whatToDo: ["CNPA", "KCNA", "Terraform Associate", "CGOA", "PCA", "OTCA", "CBA", "KCSA", "CNPE"],
    relatedCertification: "Cloud native, GitOps, Terraform, observability, Backstage",
    estimatedTime: "After portfolio and lab proof",
    nextAction: "Keep these in the future lane until the lab is real."
  },
  {
    id: "goal",
    label: "Goal",
    title: "Platform Engineering Intern or Backend Developer Intern",
    status: "Target outcome",
    progress: 0,
    why: "This is the target outcome.",
    whatToDo: [
      "Show clean GitHub",
      "Resume",
      "Portfolio",
      "ForgePanel",
      "Platform Engineering Lab",
      "Free badges",
      "LinkedIn activity"
    ],
    relatedProject: "Career proof package",
    estimatedTime: "By consistent weekly shipping",
    nextAction: "Build, publish, document, repeat."
  }
];
