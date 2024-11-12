import { Button } from "@ui/components/ui/button";

import QuizIcon from "@/components/Icons/QuizIcon";

import { useQuizFlow } from "@/utils/quiz/useQuizFlow";

import { instance } from "@/api/instance";

interface QuizItem {
  type: string;
  word_id: number;
  correct_text: string;
  sign_url: string;
  options?: string[];
}

const ExplainSection = () => {
  const { push } = useQuizFlow();

  const handleClick = async () => {
    try {
      const response = await instance.get("/quiz");
      if (response.status === 200) {
        const quizData = response.data.quiz;

        // 각 데이터 속성 배열을 따로 만들어 한 번에 상태 업데이트
        const signUrls = quizData.map((d: QuizItem) => d.sign_url);
        const correctTexts = quizData.map((d: QuizItem) => d.correct_text);
        const optionsList = quizData.map((d: QuizItem) => d.options || []);

        console.log("signUrls:", signUrls);
        console.log("correctTexts:", correctTexts);
        console.log("optionsList:", optionsList);

        push(
          "QuizActivity",
          {
            step: 1,
            correctCount: 0,
            signUrls: signUrls,
            correctTexts: correctTexts,
            optionsList: optionsList,
          },
          { animate: false },
        );
      } else {
        throw new Error("API 요청 실패");
      }
    } catch (error) {
      console.error("Error fetching quiz data:", error);
    }
  };

  return (
    <div className="flex h-[630px] w-[1032px] flex-col items-center justify-center rounded-2xl bg-white shadow-shadowBrand">
      <QuizIcon />
      <h1 className="text-[40px] font-bold">수어 퀴즈를 시작합니다.</h1>
      <br />
      <p className="mt-[-15px] text-3xl font-medium">
        꾸준한 도전이 당신의 일상에 변화를 불러올거에요.
      </p>

      <Button variant="brand" className="mt-10 flex" onClick={handleClick}>
        시작하기 🚀
      </Button>
    </div>
  );
};

export default ExplainSection;
