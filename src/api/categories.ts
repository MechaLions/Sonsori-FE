import { CategoryResponse } from "@/types/categoryType";

import { instance } from "@/api/instance";

export const categories = async () => {
  const { data } = await instance.get<CategoryResponse>("/categories");

  return data.categories;
};
