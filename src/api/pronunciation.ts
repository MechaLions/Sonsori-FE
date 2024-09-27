import { PronunQuizList } from "@/types/pronunciationType";

import { instance } from "@/api/instance";

export const getPronunQuizList = async (category_id: number) => {
  const { data } = await instance.get<PronunQuizList>(
    `/voice/${category_id}/words`,
  );

  return data.words;
};
