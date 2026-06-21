import type { ChecklistEntry } from "./types";

export const portfolioPages = ["Home", "About", "Projects", "Resume", "Certifications", "Contact"];

export const portfolioContent = [
  "Short intro",
  "Main skills",
  "Featured projects",
  "Screenshots",
  "Live demo links",
  "GitHub links",
  "Resume download",
  "LinkedIn link"
];

export const featuredProjectCategories = [
  "Platform Engineering",
  "Backend Development",
  "AI and NLP",
  "Software Engineering",
  "Developer Tools",
  "Study Tools"
];

export const portfolioChecklist: ChecklistEntry[] = [
  { id: "portfolio-deploy-vercel", title: "Deploy on Vercel", description: "Publish the site so recruiters can open it immediately." },
  { id: "portfolio-favicon", title: "Add favicon", description: "Use a simple JP or terminal-inspired mark." },
  { id: "portfolio-og-image", title: "Add Open Graph image", description: "Make the link preview look polished." },
  { id: "portfolio-analytics", title: "Add analytics later", description: "Track page visits once the portfolio is public." },
  { id: "portfolio-resume-pdf", title: "Add resume PDF", description: "Keep one-click download available." },
  { id: "portfolio-contact-form", title: "Add contact form later", description: "Add when you are ready to handle messages." },
  { id: "portfolio-domain", title: "Buy domain later", description: "Do this after the content is solid." }
];
