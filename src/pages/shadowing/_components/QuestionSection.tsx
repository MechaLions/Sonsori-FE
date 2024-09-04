import React from "react";

import ReplayIcon from "@/components/Icons/ReplayIcon";

const QuestionSection = () => {
  return (
    <div className="flex w-[450px] flex-col items-center">
      {/* 이미지 placeholder */}
      <div className="bg-textboxGray flex h-[280px] w-[450px] items-center justify-center rounded-lg">
        <p className="text-center text-[30px] font-semibold text-brand">
          문제 수어 영상
        </p>
      </div>
      {/* 다시하기 아이콘 placeholder */}
      <div className="mt-2 flex gap-[30px] space-x-2">
        <ReplayIcon />
      </div>

      {/* 텍스트 박스 placeholder */}
      <div className="bg-textboxGray mt-4 flex h-[160px] w-[450px] items-center justify-center rounded-lg">
        <p className="text-center text-[30px] font-semibold text-brand">
          밥 먹었어?
        </p>
      </div>
    </div>
  );
};

export default QuestionSection;
