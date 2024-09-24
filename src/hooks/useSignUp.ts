import { useEffect, useState } from "react";

import { useMutationSignUp } from "@/hooks/mutations/useMutationSignUp";
import { useMutationCheckID } from "@/hooks/mutations/useMutationCheckID";

export const useSignUp = () => {
  const signupMutation = useMutationSignUp();
  const checkIdMutation = useMutationCheckID();

  const nameRegex = /^[a-zA-Z가-힣]+$/; // 1글자 이상, 공백 없이 영/한 상관 없음
  const idRegex = /^[a-zA-Z0-9!@#$%^&*()_+]{2,10}$/; //영어, 숫자, 특수문자 합쳐서 1글자 이상 10글자 이내
  const pwRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[a-zA-Z\d!@#$%^&*()_+]{6,15}$/; //영어, 숫자, 특수기호를 포함하고 6~15글자 이내

  const [name, setName] = useState("");
  const [id, setID] = useState("");
  const [pw, setPW] = useState("");
  const [checkPW, setCheckPW] = useState("");

  const [isNamePass, setIsNamePass] = useState(false);
  const [isIDPass, setIsIDPass] = useState(false);
  const [isPWPass, setIsPWPass] = useState(false);
  const [isPWSame, setIsPWSame] = useState(false);

  const [AllPass, setAllPass] = useState(false);

  useEffect(() => {
    setAllPass(isNamePass && isIDPass && isPWPass && isPWSame);
  }, [isNamePass, isIDPass, isPWPass, isPWSame]);

  const [errorMent, setErrorMent] = useState<{
    name: string;
    id: string;
    pw: string;
  }>({ name: "", id: "", pw: "" });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nameValue = event.target.value;
    setName(nameValue);

    if (!nameRegex.test(nameValue)) {
      setErrorMent(prev => ({
        ...prev,
        name: "이름은 공백 없이 한 글자 이상이어야 합니다.",
      }));
      setIsNamePass(false);
    } else {
      setErrorMent(prev => ({
        ...prev,
        name: "",
      }));
      setIsNamePass(true);
    }
  };

  const handleIDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const idValue = event.target.value;
    setID(idValue);

    if (!idRegex.test(idValue)) {
      setErrorMent(prev => ({
        ...prev,
        id: "아이디는 영어, 숫자, 특수문자를 포함할 수 있으며, 2~10자여야 합니다.",
      }));
      setIsIDPass(false);
      return;
    } else {
      checkIdMutation.mutate(idValue, {
        onSuccess: response => {
          if (response && response.message === "사용 가능한 아이디입니다.") {
            setErrorMent(prev => ({
              ...prev,
              id: response.message,
            }));
            setIsIDPass(true);
          }
        },
        onError: () => {
          setErrorMent(prev => ({
            ...prev,
            id: "이미 존재하는 아이디입니다.",
          }));
          setIsIDPass(false);
        },
      });
    }
  };

  const handlePWChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pwValue = event.target.value;
    setPW(pwValue);

    if (!pwRegex.test(pwValue)) {
      setErrorMent(prev => ({
        ...prev,
        pw: "비밀번호는 영어, 숫자, 특수기호를 포함하여 6~15자여야 합니다.",
      }));
      setIsPWPass(false);
      return;
    } else {
      setErrorMent(prev => ({
        ...prev,
        pw: "",
      }));
      setIsPWPass(true);
    }
  };

  const handleCheckPWChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkPWValue = event.target.value;
    setCheckPW(checkPWValue);

    if (pw === checkPWValue && checkPWValue !== "" && pw !== "") {
      setErrorMent(prev => ({
        ...prev,
        pw: "비밀번호가 일치합니다.",
      }));
      setIsPWSame(true);
    } else {
      setErrorMent(prev => ({
        ...prev,
        pw: "비밀번호가 일치하지 않습니다.",
      }));
      setIsPWSame(false);
      return;
    }
  };

  const handleSignup = () => {
    signupMutation.mutate(
      {
        user_login_id: id,
        user_login_password: pw,
        name: name,
      },
      {
        onSuccess: () => {
          setErrorMent({ name: "", id: "", pw: "" });
          return;
        },
      },
    );
  };

  return {
    name,
    id,
    pw,
    checkPW,
    isNamePass,
    isIDPass,
    isPWPass,
    isPWSame,
    AllPass,
    errorMent,
    handleNameChange,
    handleIDChange,
    handlePWChange,
    handleCheckPWChange,
    handleSignup,
  };
};
