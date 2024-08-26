import { Button } from "@ui/components/ui/button";

import { useNavigate } from "@/router";
import InputItem from "@/pages/user-auth/_components/InputItem";

const LoginSection = () => {
  const navigate = useNavigate();

  return (
    <main className="flex w-full flex-col items-center gap-11">
      <section className="flex w-full flex-col items-start gap-[30px]">
        <InputItem title="아이디" placeholder="아이디를 입력해주세요." />
        <InputItem title="비밀번호" placeholder="비밀번호를 입력해주세요." />
      </section>
      <Button variant="brand" onClick={() => navigate("/home")}>
        로그인
      </Button>
    </main>
  );
};

export default LoginSection;
