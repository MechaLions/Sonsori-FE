import { useState, startTransition } from "react";
import { cn } from "@ui/lib/utils";
import { Button } from "@ui/components/ui/button";
import { useStack } from "@stackflow/react";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import StepNumber from "@/components/StepNumber";
import { Activity, ActivityMain, ActivityContent } from "@/components/Activity";

import { useQuizFlow } from "@/utils/quiz/useQuizFlow";

import PromptSection from "./PromptSection";
type QuizParams = {
  // 이게 지정 되어있어야 parameter로 받을수 있다.
  step: number;
  correctCount: number;
  signUrls: string[];
  correctTexts: string[];
  optionsList: string[][];
};

const QuizActivity: ActivityComponentType<QuizParams> = ({ params }) => {
  const { step, correctCount, signUrls, correctTexts, optionsList } = params;
  const { pop, replace } = useQuizFlow();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false); // 카메라 Check 상태 관리
  const [showVideoAnswerSection, setShowVideoAnswerSection] = useState(false); // UserVideoAnswerSection을 VideoAnswerSection으로 변경

  const [correctness, setCorrectness] = useState<boolean | undefined>(
    undefined,
  );

  // correctness에 따라 handleCorrectCount 호출
  const handleCorrectness = (isCorrect: boolean) => {
    setCorrectness(isCorrect);
  };

  const isDisabled = selectedAnswer === null && !isChecked; // 답 선택 전과 pause 상태 전까지 비활성화

  const stack = useStack();
  let popCounts = stack.activities.length;

  const handleNext = () => {
    replace(
      "QuizActivity",
      {
        step: step + 1,
        correctCount: correctness === true ? correctCount + 1 : correctCount,
        signUrls,
        correctTexts,
        optionsList,
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
        correctCount: correctCount, // 정답개수 변수를 넘겨라
      },
      { animate: false },
    );
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleCheck = () => {
    setIsChecked(true);
    setShowVideoAnswerSection(true);
  };

  const buttonText = step === 10 ? "결과 확인" : "다음 문제";
  const handleClick = step === 10 ? handleStop : handleNext;

  return (
    <AppScreen>
      <Activity>
        <ActivityContent container="quiz">
          <StepNumber step={step}>
            <h1 className="text-center text-2xl font-semibold">
              {step > 5
                ? "주어진 단어에 부합하는 수어 영상을 촬영해주세요."
                : "왼쪽의 수어 영상을 확인하고, 이에 부합하는 단어를 골라주세요."}
            </h1>
          </StepNumber>
          <ActivityMain>
            <PromptSection
              step={step}
              onAnswerSelect={handleAnswerSelect}
              setIsChecked={handleCheck} // VideoAnswerSection에서 상태 변경
              showVideoAnswerSection={showVideoAnswerSection}
              handleCorrectness={handleCorrectness} // handleCorrectCount 전달
              correctText={correctTexts[step - 1]}
              signUrl={signUrls[step - 1]}
              optionList={optionsList[step - 1]}
            />
            <Button
              variant="brand"
              onClick={handleClick}
              disabled={isDisabled}
              className={cn(
                isDisabled ? "bg-buttonGray" : "bg-brand",
                "text-white",
              )}
              style={isDisabled ? { opacity: 1 } : undefined}
            >
              {buttonText}
            </Button>
          </ActivityMain>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default QuizActivity;
