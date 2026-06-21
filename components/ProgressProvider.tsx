"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import type { QuizQuestion } from "@/data/quizQuestions";
import type { Status } from "@/data/types";
import {
  initialProgressState,
  makeTimestampId,
  normalizeProgress,
  STORAGE_KEY,
  type ItemProgress,
  type ProgressState,
  type QuizAttempt
} from "@/lib/progress";

type ProgressContextValue = {
  progress: ProgressState;
  isLoaded: boolean;
  setItemProgress: (id: string, patch: ItemProgress) => void;
  toggleItem: (id: string, checked?: boolean) => void;
  setStatus: (id: string, status: Status | "Queued" | "Ready" | "Later") => void;
  addQuizQuestion: (question: Omit<QuizQuestion, "id">) => void;
  removeQuizQuestion: (id: string) => void;
  recordQuizAttempt: (attempt: Omit<QuizAttempt, "id" | "createdAt">) => void;
  resetProgress: () => void;
  exportProgress: () => string;
  importProgress: (rawJson: string) => void;
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>(initialProgressState);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setProgress(normalizeProgress(JSON.parse(stored)));
      }
    } catch {
      setProgress(initialProgressState);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const commitProgress = useCallback((updater: (current: ProgressState) => ProgressState) => {
    setProgress((current) => {
      const next = updater(current);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const setItemProgress = useCallback(
    (id: string, patch: ItemProgress) => {
      commitProgress((current) => ({
        ...current,
        items: {
          ...current.items,
          [id]: {
            ...current.items[id],
            ...patch,
            updatedAt: new Date().toISOString()
          }
        }
      }));
    },
    [commitProgress]
  );

  const toggleItem = useCallback(
    (id: string, checked?: boolean) => {
      commitProgress((current) => {
        const nextChecked = checked ?? !current.items[id]?.checked;
        return {
          ...current,
          items: {
            ...current.items,
            [id]: {
              ...current.items[id],
              checked: nextChecked,
              status: nextChecked ? "Done" : current.items[id]?.status === "Done" ? "Not Started" : current.items[id]?.status,
              updatedAt: new Date().toISOString()
            }
          }
        };
      });
    },
    [commitProgress]
  );

  const setStatus = useCallback(
    (id: string, status: Status | "Queued" | "Ready" | "Later") => {
      setItemProgress(id, { status, checked: status === "Done" });
    },
    [setItemProgress]
  );

  const addQuizQuestion = useCallback(
    (question: Omit<QuizQuestion, "id">) => {
      commitProgress((current) => ({
        ...current,
        customQuestions: [
          ...current.customQuestions,
          {
            ...question,
            id: makeTimestampId("custom-question")
          }
        ]
      }));
    },
    [commitProgress]
  );

  const removeQuizQuestion = useCallback(
    (id: string) => {
      commitProgress((current) => ({
        ...current,
        customQuestions: current.customQuestions.filter((question) => question.id !== id)
      }));
    },
    [commitProgress]
  );

  const recordQuizAttempt = useCallback(
    (attempt: Omit<QuizAttempt, "id" | "createdAt">) => {
      commitProgress((current) => ({
        ...current,
        quizAttempts: [
          {
            ...attempt,
            id: makeTimestampId("quiz-attempt"),
            createdAt: new Date().toISOString()
          },
          ...current.quizAttempts
        ].slice(0, 20)
      }));
    },
    [commitProgress]
  );

  const resetProgress = useCallback(() => {
    setProgress(initialProgressState);
    window.localStorage.removeItem(STORAGE_KEY);
  }, []);

  const exportProgress = useCallback(() => JSON.stringify(progress, null, 2), [progress]);

  const importProgress = useCallback((rawJson: string) => {
    const parsed = normalizeProgress(JSON.parse(rawJson));
    setProgress(parsed);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
  }, []);

  const value = useMemo(
    () => ({
      progress,
      isLoaded,
      setItemProgress,
      toggleItem,
      setStatus,
      addQuizQuestion,
      removeQuizQuestion,
      recordQuizAttempt,
      resetProgress,
      exportProgress,
      importProgress
    }),
    [
      progress,
      isLoaded,
      setItemProgress,
      toggleItem,
      setStatus,
      addQuizQuestion,
      removeQuizQuestion,
      recordQuizAttempt,
      resetProgress,
      exportProgress,
      importProgress
    ]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const context = useContext(ProgressContext);

  if (!context) {
    throw new Error("useProgress must be used inside ProgressProvider");
  }

  return context;
}
