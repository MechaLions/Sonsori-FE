import React from "react";

import UserAnswerSection from "./UserAnswerSection";
import QuestionSection from "./QuestionSection";

const PromptSection = () => {
  return (
    <div className="relative flex h-[591px] w-[1032px] items-center justify-between rounded-2xl bg-white p-4 shadow-lg">
      {/* 점 세개 */}
      <div className="absolute left-1/2 top-3 flex -translate-x-1/2 transform space-x-1">
        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
      </div>
      {/* 양쪽 콘텐츠 공간*/}
      <div className="flex h-full w-full items-center">
        <div className="flex flex-1 items-center justify-center">
          <QuestionSection />
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
