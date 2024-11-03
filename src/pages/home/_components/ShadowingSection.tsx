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
        {...props}
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
          <div className="flex w-full flex-col gap-6">
            <h1 className="text-3xl font-semibold text-brand">
              따라하기를 통한 반복 학습
            </h1>
            <div className="flex flex-col gap-4 text-[25px] font-normal leading-snug">
              <p>원하는 카테고리를 선택하면 학습이 시작됩니다.</p>
              <p>
                왼쪽 영상 속 수어를 따라 한 후,
                <br />
                번역된 텍스트로 동작이 올바른지 확인할 수 있습니다.
              </p>
              <p>
                잘못된 수어가 입력되었을 경우,
                <br />
                단어 삭제 버튼으로 마지막 단어를 삭제할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="flex w-full items-center justify-between gap-[70px]">
          <img
            src={ShadowingExample2}
            alt="Pronun Section"
            className="min-h-[320px] w-1/3 min-w-[450px] rounded-[20px] object-cover shadow-shadowBrand"
          />
          <div className="flex w-full flex-col gap-6">
            <h1 className="text-3xl font-semibold text-brand">
              실시간 정확도 측정
            </h1>
            <div className="flex flex-col gap-4 text-[25px] font-normal leading-snug">
              <p>
                결과 확인 버튼을 누르면,
                <br /> 해당 문제의 정확도를 바로 확인할 수 있습니다.
              </p>
              <p>
                그만하기 버튼을 눌러 학습을 종료할 수 있으며,
                <br /> 해당 문제까지의 결과는 마이페이지에 자동으로 저장됩니다.
              </p>
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
