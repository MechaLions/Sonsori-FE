import { useMutation } from "@tanstack/react-query";

import { checkID } from "@/api/auth";

export const useMutationCheckID = () => {
  const mutation = useMutation({
    mutationFn: (user_login_id: string) => checkID(user_login_id),
  });
  return mutation;
};
