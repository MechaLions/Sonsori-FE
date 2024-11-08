import React from "react";

interface QuestionSectionProps {
  video: string;
  question: string;
}

const QuestionSection: React.FC<QuestionSectionProps> = ({
  video,
  question,
}) => {
  return (
    <div className="flex h-full w-[450px] flex-col items-center justify-between">
      {/* 이미지 placeholder */}
      <div className="flex h-[280px] w-[450px] items-center justify-center rounded-lg bg-textboxGray">
        <video
          className="h-full w-full rounded-lg"
          controls
          src={video} // video URL을 src로 사용
        />
      </div>

      {/* 텍스트 박스 placeholder */}
      <div className="flex h-24 w-[450px] items-center justify-center rounded-lg bg-textboxGray">
        <p className="text-center text-2xl font-semibold text-brand">
          {question}
        </p>
      </div>
    </div>
  );
};

export default QuestionSection;
