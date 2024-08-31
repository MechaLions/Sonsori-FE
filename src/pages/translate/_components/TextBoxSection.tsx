import React from "react";

import StartQuoteIcon from "@/components/Icons/StartQuoteIcon";
import EndQuoteIcon from "@/components/Icons/EndQuoteIcon";

const TextBoxSection: React.FC = () => {
  return (
    <div className="group mt-[57px] flex h-[115px] w-[766px] items-center justify-center rounded-2xl border-[2px] border-brand bg-white p-4 text-center">
      <StartQuoteIcon className="absolute mb-[100px] mr-[830px]" />
      <p className="text-center text-[20px] text-brand">
        번역되는 내용이 여기에 표시됩니다.
      </p>
      <EndQuoteIcon className="absolute mb-[100px] ml-[830px]" />
    </div>
  );
};

export default TextBoxSection;
