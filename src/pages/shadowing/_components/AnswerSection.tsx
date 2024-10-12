import { startTransition } from "react";
import { Button } from "@ui/components/ui/button";
import { useStack } from "@stackflow/react";

import DoughnutChart from "@/components/DoughnutChart";

import { useMutationShadowingSaveAccuracy } from "@/hooks/mutations/useMutationShadowingSaveAccuracy";

import { ShadowingAccuracyResponse } from "@/types/shadowingType";

import { useShadowingFlow } from "@/utils/shadowing/useShadowingFlow";
import { clearShadowingId } from "@/utils/handleCategoryID";

import AnswerCompareSection from "./AnswerCompareSection";

interface AnswerSectionProps {
  step: number;
  response: ShadowingAccuracyResponse;
}

const AnswerSection = (props: AnswerSectionProps) => {
  const { step, response } = props;
  const { pop, replace } = useShadowingFlow();

  const mutation = useMutationShadowingSaveAccuracy();

  const stack = useStack();
  let popCounts = stack.activities.length;

  const handleStop = () => {
    mutation.mutate(undefined, {
      onSuccess: () => {
        clearShadowingId();
      },
    });

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
    <section className="mb-10 flex w-[70%] flex-col items-center justify-center gap-[70px] rounded-[20px] bg-white py-10 shadow-shadowBrand">
      <h1 className="mt-4 text-4xl font-bold">정확도 100%를 도전해보세요!</h1>
      <section className="flex w-full items-center justify-center gap-[100px]">
        <div className="flex flex-col items-center gap-5">
          <DoughnutChart percent={response.accuracy / 100} size="150px" />
          <div className="text-[25px] font-bold">
            <p>정확도: {response.accuracy}%</p>
          </div>
        </div>
        <AnswerCompareSection
          correct_text={response.correct_text}
          user_text={response.translated_text}
        />
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
