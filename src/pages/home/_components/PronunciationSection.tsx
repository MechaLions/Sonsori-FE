import { forwardRef } from "react";
import { Button } from "@ui/components/ui/button";

import { Link } from "@/router";

interface PronunciationSectionProps {}

const PronunciationSection = forwardRef<HTMLDivElement>(
  (props: PronunciationSectionProps, ref) => {
    return (
      <main
        ref={ref}
        className="gap- flex flex-col items-center justify-center gap-20 bg-[#F5F5F5] px-40 py-36"
      >
        <section className="mb-10 flex w-full flex-col gap-14">
          <h1 className="text-[40px] font-bold text-brand">발음 교정</h1>
          <h1 className="text-center text-[50px] font-bold leading-tight">
            이제는 발음도 학습해요.
          </h1>
        </section>

        <section className="flex w-full items-center justify-between gap-[70px]">
          <div className="min-h-[320px] w-1/3 min-w-[450px] bg-black text-white">
            이미지
          </div>
          <div className="flex w-full flex-col gap-8">
            <h1 className="text-3xl font-semibold text-brand">
              표준발음 따라 정확한 발음 학습
            </h1>
            <div className="text-[25px] font-normal leading-tight">
              원하는 카테고리를 고르고,
              <br />
              학습할 텍스트와 해당 표준발은 텍스트를 확인해주세요.
              <br />
              <br />
              녹음 버튼을 누르고,
              <br />
              구화 발음을 녹음 완료 후 결과 확인하기 버튼을 눌러주세요.
            </div>
          </div>
        </section>

        <section className="flex w-full items-center justify-between gap-[70px]">
          <div className="flex w-full flex-col gap-8 text-right">
            <h1 className="text-3xl font-semibold text-brand">
              실시간 정확도 측정
            </h1>
            <div className="text-[25px] font-normal leading-tight">
              결과 확인 버튼을 누르면 해당 문제의 정확도를 바로 측정 받아요.
              <br />
              100%를 목표로 계속 도전해봐요!
            </div>
          </div>
          <div className="min-h-[320px] w-1/3 min-w-[450px] bg-black text-white">
            이미지
          </div>
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
