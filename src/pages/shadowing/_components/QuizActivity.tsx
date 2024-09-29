import { useEffect, useState } from "react";
import { Button } from "@ui/components/ui/button";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import ProgressBar from "@/components/ProgressBar";
import {
  Activity,
  ActivityHeader,
  ActivityMain,
  ActivityContent,
} from "@/components/Activity";

import { useShadowingFlow } from "@/utils/shadowing/useShadowingFlow";
import { getID } from "@/utils/handleID";

import PromptSection from "./PromptSection";

import { instance } from "@/api/instance";

type Question = {
  word_id: number;
  word_text: string;
  sign_url: string;
};

type QuizParams = {
  step: number;
  category_id?: number;
};

type Response = {
  word_id: number;
  correct_text: string;
  translated_text: string;
  accuracy: number;
};

const QuizActivity: ActivityComponentType<QuizParams> = ({ params }) => {
  const { step, category_id } = params;
  const [questions, setQuestions] = useState<Question[]>(() => {
    // 컴포넌트가 처음 렌더링될 때 localStorage에서 questions를 불러옴
    const savedQuestions = localStorage.getItem("questions");
    return savedQuestions ? JSON.parse(savedQuestions) : [];
  });

  const { replace } = useShadowingFlow();
  const [accuracyData, setAccuracyData] = useState<Response | null>(null);
  useEffect(() => {
    // 첫 번째 문제일 때만 API 호출
    if (step === 1 && questions.length === 0 && category_id !== null) {
      const fetchQuestions = async () => {
        try {
          const response = await instance.get(
            `/shadowing/${category_id}/words`,
          );
          console.log("문제 로딩 결과:", response);
          if (response.status === 200) {
            setQuestions(response.data); // API 응답으로 questions 배열 설정
            localStorage.setItem("questions", JSON.stringify(response.data)); // localStorage에 저장
          }
        } catch (error) {
          console.error("문제 로딩 중 오류 발생:", error);
        }
      };

      fetchQuestions();
    }
  }, [step, category_id, questions.length]);

  // 사용자의 응답 정확도를 계산하는 함수
  const calculateAccuracy = async (userText: string, wordId: number) => {
    try {
      const userId = getID();
      const response = await instance.post(
        `/shadowing/calculateAccuracy/${userId}/${wordId}`,
        { translated_text: userText },
      );
      console.log("정확도 계산 결과:", response.data);
      if (response.status === 200) {
        setAccuracyData(response.data); // API 응답 데이터 저장
      }
    } catch (error) {
      console.error("정확도 계산 오류:", error);
    }
  };

  const handleClick = () => {
    // accuracydata 있으면 replace 함수 호출
    if (accuracyData) {
      replace(
        "AnswerActivity",
        {
          step: step,
          correct_text: accuracyData.correct_text,
          translated_text: accuracyData.translated_text,
          accuracy: accuracyData.accuracy,
        },
        { animate: false },
      );
    }
  };

  return (
    <AppScreen>
      <Activity>
        <ActivityContent container="shadowing">
          <ActivityHeader step={step} className="relative">
            <ProgressBar percent={step / 10} />
            <Button
              variant="brand"
              className="absolute bottom-[50px] right-[20%]"
              onClick={handleClick}
            >
              결과 확인
            </Button>
          </ActivityHeader>
          <ActivityMain>
            <PromptSection
              questions={questions}
              step={step}
              calculateAccuracy={calculateAccuracy}
            />
            {/* {accuracyData && (
              <AnswerCompareSection
                correctText={accuracyData.correct_text}
                userText={accuracyData.translated_text}
              />
            )} */}
          </ActivityMain>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default QuizActivity;
