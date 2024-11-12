import { forwardRef } from "react";
import { Button } from "@ui/components/ui/button";

import { Link } from "@/router";
import PronunExample2 from "@/assets/PronunExample2.png";
import PronunExample1 from "@/assets/PronunExample1.png";

interface PronunciationSectionProps {}

const PronunciationSection = forwardRef<HTMLDivElement>(
  (props: PronunciationSectionProps, ref) => {
    return (
      <main
        {...props}
        ref={ref}
        className="flex flex-col items-center justify-center gap-20 bg-[#F5F5F5] px-40 py-36"
      >
        <section className="mb-10 flex w-full flex-col gap-14">
          <h1 className="text-[40px] font-bold text-brand">발음 교정</h1>
          <h1 className="text-center text-[50px] font-bold leading-tight">
            이제는 발음도 학습해요.
          </h1>
        </section>

        <section className="flex w-full items-center justify-between gap-[70px]">
          <img
            src={PronunExample1}
            alt="Pronun Section"
            className="min-h-[320px] w-1/3 min-w-[450px] rounded-[20px] object-cover shadow-shadowBrand"
          />
          <div className="flex w-full flex-col gap-6">
            <h1 className="text-3xl font-semibold text-brand">
              표준발음 따라 정확한 발음 학습
            </h1>
            <div className="flex flex-col gap-4 text-[25px] font-normal leading-snug">
              <p>
                원하는 카테고리를 선택하면 학습이 시작됩니다.
                <br />
                학습할 텍스트와 표준발음 텍스트를 확인해주세요.
              </p>
              <p>
                녹음 버튼을 누르면 녹음이 시작됩니다.
                <br />
                녹음 완료 후, ‘결과 확인하기’ 버튼을 눌러주세요.
              </p>
            </div>
          </div>
        </section>

        <section className="flex w-full items-center justify-between gap-[70px]">
          <div className="flex w-full flex-col gap-6 text-right">
            <h1 className="text-3xl font-semibold text-brand">
              실시간 정확도 측정
            </h1>
            <div className="flex flex-col gap-4 text-[25px] font-normal leading-snug">
              <p>
                결과 확인 버튼을 누르면,
                <br /> 해당 문제의 정확도를 바로 확인할 수 있습니다.
              </p>
              <p>
                표준 발음과 비교하여,
                <br />
                올바른 발음은 초록색으로, 틀린 발음은 빨간색으로 표시됩니다.
              </p>
              <p>
                그만하기 버튼으로 학습을 종료할 수 있으며,
                <br />
                해당 문제까지의 결과는 마이페이지에 자동 저장됩니다.
              </p>
            </div>
          </div>
          <img
            src={PronunExample2}
            alt="Pronun Section"
            className="min-h-[320px] w-1/3 min-w-[450px] rounded-[20px] object-cover shadow-shadowBrand"
          />
        </section>

        <Link to={"/pronunciation"}>
          <Button variant="brand" className="mt-10">
            발음 교정 바로가기
          </Button>
        </Link>
      </main>
    );
  },
);

export default PronunciationSection;
