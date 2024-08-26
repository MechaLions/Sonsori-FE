import { Button } from "@ui/components/ui/button";

import InputItem from "@/pages/user-auth/_components/InputItem";

const SignupSection = () => {
  return (
    <main className="flex w-full flex-col items-center gap-11">
      <section className="flex w-full flex-col items-start gap-[30px]">
        <InputItem title="이름" placeholder="이름" />
        <InputItem title="아이디" placeholder="아이디" />
        <InputItem title="비밀번호" placeholder="비밀번호" isSignupPassword />
      </section>
      <Button variant="brand">회원가입</Button>
    </main>
  );
};

export default SignupSection;
