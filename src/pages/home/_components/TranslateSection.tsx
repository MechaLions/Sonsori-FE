import { forwardRef } from "react";
import { Button } from "@ui/components/ui/button";

import { Link } from "@/router";
import TranslateExampleImg from "@/assets/TranslateExample.png";

interface TranslateSectionProps {}

const TranslateSection = forwardRef<HTMLDivElement>(
  (props: TranslateSectionProps, ref) => {
    return (
      <main
        {...props}
        ref={ref}
        className="flex flex-col items-center justify-center gap-20 px-40 py-36"
      >
        <section className="flex w-full justify-between">
          <div className="flex flex-col gap-14">
            <h1 className="text-[40px] font-bold text-brand">수어 번역</h1>
            <h1 className="text-[60px] font-bold leading-tight">
              <p>통역사 없이,</p>
              <p>자유롭게 소통하세요.</p>
            </h1>
          </div>

          <img
            src={TranslateExampleImg}
            alt="Translate Section"
            className="mt-5 min-h-[320px] w-1/3 min-w-[450px] rounded-[20px] object-cover shadow-shadowBrand"
          />
        </section>

        <section className="flex w-full flex-col gap-8 text-[30px]">
          <h1 className="font-semibold text-brand">실시간 수어 동작 번역</h1>
          <div className="font-normal leading-tight">
            시작하기 버튼을 누르고, 촬영이 시작되면 원하는 마음껏 수어 동작을
            표현해주세요.
            <br />
            실시간으로 영상이 번역된 텍스트를 확인해보세요.
            <br />
            잘못된 영상이 입력되어 번역되었다면, 단어 삭제 버튼으로 삭제할 수
            있어요.
          </div>
        </section>
        <Link to={"/translate"}>
          <Button variant="brand" className="mt-10">
            수어 번역 바로가기
          </Button>
        </Link>
      </main>
    );
  },
);

export default TranslateSection;
