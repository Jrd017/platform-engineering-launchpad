export type IconKey =
  | "home"
  | "route"
  | "layers"
  | "library"
  | "code"
  | "award"
  | "trophy"
  | "github"
  | "file"
  | "palette"
  | "linkedin"
  | "lightbulb"
  | "brain"
  | "calendar";

export type NavigationItem = {
  href: string;
  label: string;
  shortLabel: string;
  icon: IconKey;
};

export const navigationItems: NavigationItem[] = [
  { href: "/", label: "Home Dashboard", shortLabel: "Home", icon: "home" },
  {
    href: "/roadmap-diagram",
    label: "Interactive Roadmap",
    shortLabel: "Roadmap",
    icon: "route"
  },
  {
    href: "/platform-roadmap",
    label: "Platform Roadmap",
    shortLabel: "Study",
    icon: "layers"
  },
  {
    href: "/resources",
    label: "Study Links Library",
    shortLabel: "Links",
    icon: "library"
  },
  {
    href: "/python-learning-path",
    label: "Python Learning Path",
    shortLabel: "Python",
    icon: "code"
  },
  {
    href: "/free-certifications",
    label: "Free Certifications",
    shortLabel: "Free Certs",
    icon: "award"
  },
  {
    href: "/paid-certifications",
    label: "Paid Future Certs",
    shortLabel: "Future Certs",
    icon: "trophy"
  },
  {
    href: "/github-cleanup",
    label: "GitHub Cleanup Center",
    shortLabel: "GitHub",
    icon: "github"
  },
  {
    href: "/resume",
    label: "Resume Builder Checklist",
    shortLabel: "Resume",
    icon: "file"
  },
  {
    href: "/portfolio-planner",
    label: "Portfolio Website Planner",
    shortLabel: "Portfolio",
    icon: "palette"
  },
  {
    href: "/linkedin-agent",
    label: "LinkedIn Achievement Poster",
    shortLabel: "LinkedIn",
    icon: "linkedin"
  },
  {
    href: "/project-board",
    label: "Personal Project Idea Board",
    shortLabel: "Projects",
    icon: "lightbulb"
  },
  {
    href: "/quiz",
    label: "Study Guide and Quiz System",
    shortLabel: "Quiz",
    icon: "brain"
  },
  {
    href: "/weekly-plan",
    label: "Weekly Action Plan",
    shortLabel: "Weekly",
    icon: "calendar"
  }
];
