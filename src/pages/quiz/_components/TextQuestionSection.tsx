import React from "react";

interface TextQuestionSectionProps {
  textQuestionChanged: boolean;
  correctText: string;
  translateText: string;
}

const TextQuestionSection: React.FC<TextQuestionSectionProps> = ({
  textQuestionChanged,
  correctText,
  translateText,
}) => {
  return (
    <div className="flex w-[450px] flex-col items-center">
      <p className="pb-8 text-center text-[25px] font-semibold">
        {textQuestionChanged && "정답 영상을 확인하세요."}
      </p>
      <div className="mb-5 flex h-[110px] w-[450px] flex-col rounded-2xl bg-brandLightBlue">
        <p className="font-regular ml-2 mt-2 text-left text-[15px] text-gray-500">
          주어진 단어
        </p>
        <div className="flex h-full justify-center">
          <p className="text-center text-[20px] font-semibold text-brand">
            {correctText}
          </p>
        </div>
      </div>

      <div className="mb-5 flex h-[110px] w-[450px] flex-col rounded-2xl border-[2px] border-brand">
        <p className="font-regular ml-2 mt-2 text-left text-[15px] text-gray-500">
          번역된 단어
        </p>
        <div className="flex h-full justify-center">
          <p className="text-center text-[20px] font-semibold text-black">
            {translateText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextQuestionSection;
