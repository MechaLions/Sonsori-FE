import { Button } from "@ui/components/ui/button";

import InputItem from "@/pages/user-auth/_components/InputItem";

const LoginSection = () => {
  return (
    <main className="flex w-full flex-col items-center gap-11">
      <section className="flex w-full flex-col items-start gap-[30px]">
        <InputItem title="아이디" placeholder="아이디를 입력해주세요." />
        <InputItem title="비밀번호" placeholder="비밀번호를 입력해주세요." />
      </section>
      <Button variant="brand">로그인</Button>
    </main>
  );
};

export default LoginSection;
