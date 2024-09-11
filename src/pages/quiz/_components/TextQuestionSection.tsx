import React from "react";

interface TextQuestionSectionProps {
  textQuestionChanged: boolean;
}

const TextQuestionSection: React.FC<TextQuestionSectionProps> = ({
  textQuestionChanged,
}) => {
  return (
    <div className="flex w-[450px] flex-col items-center">
      <p className="pb-8 text-center text-[25px] font-semibold">
        {textQuestionChanged
          ? "정답 영상을 확인하세요."
          : "다시하기 버튼으로 다시 시작합니다."}
      </p>
      <div className="mb-5 flex h-[200px] w-[450px] items-center justify-center rounded-2xl bg-brandLightBlue">
        <p className="text-center text-[30px] font-semibold text-brand">
          감사합니다
        </p>
      </div>
    </div>
  );
};

export default TextQuestionSection;
