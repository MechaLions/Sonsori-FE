import { forwardRef } from "react";
import { Button } from "@ui/components/ui/button";

import { Link } from "@/router";
import ShadowingExample2 from "@/assets/ShadowingExample2.png";
import ShadowingExample1 from "@/assets/ShadowingExample1.png";

interface ShadowingSectionProps {}

const ShadowingSection = forwardRef<HTMLDivElement>(
  (props: ShadowingSectionProps, ref) => {
    return (
      <main
        ref={ref}
        className="gap- flex flex-col items-center justify-center gap-20 bg-[#F5F5F5] px-40 py-36"
      >
        <section className="mb-10 flex w-full flex-col gap-14">
          <h1 className="text-[40px] font-bold text-brand">수어 쉐도잉</h1>
          <h1 className="text-center text-[50px] font-bold leading-tight">
            <p>아직도 책으로 수어를 공부하나요?</p>
            <p>실시간 피드백 받으며 실전으로 확실하게</p>
          </h1>
        </section>

        <section className="flex w-full items-center justify-between gap-[70px]">
          <img
            src={ShadowingExample1}
            alt="Pronun Section"
            className="min-h-[320px] w-1/3 min-w-[450px] rounded-[20px] object-cover shadow-shadowBrand"
          />
          <div className="flex w-full flex-col gap-8">
            <h1 className="text-3xl font-semibold text-brand">
              따라하기를 통한 반복 학습
            </h1>
            <div className="text-[25px] font-normal leading-tight">
              원하는 카테고리를 고르고 학습할 영상을 확인해주세요.
              <br />
              영상 속 수어를 따라하고, 입력된 텍스트로 동작의 옳고 그름을 확인할
              수 있어요.
              <br />
              <br />
              다시보기 버튼으로 학습 영상을 다시 확인할 수 있어요.
              <br />
              잘못된 동작으로 인해 입력된 텍스트는 뒤로가기 버튼으로 삭제할 수
              있어요.
            </div>
          </div>
        </section>

        <section className="flex w-full items-center justify-between gap-[70px]">
          <img
            src={ShadowingExample2}
            alt="Pronun Section"
            className="min-h-[320px] w-1/3 min-w-[450px] rounded-[20px] object-cover shadow-shadowBrand"
          />
          <div className="flex w-full flex-col gap-8">
            <h1 className="text-3xl font-semibold text-brand">
              실시간 정확도 측정
            </h1>
            <div className="text-[25px] font-normal leading-tight">
              결과 확인 버튼을 누르면 해당 문제의 정확도를 바로 측정 받아요.
              <br />
              100%를 목표로 계속 도전해봐요!
            </div>
          </div>
        </section>

        <Link to={"/shadowing"}>
          <Button variant="brand" className="mt-10">
            수어 쉐도잉 바로가기
          </Button>
        </Link>
      </main>
    );
  },
);

export default ShadowingSection;
