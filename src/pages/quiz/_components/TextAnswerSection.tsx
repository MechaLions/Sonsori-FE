import React, { useState } from "react";
import { Button } from "@ui/components/ui/button";

interface TextAnswerSectionProps {
  onAnswerSelect: (selected: string) => void;
}

const TextAnswerSection: React.FC<TextAnswerSectionProps> = ({
  onAnswerSelect,
}) => {
  const answers = ["감사합니다", "배고파요", "어쩌라고요", "안녕하세요"];
  const correctAnswer = "안녕하세요"; // 정답

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answerStatus, setAnswerStatus] = useState<{
    [key: string]: "correct" | "incorrect" | null;
  }>({});

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
            className={`flex items-center gap-2 border ${
              answerStatus[answer] === "correct"
                ? "border-green-500"
                : answerStatus[answer] === "incorrect"
                  ? "border-red-500"
                  : "border-brandGray"
            }`}
            onClick={() => handleAnswerClick(answer)}
            disabled={selectedAnswer !== null} // 답 선택 후 버튼 비활성화
          >
            {answer}
            {answerStatus[answer] === "correct" && (
              <span className="text-green-500">O</span>
            )}
            {answerStatus[answer] === "incorrect" && (
              <span className="text-red-500">X</span>
            )}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TextAnswerSection;
