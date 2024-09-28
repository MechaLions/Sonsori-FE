import { useSuspenseQuery } from "@tanstack/react-query";

import { categories } from "@/api/categories";

export const useQueryCategoryList = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["category-list"],
    queryFn: () => categories(),
  });

  return { data };
};
