import { create } from "zustand";

import { PronunQuizItem } from "@/types/pronunciationType";

interface PronunQuizState {
  quizList: PronunQuizItem[];
  quiz: PronunQuizItem | null;
}

interface PronunQuizAction {
  setPronunQuizList: (quizList: PronunQuizItem[]) => void;
  getPronunQuizList: () => PronunQuizState["quizList"];
  getPronunQuiz: (quizId: number) => PronunQuizItem | undefined;
}

export const usePronunQuizStore = create<PronunQuizState & PronunQuizAction>(
  (set, get) => ({
    quizList: [],
    quiz: null,
    setPronunQuizList: quizList => set({ quizList }),
    getPronunQuizList: () => get().quizList,
    getPronunQuiz: quizId =>
      get().quizList.find(quiz => quiz.word_id === quizId),
  }),
);
