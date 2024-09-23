import { Button } from "@ui/components/ui/button";

import { useSignUp } from "@/hooks/useSignUp";

import InputItem from "./InputItem";
const SignupSection = () => {
  const {
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
  } = useSignUp();

  return (
    <main className="flex w-full flex-col items-center gap-11">
      <section className="flex w-full flex-col items-start gap-[30px]">
        <InputItem
          title="이름"
          placeholder="이름"
          value={name}
          errorMent={errorMent.name}
          isPass={isNamePass}
          onChange={handleNameChange}
        />
        <InputItem
          title="아이디"
          placeholder="아이디"
          value={id}
          errorMent={errorMent.id}
          isPass={isIDPass}
          onChange={handleIDChange}
        />
        <InputItem
          title="비밀번호"
          placeholder="비밀번호"
          isSignupPassword
          value={pw}
          errorMent={errorMent.pw}
          value2={checkPW}
          isPass={isPWPass && isPWSame}
          onChange={handlePWChange}
          onChange2={handleCheckPWChange}
        />
      </section>
      <Button variant="brand" onClick={handleSignup} disabled={!AllPass}>
        회원가입
      </Button>
    </main>
  );
};

export default SignupSection;
