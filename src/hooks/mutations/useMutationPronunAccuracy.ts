import { useMutation } from "@tanstack/react-query";

import { PronunAccuracyRequest } from "@/types/pronunciationType";

import { calcPronunAccuracy } from "@/api/pronunciation";

export const useMutationPronunAccuracy = () => {
  const mutation = useMutation({
    mutationFn: ({ word_id, audio_file }: PronunAccuracyRequest) =>
      calcPronunAccuracy(word_id, audio_file),
  });

  return mutation;
};
