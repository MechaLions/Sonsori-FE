import { useEffect, useState } from "react";
import { useToast } from "@ui/hooks/use-toast";

import { useMutationLogin } from "@/hooks/mutations/useMutationLogin";

export const useLogin = () => {
  const loginMutation = useMutationLogin();
  const { toast } = useToast();

  const [id, setID] = useState("");
  const [pw, setPW] = useState("");

  const [AllPass, setAllPass] = useState(false);

  const [errorMent, setErrorMent] = useState<{
    id: string;
    pw: string;
  }>({ id: "", pw: "" });

  useEffect(() => {
    setAllPass(id !== "" && pw !== "");
  }, [id, pw]);

  const handleIDchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setID(event.target.value);

    if (event.target.value === "") {
      setErrorMent(prev => ({
        ...prev,
        id: "아이디를 입력하세요.",
      }));
      return;
    } else {
      setErrorMent(prev => ({
        ...prev,
        id: "",
      }));
    }
  };

  const handlePWchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPW(event.target.value);

    if (event.target.value === "") {
      setErrorMent(prev => ({
        ...prev,
        pw: "비밀번호를 입력하세요.",
      }));
      return;
    } else {
      setErrorMent(prev => ({
        ...prev,
        pw: "",
      }));
    }
  };

  const handleLogin = () => {
    loginMutation.mutate(
      {
        user_login_id: id,
        user_login_password: pw,
      },
      {
        onSuccess: () => {
          setErrorMent({ id: "", pw: "" });
          return;
        },
        onError: () => {
          toast({
            title: "아이디 또는 비밀번호가 일치하지 않습니다.",
            variant: "brandDestructive",
          });
        },
      },
    );
  };

  return {
    id,
    pw,
    AllPass,
    errorMent,
    handleLogin,
    handleIDchange,
    handlePWchange,
  };
};
