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

import PromptSection from "./PromptSection";

import { instance } from "@/api/instance";

type Question = {
  word_id: number;
  word_text: string;
  sign_url: string;
};

type QuizParams = {
  step: number;
  category_id: number;
};

const QuizActivity: ActivityComponentType<QuizParams> = ({ params }) => {
  const { step, category_id } = params;
  const [questions, setQuestions] = useState<Question[]>(() => {
    // 컴포넌트가 처음 렌더링될 때 localStorage에서 questions를 불러옴
    const savedQuestions = localStorage.getItem("questions");
    return savedQuestions ? JSON.parse(savedQuestions) : [];
  });

  const { replace } = useShadowingFlow();

  useEffect(() => {
    // 첫 번째 문제일 때만 API 호출
    if (step === 1 && questions.length === 0) {
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

  const handleClick = () => {
    replace(
      "AnswerActivity",
      {
        step: step,
      },
      { animate: false },
    );
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
            <PromptSection questions={questions} step={step} />
          </ActivityMain>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default QuizActivity;
