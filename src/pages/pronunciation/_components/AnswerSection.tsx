import { startTransition } from "react";
import { Button } from "@ui/components/ui/button";
import { useStack } from "@stackflow/react";

import DoughnutChart from "@/components/DoughnutChart";

import { usePronunciationFlow } from "@/utils/usePronunciationFlow";

import AnswerCompareSection from "./AnswerCompareSection";

interface AnswerSectionProps {
  step: number;
}

const AnswerSection = (props: AnswerSectionProps) => {
  const { step } = props;

  const { pop, replace } = usePronunciationFlow();

  const stack = useStack();
  let popCounts = stack.activities.length;

  const handleStop = () => {
    startTransition(() => {
      while (popCounts > 0) {
        pop({ animate: false });
        popCounts--;
      }
    });
  };

  const handleNext = () => {
    replace(
      "QuizActivity",
      {
        step: step + 1,
      },
      { animate: false },
    );
  };

  const handleOnMore = () => {
    replace(
      "QuizActivity",
      {
        step: step,
      },
      { animate: false },
    );
  };

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
        <Button
          variant="brand"
          className="bg-brandGray text-brandDarkGray"
          onClick={handleStop}
        >
          그만할래요
        </Button>
        <Button variant="brand" onClick={handleOnMore}>
          한번 더 해볼래요
        </Button>
        {step !== 10 && (
          <Button
            variant="brand"
            className="h-[52px] border-2 border-brand bg-white text-brand"
            onClick={handleNext}
          >
            다음 문제
          </Button>
        )}
      </div>
    </section>
  );
};

export default AnswerSection;
