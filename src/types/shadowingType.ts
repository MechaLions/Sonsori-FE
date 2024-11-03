export type ShadowingQuizList = {
  words: ShadowingQuizItem[];
};

export type ShadowingQuizItem = {
  word_id: number;
  word_text: string;
  sign_url: string;
};

export type ShadowingAccuracyRequest = {
  word_id: number;
  translated_text: string;
};

export type ShadowingAccuracyResponse = {
  word_id: number;
  correct_text: string;
  translated_text: string;
  accuracy: number;
};
