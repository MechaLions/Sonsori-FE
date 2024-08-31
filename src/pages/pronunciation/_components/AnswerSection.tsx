import { Button } from "@ui/components/ui/button";

import DoughnutChart from "@/components/DoughnutChart";

import AnswerCompareSection from "./AnswerCompareSection";

interface AnswerSectionProps {
  isLastNumber?: boolean;
}

const AnswerSection = (props: AnswerSectionProps) => {
  const { isLastNumber } = props;

  return (
    <section className="flex w-[70%] flex-col items-center justify-center gap-20 rounded-[20px] bg-white py-[50px] shadow-shadowBrand">
      <h1 className="mt-4 text-4xl font-bold">정확도 100%를 도전해보세요!</h1>
      <section className="flex w-full items-center justify-center gap-[100px]">
        <div className="flex flex-col items-center gap-5">
          <DoughnutChart percent={0.82} size="150px" />
          <div className="text-[25px] font-bold">
            <p>정확도: 82%</p>
          </div>
        </div>
        <AnswerCompareSection />
      </section>
      <div className="flex items-center justify-center gap-[50px]">
        <Button variant="brand" className="text-brandDarkGray bg-brandGray">
          그만할래요
        </Button>
        <Button
          variant="brand"
          className="bg-brandLightBlue text-brandDarkGray"
        >
          한번 더 해볼래요
        </Button>
        {!isLastNumber && <Button variant="brand">다음 문제</Button>}
      </div>
    </section>
  );
};

export default AnswerSection;
