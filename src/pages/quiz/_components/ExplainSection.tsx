import { Button } from "@ui/components/ui/button";

import QuizIcon from "@/components/Icons/QuizIcon";

import { useQuizFlow } from "@/utils/quiz/useQuizFlow";

const ExplainSection = () => {
  const { push } = useQuizFlow();

  const handleClick = () => {
    push(
      "QuizActivity",
      {
        step: 1,
      },
      { animate: false },
    );
  };

  return (
    <div className="flex h-[630px] w-[1032px] flex-col items-center justify-center rounded-2xl bg-white shadow-lg">
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
