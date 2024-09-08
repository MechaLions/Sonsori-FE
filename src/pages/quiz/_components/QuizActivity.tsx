import { startTransition } from "react";
import { Button } from "@ui/components/ui/button";
import { useStack } from "@stackflow/react";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import ProgressBar from "@/components/ProgressBar";

import { useQuizFlow } from "@/utils/quiz/useQuizFlow";

import PropmptSection from "./PromptSection";
import { Activity, ActivityHeader, ActivityContent } from "./Activity";

type QuizParams = {
  step: number;
};

const QuizActivity: ActivityComponentType<QuizParams> = ({ params }) => {
  const { step } = params;

  const { pop, replace } = useQuizFlow();

  const stack = useStack();
  let popCounts = stack.activities.length;

  const handleNext = () => {
    replace(
      "QuizActivity",
      {
        step: step + 1,
      },
      { animate: false },
    );
  };

  const handleStop = () => {
    startTransition(() => {
      while (popCounts > 0) {
        pop({ animate: false });
        popCounts--;
      }
    });
  };

  return (
    <AppScreen>
      <Activity>
        <ActivityContent>
          <ActivityHeader step={step}>
            <ProgressBar percent={step / 10} />
          </ActivityHeader>
          <PropmptSection step={step} />
          <div className="items-center pt-7">
            {step === 10 ? (
              <Button variant="brand" onClick={handleStop}>
                결과 확인
              </Button>
            ) : (
              <Button variant="brand" onClick={handleNext}>
                다음 문제
              </Button>
            )}
          </div>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default QuizActivity;
