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
        step: step,
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

  return (
    <AppScreen>
      <Activity>
        <ActivityContent>
          <ActivityHeader step={step}>
            <ProgressBar percent={step / 10} />
          </ActivityHeader>

          <PromptSection
            step={step}
            onAnswerSelect={handleAnswerSelect}
            setIsChecked={handleCheck} // VideoAnswerSection에서 상태 변경
            videoConstraints={videoConstraints}
            showVideoAnswerSection={showVideoAnswerSection}
            textQuestionChanged={textQuestionChanged}
          />

          <div className="flex items-center justify-center gap-4 pt-7">
            {/* 결과 확인 or 다음 문제 버튼 */}
            {step === 10 ? (
              <Button
                variant="brand"
                onClick={handleStop}
                disabled={isDisabled} // 답 선택 전 또는 카메라 pause 전까지 비활성화
                className={`${
                  isDisabled
                    ? "bg-buttonGray text-white"
                    : "bg-brand text-white"
                }`}
                style={{
                  opacity: isDisabled ? 1 : undefined, // 흐림 효과를 없애기 위한 스타일 설정
                }}
              >
                결과 확인
              </Button>
            ) : (
              <Button
                variant="brand"
                onClick={handleNext}
                disabled={isDisabled} // 답 선택 전 또는 카메라 pause 전까지 비활성화
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
            )}
          </div>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default QuizActivity;
