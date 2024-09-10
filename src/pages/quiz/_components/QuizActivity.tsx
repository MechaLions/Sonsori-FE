import { useState, startTransition } from "react";
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
  const [completed, setCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

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

  const handleComplete = () => {
    setCompleted(true);
  };

  return (
    <AppScreen>
      <Activity>
        <ActivityContent>
          <ActivityHeader step={step}>
            <ProgressBar percent={step / 10} />
          </ActivityHeader>

          {/* PromptSection에 TextAnswerSection 렌더링됨 */}
          <PropmptSection step={step} onAnswerSelect={handleAnswerSelect} />

          <div className="flex items-center justify-center gap-4 pt-7">
            {/* 선택 완료 버튼 */}
            {step < 6 && (
              <Button
                variant="brand"
                className={`${
                  selectedAnswer
                    ? "bg-brand text-white"
                    : "bg-gray-400 text-black"
                }`}
                onClick={handleComplete}
                disabled={completed}
              >
                선택 완료
              </Button>
            )}

            {/* 결과 확인/다음 문제 버튼 */}
            {step < 6 ? (
              completed && (
                <Button variant="brand" onClick={handleNext}>
                  다음 문제
                </Button>
              )
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
