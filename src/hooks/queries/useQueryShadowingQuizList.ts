import { useQuery } from "@tanstack/react-query";

import { getShadowingQuizList } from "@/api/shadowing";

export const useQueryShadowingQuizList = (id: number) => {
  const { data, refetch } = useQuery({
    queryKey: ["shadowing-quiz-list", id],
    queryFn: () => getShadowingQuizList(id),
    enabled: false,
  });

  return { data, refetch };
};
