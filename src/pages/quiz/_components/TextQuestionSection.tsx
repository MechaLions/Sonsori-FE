import React from "react";

interface TextQuestionSectionProps {
  correctText: string;
  translateText: string;
}

const TextQuestionSection: React.FC<TextQuestionSectionProps> = ({
  correctText,
  translateText,
}) => {
  return (
    <div className="flex w-[450px] flex-col items-center gap-5">
      <div className="relative flex h-[110px] w-[450px] items-center justify-center rounded-2xl bg-brandLightBlue">
        <p className="font-regular absolute left-2 top-2 text-[15px] text-gray-500">
          주어진 단어
        </p>
        <div className="flex h-full items-center">
          <p className="text-center text-[20px] font-semibold text-brand">
            {correctText}
          </p>
        </div>
      </div>

      <div className="relative flex h-[110px] w-[450px] items-center justify-center rounded-2xl border-[2px] border-brand">
        <p className="font-regular absolute left-2 top-2 text-[15px] text-gray-500">
          번역된 단어
        </p>
        <div className="flex h-full items-center">
          <p className="text-center text-xl font-normal text-black">
            {translateText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextQuestionSection;
