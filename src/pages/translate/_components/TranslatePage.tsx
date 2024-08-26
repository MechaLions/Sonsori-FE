import { useState } from "react";
import { Button } from "@ui/components/ui/button";

const TranslatePage = () => {
  // 보여지는 버튼 set 제어
  const [showMainButtons, setShowMainButtons] = useState(true);

  // 종료 버튼 클릭시 초기 버튼 set으로 되돌리는 함수
  const handleEndClick = () => {
    setShowMainButtons(true);
  };

  return (
    <main
      className="translate-background flex w-full flex-col"
      style={{ height: "calc(100vh - 88px)" }}
    >
      <div className="mt-[70px] flex h-[100px] items-center justify-center gap-[60px]">
        {showMainButtons ? (
          <>
            <div className="group relative">
              <Button
                variant="brand"
                size="default"
                onClick={() => setShowMainButtons(false)}
              >
                시작하기
              </Button>
              <div className="duration-10 absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 transform rounded bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-80">
                시작하기를 누르면 바로 촬영이 시작됩니다.
              </div>
            </div>
            <div className="group relative">
              <Button variant="white" size="default">
                단어 삭제
              </Button>
              <div className="duration-10 absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 transform rounded bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-80">
                번역된 내용 중 마지막 단어가 삭제됩니다.
              </div>
            </div>
          </>
        ) : (
          <div className="flex h-[100px] items-center justify-center gap-[60px]">
            <div className="group relative">
              <Button variant="grey" size="default">
                번역 촬영중
              </Button>
            </div>
            <div className="group relative">
              <Button variant="white" size="default">
                단어 삭제
              </Button>
              <div className="duration-10 absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 transform rounded bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-80">
                번역된 내용 중 마지막 단어가 삭제됩니다.
              </div>
            </div>
            <div className="group relative">
              <Button variant="red" size="default" onClick={handleEndClick}>
                종료하기
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default TranslatePage;
