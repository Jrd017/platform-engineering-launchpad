export type Status = "Not Started" | "Studying" | "Done";

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type Priority = "Highest" | "High" | "Medium" | "Low";

export type ResourceLink = {
  label: string;
  url: string;
};

export type ChecklistEntry = {
  id: string;
  title: string;
  description?: string;
  link?: string;
  meta?: string;
};
