import { useMutation } from "@tanstack/react-query";

import { AuthResponse, SignupRequestParams } from "@/types/authType";

import { useNavigate } from "@/router";
import { register } from "@/api/auth";

export const useMutationSignUp = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: ({
      user_login_id,
      user_login_password,
      name,
    }: SignupRequestParams) =>
      register({ user_login_id, user_login_password, name }),
    onSuccess: (response: AuthResponse) => {
      localStorage.setItem("userID", response.user_id.toString());
      navigate("/home", { replace: true });
      return;
    },
    onError: (error: string) => {
      alert(error);
    },
  });

  return mutation;
};
