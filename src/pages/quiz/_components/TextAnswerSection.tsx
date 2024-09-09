import React, { useState } from "react";
import { Button } from "@ui/components/ui/button";

interface TextAnswerSectionProps {
  onAnswerSelect: (selected: string) => void;
}

const TextAnswerSection: React.FC<TextAnswerSectionProps> = ({
  onAnswerSelect,
}) => {
  const answers = ["감사합니다", "배고파요", "어쩌라고요", "안녕하세요"];

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    onAnswerSelect(answer);
  };

  return (
    <div className="flex w-[450px] flex-col items-center">
      <div className="flex flex-col items-center justify-center gap-4">
        {answers.map(answer => (
          <Button
            key={answer}
            variant="quiz"
            size="quizOption"
            className={`border ${
              selectedAnswer === answer ? "border-brand" : "border-brandGray"
            }`}
            onClick={() => handleAnswerClick(answer)}
          >
            {answer}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TextAnswerSection;
