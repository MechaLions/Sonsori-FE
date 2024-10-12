export type ShadowingQuizList = {
  words: ShadowingQuizItem[];
};

export type ShadowingQuizItem = {
  word_id: number;
  correct_text: string;
  user_text: string;
};

export type ShadowingAccuracyRequest = {
  word_id: number;
  user_text: string;
};

export type ShadowingAccuracyResponse = {
  word_id: number;
  correct_text: string;
  user_text: string;
  accuracy: number;
};
