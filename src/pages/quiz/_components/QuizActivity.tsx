import { useState, startTransition } from "react";
import { Button } from "@ui/components/ui/button";
import { useStack } from "@stackflow/react";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import ProgressBar from "@/components/ProgressBar";

import { useQuizFlow } from "@/utils/quiz/useQuizFlow";

import PromptSection from "./PromptSection";
import { Activity, ActivityHeader, ActivityContent } from "./Activity";

type QuizParams = {
  step: number;
};

const QuizActivity: ActivityComponentType<QuizParams> = ({ params }) => {
  const { step } = params;

  const { pop, replace } = useQuizFlow();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const isDisabled = selectedAnswer === null;

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

    replace(
      "ResultActivity",
      {
        step: step,
      },
      { animate: false },
    );
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  return (
    <AppScreen>
      <Activity>
        <ActivityContent>
          <ActivityHeader step={step}>
            <ProgressBar percent={step / 10} />
          </ActivityHeader>

          <PromptSection step={step} onAnswerSelect={handleAnswerSelect} />

          <div className="flex items-center justify-center gap-4 pt-7">
            {/* 결과 확인 or 다음 문제 버튼 */}
            {step < 6 ? (
              <Button
                variant="brand"
                onClick={handleNext}
                disabled={isDisabled} // 답 선택 전 버튼 비활성화
                className={`${
                  isDisabled
                    ? "bg-buttonGray text-white"
                    : "bg-brand text-white"
                }`}
                style={{
                  opacity: isDisabled ? 1 : undefined, // 흐림 효과를 없애기 위한 스타일 설정
                }}
              >
                다음 문제
              </Button>
            ) : step === 10 ? (
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
