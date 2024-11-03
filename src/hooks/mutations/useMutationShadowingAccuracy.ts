import { useMutation } from "@tanstack/react-query";

import { ShadowingAccuracyRequest } from "@/types/shadowingType";

import { calcShadowingAccuracy } from "@/api/shadowing";

export const useMutationShadowingAccuracy = () => {
  const mutation = useMutation({
    mutationFn: ({ word_id, user_text }: ShadowingAccuracyRequest) =>
      calcShadowingAccuracy(word_id, user_text),
  });

  return mutation;
};
