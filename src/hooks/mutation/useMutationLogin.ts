import { useMutation } from "@tanstack/react-query";

import { AuthResponse, LoginRequestParams } from "@/types/authType";

import { useNavigate } from "@/router";
import { login } from "@/api/auth";

export const useMutationLogin = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: ({ user_login_id, user_login_password }: LoginRequestParams) =>
      login({ user_login_id, user_login_password }),
    onSuccess: (response: AuthResponse) => {
      localStorage.setItem("userID", response.user_id.toString());
      navigate("/home", { replace: true });
      return;
    },
  });

  return mutation;
};
