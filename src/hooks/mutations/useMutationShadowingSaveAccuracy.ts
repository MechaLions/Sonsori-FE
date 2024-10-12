import { useMutation } from "@tanstack/react-query";

import { saveShadowingAccuracy } from "@/api/shadowing";

export const useMutationShadowingSaveAccuracy = () => {
  const mutation = useMutation({
    mutationFn: () => saveShadowingAccuracy(),
  });

  return mutation;
};
