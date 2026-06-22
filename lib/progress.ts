import type { Status } from "@/data/types";
import type { QuizQuestion } from "@/data/quizQuestions";

export const STORAGE_KEY = "jared-platform-engineering-launchpad:v1";

export type ItemProgress = {
  checked?: boolean;
  status?: Status | "Queued" | "Ready" | "Later";
  startDate?: string;
  badgeUrl?: string;
  completedDate?: string;
  certificateUrl?: string;
  finalProjectUrl?: string;
  projectLinks?: string;
  repoUrl?: string;
  demoUrl?: string;
  notes?: string;
  updatedAt?: string;
};

export type QuizAttempt = {
  id: string;
  topic: string;
  score: number;
  total: number;
  createdAt: string;
  wrongQuestionIds: string[];
};

export type ProgressState = {
  version: 1;
  items: Record<string, ItemProgress>;
  customQuestions: QuizQuestion[];
  quizAttempts: QuizAttempt[];
};

export const initialProgressState: ProgressState = {
  version: 1,
  items: {},
  customQuestions: [],
  quizAttempts: []
};

export function normalizeProgress(input: unknown): ProgressState {
  if (!input || typeof input !== "object") {
    return initialProgressState;
  }

  const candidate = input as Partial<ProgressState>;

  return {
    version: 1,
    items:
      candidate.items && typeof candidate.items === "object" && !Array.isArray(candidate.items)
        ? candidate.items
        : {},
    customQuestions: Array.isArray(candidate.customQuestions) ? candidate.customQuestions : [],
    quizAttempts: Array.isArray(candidate.quizAttempts) ? candidate.quizAttempts : []
  };
}

export function isItemComplete(item?: ItemProgress) {
  return Boolean(item?.checked || item?.status === "Done");
}

export function calculateProgress(ids: string[], items: Record<string, ItemProgress>) {
  if (ids.length === 0) {
    return 0;
  }

  const completed = ids.filter((id) => isItemComplete(items[id])).length;
  return Math.round((completed / ids.length) * 100);
}

export function makeTimestampId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
