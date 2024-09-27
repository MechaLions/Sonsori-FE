export type PronunQuizList = {
  words: PronunQuizItem[];
};

export type PronunQuizItem = {
  word_id: number;
  word_text: string;
  answer_voice: string;
};
