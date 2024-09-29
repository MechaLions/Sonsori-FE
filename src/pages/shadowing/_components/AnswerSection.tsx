import { startTransition, useEffect, useState } from "react";
import { Button } from "@ui/components/ui/button";
import { useStack } from "@stackflow/react";

import DoughnutChart from "@/components/DoughnutChart";

import { useShadowingFlow } from "@/utils/shadowing/useShadowingFlow";
import { getID } from "@/utils/handleID"; // getID 함수 import

import AnswerCompareSection from "./AnswerCompareSection";

import { instance } from "@/api/instance"; // API 인스턴스 import

interface AnswerSectionProps {
  step: number;
  wordId: number; // wordId를 추가하여 정확도 계산에 사용
  translatedText: string; // 번역된 텍스트 추가
  category_id: number; // 카테고리 ID 추가
}

const AnswerSection = (props: AnswerSectionProps) => {
  const { step, wordId, translatedText, category_id } = props;

  const { pop, replace } = useShadowingFlow();
  const stack = useStack();
  let popCounts = stack.activities.length;

  const [accuracy, setAccuracy] = useState<number | null>(null); // 정확도 상태 추가
  const [correctText, setCorrectText] = useState<string | null>(null); // 정답 텍스트 상태 추가

  // 정확도 계산을 위한 useEffect 추가
  useEffect(() => {
    const calculateAccuracy = async () => {
      const userID = getID(); // userID 가져오기
      console.log("가져온 userID:", userID); // userID가 제대로 가져와지는지 확인

      if (!userID) {
        console.error("사용자 ID가 없습니다.");
        return;
      }

      try {
        const response = await instance.post(
          `/shadowing/calculateAccuracy/${userID}/${wordId}`, // userID 사용
          {
            translated_text: translatedText,
          },
        );
        console.log("정확도 계산 결과:", response.data);
        setAccuracy(response.data.accuracy); // 정확도 값 설정
        setCorrectText(response.data.correct_text); // 정답 텍스트 설정
      } catch (error) {
        console.error("정확도 계산 오류:", error);
      }
    };

    if (wordId && translatedText) {
      calculateAccuracy();
    }
  }, [wordId, translatedText]);

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
        category_id: category_id,
      },
      { animate: false },
    );
  };

  const handleOnMore = () => {
    replace(
      "QuizActivity",
      {
        step: step,
        category_id: category_id,
      },
      { animate: false },
    );
  };

  return (
    <section className="mb-10 flex w-[70%] flex-col items-center justify-center gap-[70px] rounded-[20px] bg-white py-10 shadow-shadowBrand">
      <h1 className="mt-4 text-4xl font-bold">정확도 100%를 도전해보세요!</h1>
      <section className="flex w-full items-center justify-center gap-[100px]">
        <div className="flex flex-col items-center gap-5">
          <DoughnutChart
            percent={accuracy !== null ? accuracy / 100 : 0.82}
            size="150px"
          />
          <div className="text-[25px] font-bold">
            {/* API에서 받은 정확도 표시 */}
            <p>정확도: {accuracy !== null ? `${accuracy}%` : "계산 중..."}</p>
          </div>
        </div>
        <AnswerCompareSection
          correctText={correctText !== null ? correctText : ""} // null일 때 빈 문자열로 대체
          userText={translatedText}
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
