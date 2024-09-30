import { forwardRef } from "react";
import { Button } from "@ui/components/ui/button";

import { Link } from "@/router";
import QuizExample2 from "@/assets/QuizExample2.png";
import QuizExample1 from "@/assets/QuizExample1.png";

interface QuizSectionProps {}

const QuizSection = forwardRef<HTMLDivElement>(
  (props: QuizSectionProps, ref) => {
    return (
      <main
        ref={ref}
        className="gap- flex flex-col items-center justify-center gap-20 px-40 py-36"
      >
        <section className="mb-10 flex w-full flex-col gap-14">
          <h1 className="text-[40px] font-bold text-brand">퀴즈</h1>
          <h1 className="text-center text-[50px] font-bold leading-tight">
            <p>두가지 버전의 퀴즈로</p>
            <p>확실한 수어 학습</p>
          </h1>
        </section>

        <section className="flex w-full justify-between">
          <div className="flex w-full flex-col items-center justify-between gap-16">
            <img
              src={QuizExample1}
              alt="Pronun Section"
              className="min-h-[320px] w-1/3 min-w-[450px] rounded-[20px] object-cover shadow-shadowBrand"
            />
            <div className="flex w-full flex-col gap-8 text-center text-[30px]">
              <h1 className="font-semibold text-brand">
                수어 영상보고 의미 맞추기
              </h1>
              <div className="font-normal leading-tight">
                수어 영상이 출력되면 부합하는
                <br />
                의미의 선지를 골라주세요.
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-16">
            <img
              src={QuizExample2}
              alt="Pronun Section"
              className="min-h-[320px] w-1/3 min-w-[450px] rounded-[20px] object-cover shadow-shadowBrand"
            />
            <div className="flex w-full flex-col gap-8 text-center text-[30px]">
              <h1 className="font-semibold text-brand">
                의미에 부합하는 수어 동작 맞추기
              </h1>
              <div className="font-normal leading-tight">
                출력된 문장의 의미에 부합하는
                <br />
                수어 동작을 입력해주세요.
              </div>
            </div>
          </div>
        </section>

        <Link to={"/quiz"}>
          <Button variant="brand" className="mt-10">
            퀴즈 바로가기
          </Button>
        </Link>
      </main>
    );
  },
);

export default QuizSection;
