export type PronunQuizList = {
  words: PronunQuizItem[];
};

export type PronunQuizItem = {
  word_id: number;
  word_text: string;
  answer_voice: string;
};

export type PronunAccuracyRequest = {
  word_id: number;
  audio_file: File;
};

export type PronunAccuracyResponse = {
  word_id: number;
  correct_text: string;
  correct_pronunciation: string;
  voice_recognition_result: string;
  accuracy: number;
};
