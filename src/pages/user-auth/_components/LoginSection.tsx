import { Button } from "@ui/components/ui/button";

import { useLogin } from "@/hooks/useLogin";

import InputItem from "./InputItem";

const LoginSection = () => {
  const {
    id,
    pw,
    AllPass,
    errorMent,
    handleLogin,
    handleIDchange,
    handlePWchange,
  } = useLogin();

  return (
    <main className="flex w-full flex-col items-center gap-11">
      <section className="flex w-full flex-col items-start gap-[30px]">
        <InputItem
          title="아이디"
          placeholder="아이디를 입력해주세요."
          errorMent={errorMent.id}
          value={id}
          onChange={handleIDchange}
          isPass={false}
        />
        <InputItem
          title="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          errorMent={errorMent.pw}
          value={pw}
          onChange={handlePWchange}
          isPass={false}
        />
      </section>
      <Button variant="brand" onClick={handleLogin} disabled={!AllPass}>
        로그인
      </Button>
    </main>
  );
};

export default LoginSection;
