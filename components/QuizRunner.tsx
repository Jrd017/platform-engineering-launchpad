"use client";

import { RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { Badge } from "@/components/Badge";
import { EmptyState } from "@/components/EmptyState";
import { useProgress } from "@/components/ProgressProvider";
import { SectionPanel } from "@/components/SectionPanel";
import { defaultQuizQuestions, defaultQuizTopics, type QuizQuestion } from "@/data/quizQuestions";

type QuizMode = "ready" | "running" | "finished";

export function QuizRunner() {
  const { progress, recordQuizAttempt } = useProgress();
  const [topic, setTopic] = useState("All topics");
  const [mode, setMode] = useState<QuizMode>("ready");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [lastWrongIds, setLastWrongIds] = useState<string[]>([]);

  const allQuestions = useMemo(() => [...defaultQuizQuestions, ...progress.customQuestions], [progress.customQuestions]);
  const questions = useMemo(
    () => (topic === "All topics" ? allQuestions : allQuestions.filter((question) => question.topic === topic)),
    [allQuestions, topic]
  );
  const currentQuestion = questions[currentIndex];
  const score = questions.filter((question) => answers[question.id] === question.correctAnswer).length;
  const wrongQuestions = questions.filter((question) => lastWrongIds.includes(question.id));
  const reviewTopics = Array.from(new Set(wrongQuestions.map((question) => question.topic)));

  function startQuiz() {
    setMode("running");
    setCurrentIndex(0);
    setAnswers({});
    setLastWrongIds([]);
  }

  function finishQuiz(nextAnswers: Record<string, string>) {
    const wrongIds = questions.filter((question) => nextAnswers[question.id] !== question.correctAnswer).map((question) => question.id);
    setAnswers(nextAnswers);
    setLastWrongIds(wrongIds);
    setMode("finished");
    recordQuizAttempt({
      topic,
      score: questions.length - wrongIds.length,
      total: questions.length,
      wrongQuestionIds: wrongIds
    });
  }

  function chooseAnswer(question: QuizQuestion, answer: string) {
    const nextAnswers = { ...answers, [question.id]: answer };
    setAnswers(nextAnswers);
  }

  function handleNext() {
    if (currentIndex >= questions.length - 1) {
      finishQuiz(answers);
      return;
    }

    setCurrentIndex((index) => index + 1);
  }

  return (
    <SectionPanel title="Quiz Runner" description="Take a short quiz, see your score, and review missed concepts.">
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="surface-card rounded-lg border border-white/10 bg-white/[0.04] p-4">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <label className="grid min-w-56 gap-1 text-xs font-medium text-slate-300">
              Topic
              <select
                value={topic}
                onChange={(event) => {
                  setTopic(event.target.value);
                  setMode("ready");
                  setAnswers({});
                  setLastWrongIds([]);
                }}
                className="focus-ring rounded-md border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-white"
              >
                <option>All topics</option>
                {defaultQuizTopics.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="button"
              onClick={startQuiz}
              disabled={questions.length === 0}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/[0.15] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              {mode === "ready" ? "Start quiz" : "Restart"}
            </button>
          </div>

          {questions.length === 0 ? (
            <EmptyState title="No questions for this topic" description="Add a custom question in the builder, then run the quiz again." />
          ) : null}

          {mode === "ready" && questions.length > 0 ? (
            <div className="surface-card rounded-lg border border-dashed border-white/[0.15] p-8 text-center">
              <p className="text-sm text-slate-300">{questions.length} questions ready.</p>
            </div>
          ) : null}

          {mode === "running" && currentQuestion ? (
            <div>
              <div className="mb-4 flex items-center justify-between gap-3">
                <Badge tone="cyan">
                  Question {currentIndex + 1} of {questions.length}
                </Badge>
                <Badge tone="slate">{currentQuestion.topic}</Badge>
              </div>
              <h3 className="text-xl font-semibold leading-8 text-white">{currentQuestion.question}</h3>
              <div className="mt-5 grid gap-3">
                {currentQuestion.choices.map((choice) => {
                  const selected = answers[currentQuestion.id] === choice;

                  return (
                    <button
                      key={choice}
                      type="button"
                      onClick={() => chooseAnswer(currentQuestion, choice)}
                      className={`focus-ring rounded-lg border px-4 py-3 text-left text-sm transition ${
                        selected
                          ? "border-cyan-300/[0.55] bg-cyan-300/10 text-white"
                          : "border-white/10 bg-slate-950/50 text-slate-300 hover:border-cyan-300/[0.35] hover:text-white"
                      }`}
                    >
                      {choice}
                    </button>
                  );
                })}
              </div>
              <div className="mt-5 flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!answers[currentQuestion.id]}
                  className="focus-ring rounded-md border border-white/10 bg-white/[0.08] px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/[0.35] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {currentIndex >= questions.length - 1 ? "Finish quiz" : "Next question"}
                </button>
              </div>
            </div>
          ) : null}

          {mode === "finished" ? (
            <div>
              <div className="rounded-lg border border-emerald-300/25 bg-emerald-300/10 p-5">
                <p className="text-sm font-semibold text-emerald-100">Score</p>
                <p className="mt-2 text-3xl font-semibold text-white">
                  {score}/{questions.length}
                </p>
              </div>
              {wrongQuestions.length ? (
                <div className="mt-5">
                  <h3 className="text-sm font-semibold text-white">Wrong answers</h3>
                  <div className="mt-3 grid gap-3">
                    {wrongQuestions.map((question) => (
                      <div key={question.id} className="surface-card rounded-lg border border-white/10 bg-slate-950/50 p-4">
                        <Badge tone="violet">{question.topic}</Badge>
                        <p className="mt-3 text-sm font-semibold text-white">{question.question}</p>
                        <p className="mt-2 text-sm text-slate-300">Correct answer: {question.correctAnswer}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-400">{question.explanation}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="mt-5 rounded-lg border border-cyan-300/25 bg-cyan-300/10 p-4 text-sm text-cyan-100">
                  Clean run. Keep going while the concepts are fresh.
                </p>
              )}
            </div>
          ) : null}
        </div>

        <aside className="surface-card rounded-lg border border-white/10 bg-white/[0.04] p-4">
          <h3 className="text-sm font-semibold text-white">Review focus</h3>
          {reviewTopics.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {reviewTopics.map((item) => (
                <Badge key={item} tone="amber">
                  {item}
                </Badge>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm leading-6 text-slate-400">Missed topics will appear here after a quiz attempt.</p>
          )}
          <h3 className="mt-6 text-sm font-semibold text-white">Recent attempts</h3>
          <div className="mt-3 grid gap-2">
            {progress.quizAttempts.length === 0 ? (
              <p className="text-sm text-slate-400">No attempts yet.</p>
            ) : (
              progress.quizAttempts.slice(0, 5).map((attempt) => (
                <div key={attempt.id} className="surface-card rounded-md border border-white/10 bg-slate-950/50 px-3 py-2 text-sm text-slate-300">
                  <div className="flex justify-between gap-3">
                    <span>{attempt.topic}</span>
                    <span className="font-semibold text-white">
                      {attempt.score}/{attempt.total}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </aside>
      </div>
    </SectionPanel>
  );
}
