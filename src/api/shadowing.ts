import {
  ShadowingQuizList,
  ShadowingAccuracyResponse,
} from "@/types/shadowingType";

import { getID } from "@/utils/handleID";
import { getShadowingId } from "@/utils/handleCategoryID";

import { instance } from "@/api/instance";

export const getShadowingQuizList = async (category_id: number) => {
  const { data } = await instance.get<ShadowingQuizList>(
    `/shadowing/${category_id}/words`,
  );

  return data.words;
};

export const calcShadowingAccuracy = async (
  word_id: number,
  user_text: string,
) => {
  const user_id = getID();

  const formData = new FormData();
  formData.append("user_text", user_text);
  const { data } = await instance.post<ShadowingAccuracyResponse>(
    `/shadowing/calculateAccuracy/${user_id}/${word_id}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return data;
};

export const saveShadowingAccuracy = async () => {
  const user_id = getID();
  const category_id = getShadowingId();

  const { data } = await instance.post(
    `/voice/saveShadowingAccuracy/${user_id}/${category_id}`,
  );
  return data;
};
