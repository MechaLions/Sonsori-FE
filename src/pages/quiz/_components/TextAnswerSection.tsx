import { useState } from "react";
import { Button } from "@ui/components/ui/button";

interface TextAnswerSectionProps {
  onAnswerSelect: (selected: string) => void;
}

const TextAnswerSection = (props: TextAnswerSectionProps) => {
  const { onAnswerSelect } = props;

  const answers = ["감사합니다", "배고파요", "어쩌라고요", "안녕하세요"];
  const correctAnswer = "안녕하세요"; // 정답

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answerStatus, setAnswerStatus] = useState<{
    [key: string]: "correct" | "incorrect" | null;
  }>({});

  const isDisabled = selectedAnswer !== null;

  const handleAnswerClick = (answer: string) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answer);

      if (answer === correctAnswer) {
        setAnswerStatus(prev => ({
          ...prev,
          [answer]: "correct",
        }));
      } else {
        setAnswerStatus(prev => ({
          ...prev,
          [answer]: "incorrect",
        }));
        setAnswerStatus(prev => ({
          ...prev,
          [correctAnswer]: "correct",
        }));
      }

      onAnswerSelect(answer);
    }
  };

  return (
    <div className="flex w-[450px] flex-col items-center">
      <div className="flex flex-col items-center justify-center gap-4">
        {answers.map(answer => (
          <Button
            key={answer}
            variant="quiz"
            size="quizOption"
            className={`flex items-center justify-between border px-4 ${
              answerStatus[answer] === "correct"
                ? "border-brandGreen"
                : answerStatus[answer] === "incorrect"
                  ? "border-brandRed"
                  : "border-brandGray"
            }`}
            onClick={() => handleAnswerClick(answer)}
            disabled={isDisabled} // 답 선택 후 버튼 비활성화
            style={{
              opacity: isDisabled ? 1 : undefined, // 흐림 효과를 없애기 위한 스타일 설정
            }}
          >
            <span className="justify-center text-center">{answer}</span>
            {answerStatus[answer] === "correct" && (
              <span className="text-brandGreen">O</span>
            )}
            {answerStatus[answer] === "incorrect" && (
              <span className="text-brandRed">X</span>
            )}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TextAnswerSection;
