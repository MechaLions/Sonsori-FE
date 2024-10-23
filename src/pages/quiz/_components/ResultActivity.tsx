import { startTransition } from "react";
import { Button } from "@ui/components/ui/button";
import { useStack } from "@stackflow/react";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import { Activity, ActivityContent } from "@/components/Activity";

import { useQuizFlow } from "@/utils/quiz/useQuizFlow";

// QuizParams 타입 추가
type QuizParams = {
  correctCount: number;
};

const ResultActivity: ActivityComponentType = ({ params }) => {
  // correctCount 받아오기
  const { correctCount } = params as QuizParams;
  const { pop, replace } = useQuizFlow();

  const stack = useStack();
  let popCounts = stack.activities.length;

  const handleStop = () => {
    startTransition(() => {
      while (popCounts > 0) {
        pop({ animate: false });
        popCounts--;
      }
    });

    replace("MainActivity", { animate: false });
  };

  const handleOneMore = () => {
    replace(
      "QuizActivity",
      {
        step: 1,
      },
      { animate: false },
    );
  };

  return (
    <AppScreen>
      <Activity>
        <ActivityContent
          container="quiz"
          className="flex items-center justify-center pb-10"
        >
          <div className="relative flex h-[630px] w-[1032px] flex-col items-center justify-center rounded-2xl bg-white shadow-lg">
            <p className="absolute right-[80px] top-[50px] text-[80px] font-semibold">
              🎉
            </p>
            <div className="flex h-[260px] w-[800px] items-center justify-center rounded-2xl bg-brandLightBlue">
              <p className="text-center text-[30px] font-bold">
                10문제 중&nbsp;
              </p>
              {/* correctCount 사용 */}
              <p className="text-center text-[40px] font-bold text-brand">
                {correctCount}문제&nbsp;
              </p>
              <p className="text-center text-[30px] font-bold">맞았어요.</p>
            </div>
            <p className="mb-5 mt-7 text-center text-[20px] font-semibold">
              수고하셨습니다 😊
            </p>
            <div className="flex h-[100px] items-center justify-between gap-[60px]">
              <Button
                variant="brand"
                className="bg-brandGray text-black"
                onClick={handleStop}
              >
                그만할래요
              </Button>
              <Button variant="brand" onClick={handleOneMore}>
                한번더 해볼래요
              </Button>
            </div>
          </div>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default ResultActivity;
