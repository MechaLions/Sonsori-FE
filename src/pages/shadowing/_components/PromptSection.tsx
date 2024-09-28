import UserAnswerSection from "./UserAnswerSection";
import QuestionSection from "./QuestionSection";

type Question = {
  word_id: number;
  word_text: string;
  sign_url: string;
};

const PromptSection = ({
  questions = [],
  step,
}: {
  questions?: Question[];
  step: number;
}) => {
  console.log("PromptSection:", questions, step);
  console.log("quesitons.length:", questions.length);
  const currentQuestion =
    questions.length > 0 && step > 0 && step <= questions.length
      ? questions[step - 1]
      : { word_text: "문제를 로딩 중입니다...", sign_url: "" };
  return (
    <div className="relative flex w-[1032px] items-center justify-between rounded-2xl bg-white p-1 pb-10 pt-10 shadow-lg">
      {/* 점 세개 */}
      <div className="absolute left-1/2 top-3 flex -translate-x-1/2 transform space-x-1">
        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
      </div>
      {/* 양쪽 콘텐츠 공간*/}
      <div className="flex h-full w-full items-center">
        <div className="flex flex-1 items-center justify-center">
          <QuestionSection
            video={currentQuestion.sign_url}
            question={currentQuestion.word_text}
          />
        </div>
        {/* Divider 선 */}
        <div className="h-[500px] w-[1px] bg-gray-500"></div>
        <div className="flex flex-1 items-center justify-center">
          <UserAnswerSection />
        </div>
      </div>
    </div>
  );
};

export default PromptSection;
