import {
  PronunQuizList,
  PronunAccuracyResponse,
} from "@/types/pronunciationType";

import { getID } from "@/utils/handleID";
import { getPronunciationId } from "@/utils/handleCategoryID";

import { instance } from "@/api/instance";

export const getPronunQuizList = async (category_id: number) => {
  const { data } = await instance.get<PronunQuizList>(
    `/voice/${category_id}/words`,
  );

  return data.words;
};

export const calcPronunAccuracy = async (word_id: number, audio_file: File) => {
  const user_id = getID();

  const formData = new FormData();
  formData.append("audio_file", audio_file);

  const { data } = await instance.post<PronunAccuracyResponse>(
    `/voice/calculateAccuracy/${user_id}/${word_id}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return data;
};

export const savePronunAccuracy = async () => {
  const user_id = getID();
  const category_id = getPronunciationId();

  const { data } = await instance.post(
    `/voice/saveVoiceAccuracy/${user_id}/${category_id}`,
  );
  return data;
};
