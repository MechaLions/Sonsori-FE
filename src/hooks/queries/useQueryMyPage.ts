import { useQuery } from "@tanstack/react-query";

import { myPage } from "@/api/auth";

export const useQueryMyPage = () => {
  const { data } = useQuery({
    queryKey: ["my-page"],
    queryFn: () => myPage(),
  });
  return { data };
};
