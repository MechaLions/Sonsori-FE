import { useState, startTransition } from "react";
import { Button } from "@ui/components/ui/button";
import { useStack } from "@stackflow/react";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import ProgressBar from "@/components/ProgressBar";
import {
  Activity,
  ActivityHeader,
  ActivityMain,
  ActivityContent,
} from "@/components/Activity";

import { useQuizFlow } from "@/utils/quiz/useQuizFlow";

import PromptSection from "./PromptSection";
type QuizParams = {
  // 이게 지정 되어있어야 parameter로 받을수 있다.
  step: number;
};

const videoConstraints: MediaTrackConstraints = {
  facingMode: "environment",
  advanced: [
    { width: { exact: 2560 }, height: { exact: 1440 } },
    { width: { exact: 1920 }, height: { exact: 1080 } },
    { width: { exact: 1280 }, height: { exact: 720 } },
    { width: { exact: 1024 }, height: { exact: 576 } },
    { width: { exact: 900 }, height: { exact: 506 } },
    { width: { exact: 800 }, height: { exact: 450 } },
    { width: { exact: 640 }, height: { exact: 360 } },
    { width: { exact: 320 }, height: { exact: 180 } },
  ],
};

const QuizActivity: ActivityComponentType<QuizParams> = ({ params }) => {
  const { step } = params;
  const { pop, replace } = useQuizFlow();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false); // 카메라 Check 상태 관리
  const [showVideoAnswerSection, setShowVideoAnswerSection] = useState(false); // UserVideoAnswerSection을 VideoAnswerSection으로 변경
  const [textQuestionChanged, setTextQuestionChanged] = useState(false); // 문구 변경 관리

  const [correctCount] = useState(0); // correctCount 변수 선언 및 초기화

  const isDisabled = selectedAnswer === null && !isChecked; // 답 선택 전과 pause 상태 전까지 비활성화

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
    setTextQuestionChanged(true);
  };
  const buttonText = step === 10 ? "결과 확인" : "다음 문제";
  const handleClick = step === 10 ? handleStop : handleNext;
  return (
    <AppScreen>
      <Activity>
        <ActivityContent container="quiz">
          <ActivityHeader step={step} className="relative">
            <ProgressBar percent={step / 10} />
            <Button
              variant="brand"
              onClick={handleClick}
              disabled={isDisabled}
              className={`${
                isDisabled ? "bg-buttonGray text-white" : "bg-brand text-white"
              } absolute bottom-[50px] right-[20%]`}
              style={{
                opacity: isDisabled ? 1 : undefined,
              }}
            >
              {buttonText}
            </Button>
          </ActivityHeader>
          <ActivityMain className="gap-5">
            <PromptSection
              step={step}
              onAnswerSelect={handleAnswerSelect}
              setIsChecked={handleCheck} // VideoAnswerSection에서 상태 변경
              videoConstraints={videoConstraints}
              showVideoAnswerSection={showVideoAnswerSection}
              textQuestionChanged={textQuestionChanged}
              correctCount={correctCount}
            />
          </ActivityMain>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default QuizActivity;
