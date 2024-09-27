import { useQuery } from "@tanstack/react-query";

import { getPronunQuizList } from "@/api/pronunciation";

export const useQueryPronunQuizList = (id: number) => {
  const { data, refetch } = useQuery({
    queryKey: ["pronun-quiz-list", id],
    queryFn: () => getPronunQuizList(id),
    enabled: false,
  });

  return { data, refetch };
};
