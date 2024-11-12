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
  calculateAccuracy,
}: {
  questions?: Question[];
  step: number;
  calculateAccuracy: (userText: string, wordId: number) => void;
}) => {
  console.log("PromptSection:", questions, step);
  console.log("quesitons.length:", questions.length);
  const currentQuestion =
    questions.length > 0 && step > 0 && step <= questions.length
      ? questions[step - 1]
      : { word_id: 0, word_text: "문제를 로딩 중입니다...", sign_url: "" };
  return (
    <div className="flex w-[1032px] flex-col items-center gap-5 rounded-2xl bg-white pb-8 shadow-shadowBrand">
      {/* 점 세개 */}
      <div className="flex gap-1 pt-3">
        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
      </div>
      {/* 양쪽 콘텐츠 공간*/}
      <div className="flex h-full w-full items-center">
        <div className="flex h-full flex-1 items-center justify-center">
          <QuestionSection
            video={currentQuestion.sign_url}
            question={currentQuestion.word_text}
          />
        </div>
        {/* Divider 선 */}
        <div className="h-[450px] w-[1px] bg-gray-500"></div>
        <div className="flex h-full flex-1 items-center justify-center">
          <UserAnswerSection
            onTranslate={userText =>
              calculateAccuracy(userText, currentQuestion.word_id)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PromptSection;
