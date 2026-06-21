"use client";

import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/Badge";
import { useProgress } from "@/components/ProgressProvider";
import { SectionPanel } from "@/components/SectionPanel";
import { defaultQuizTopics } from "@/data/quizQuestions";

const blankChoices = ["", "", "", ""];

export function QuizBuilder() {
  const { progress, addQuizQuestion, removeQuizQuestion } = useProgress();
  const [topic, setTopic] = useState(defaultQuizTopics[0]);
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState(blankChoices);
  const [correctIndex, setCorrectIndex] = useState(0);
  const [explanation, setExplanation] = useState("");
  const [error, setError] = useState("");

  function updateChoice(index: number, value: string) {
    setChoices((current) => current.map((choice, choiceIndex) => (choiceIndex === index ? value : choice)));
  }

  function handleAdd() {
    const cleanedChoices = choices.map((choice) => choice.trim()).filter(Boolean);

    if (!question.trim() || cleanedChoices.length < 2 || !cleanedChoices[correctIndex]) {
      setError("Add a question, at least two choices, and a correct answer.");
      return;
    }

    addQuizQuestion({
      topic,
      question: question.trim(),
      choices: cleanedChoices,
      correctAnswer: choices[correctIndex].trim(),
      explanation: explanation.trim() || "Review this concept before retaking the quiz."
    });

    setQuestion("");
    setChoices(blankChoices);
    setCorrectIndex(0);
    setExplanation("");
    setError("");
  }

  return (
    <SectionPanel title="Quiz Builder" description="Add your own questions and keep them saved in this browser.">
      <div className="grid gap-5 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="grid gap-3">
          {error ? <p className="rounded-lg border border-rose-300/25 bg-rose-300/10 p-3 text-sm text-rose-100">{error}</p> : null}
          <label className="grid gap-1 text-xs font-medium text-slate-300">
            Topic
            <select
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              className="focus-ring rounded-md border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-white"
            >
              {defaultQuizTopics.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-1 text-xs font-medium text-slate-300">
            Question
            <textarea
              value={question}
              rows={3}
              onChange={(event) => setQuestion(event.target.value)}
              className="focus-ring resize-y rounded-md border border-white/10 bg-slate-950/80 px-3 py-2 text-sm leading-6 text-white"
            />
          </label>
          <div className="grid gap-2">
            {choices.map((choice, index) => (
              <label key={index} className="grid gap-1 text-xs font-medium text-slate-300">
                Choice {index + 1}
                <div className="flex gap-2">
                  <input
                    value={choice}
                    onChange={(event) => updateChoice(index, event.target.value)}
                    className="focus-ring min-w-0 flex-1 rounded-md border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-white"
                  />
                  <button
                    type="button"
                    onClick={() => setCorrectIndex(index)}
                    className={`focus-ring rounded-md border px-3 py-2 text-xs font-semibold transition ${
                      correctIndex === index
                        ? "border-emerald-300/40 bg-emerald-300/10 text-emerald-100"
                        : "border-white/10 bg-white/[0.05] text-slate-300 hover:border-cyan-300/30"
                    }`}
                  >
                    Correct
                  </button>
                </div>
              </label>
            ))}
          </div>
          <label className="grid gap-1 text-xs font-medium text-slate-300">
            Explanation
            <textarea
              value={explanation}
              rows={3}
              onChange={(event) => setExplanation(event.target.value)}
              className="focus-ring resize-y rounded-md border border-white/10 bg-slate-950/80 px-3 py-2 text-sm leading-6 text-white"
            />
          </label>
          <button
            type="button"
            onClick={handleAdd}
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/[0.15]"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
            Add question
          </button>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h3 className="text-sm font-semibold text-white">Custom questions</h3>
            <Badge tone="cyan">{progress.customQuestions.length} saved</Badge>
          </div>
          {progress.customQuestions.length === 0 ? (
            <p className="rounded-lg border border-dashed border-white/[0.15] p-6 text-center text-sm text-slate-400">
              No custom questions yet.
            </p>
          ) : (
            <div className="grid gap-3">
              {progress.customQuestions.map((item) => (
                <div key={item.id} className="rounded-lg border border-white/10 bg-slate-950/50 p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <Badge tone="slate">{item.topic}</Badge>
                      <p className="mt-2 text-sm font-semibold text-white">{item.question}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeQuizQuestion(item.id)}
                      className="focus-ring rounded-md border border-white/10 bg-white/[0.05] p-2 text-slate-300 transition hover:border-rose-300/40 hover:text-rose-100"
                      aria-label={`Remove ${item.question}`}
                    >
                      <Trash2 className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </SectionPanel>
  );
}
