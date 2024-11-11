import { startTransition } from "react";
import { Button } from "@ui/components/ui/button";
import { useStack } from "@stackflow/react";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import { Activity, ActivityContent } from "@/components/Activity";

import { useQuizFlow } from "@/utils/quiz/useQuizFlow";
import { getID } from "@/utils/handleID";

import { instance } from "@/api/instance";

// ResultParams 타입 추가
type ResultParams = {
  correctCount: number;
  signUrls: string[];
  correctTexts: string[];
  optionsList: string[][];
};

const ResultActivity: ActivityComponentType<ResultParams> = ({ params }) => {
  // correctCount 받아오기
  const { correctCount, signUrls, correctTexts, optionsList } = params;
  const { pop, replace } = useQuizFlow();

  const stack = useStack();
  let popCounts = stack.activities.length;

  const handleStop = async () => {
    await recordQuizScore(correctCount);

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
        correctCount: 0,
        signUrls,
        correctTexts,
        optionsList,
      },
      { animate: false },
    );
  };

  // API 호출 함수 정의
  const recordQuizScore = async (correctCount: number) => {
    try {
      const userId = getID();
      const response = await instance.post(`/quiz/${userId}/record`, {
        quiz_correct_number: correctCount,
      });
      console.log("퀴즈 점수 기록 결과:", response.data);

      if (response.status === 200) {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error("퀴즈 점수 기록 오류:", error);
    }
  };

  return (
    <AppScreen>
      <Activity>
        <ActivityContent container="quiz" className="pb-10">
          <div className="relative flex w-[1032px] flex-col items-center justify-center gap-7 rounded-2xl bg-white pb-16 pt-24 shadow-lg">
            <p className="absolute right-[80px] top-[50px] text-[80px]">🎉</p>
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
            <p className="text-center text-[20px] font-semibold">
              수고하셨습니다 😊
            </p>
            <div className="mt-4 flex items-center justify-between gap-[60px]">
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
