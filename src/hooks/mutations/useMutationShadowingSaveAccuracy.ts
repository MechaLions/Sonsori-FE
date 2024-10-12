import { useMutation } from "@tanstack/react-query";

import { savePronunAccuracy } from "@/api/pronunciation";

export const useMutationPronunSaveAccuracy = () => {
  const mutation = useMutation({
    mutationFn: () => savePronunAccuracy(),
  });

  return mutation;
};
