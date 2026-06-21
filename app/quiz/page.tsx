"use client";

import { PageHeader } from "@/components/PageHeader";
import { QuizBuilder } from "@/components/QuizBuilder";
import { QuizRunner } from "@/components/QuizRunner";

export default function QuizPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Study system"
        title="Study Guide and Quiz System"
        description="Add questions, take quizzes, see your score, review wrong answers, and save quiz progress locally."
      />

      <QuizRunner />
      <QuizBuilder />
    </div>
  );
}
