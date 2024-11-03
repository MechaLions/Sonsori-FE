import { create } from "zustand";

import { ShadowingQuizItem } from "@/types/shadowingType";

interface ShadowingQuizState {
  quizList: ShadowingQuizItem[];
  quiz: ShadowingQuizItem | null;
}

interface ShadowingQuizAction {
  setShadowingQuizList: (quizList: ShadowingQuizItem[]) => void;
  getShadowingQuizList: () => ShadowingQuizState["quizList"];
  getShadowingQuiz: (quizId: number) => ShadowingQuizItem | undefined;
}

export const useShadowingQuizStore = create<
  ShadowingQuizState & ShadowingQuizAction
>((set, get) => ({
  quizList: [],
  quiz: null,
  setShadowingQuizList: quizList => set({ quizList }),
  getShadowingQuizList: () => get().quizList,
  getShadowingQuiz: index => get().quizList[index - 1],
}));
