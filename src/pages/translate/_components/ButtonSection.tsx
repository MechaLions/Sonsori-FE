import React from "react";
import { Button } from "@ui/components/ui/button";

interface ButtonSectionProps {
  showMainButtons: boolean;
  startCamera: () => void;
  stopCamera: () => void;
  setShowMainButtons: (value: boolean) => void;
}

const ButtonSection: React.FC<ButtonSectionProps> = ({
  showMainButtons,
  startCamera,
  stopCamera,
  setShowMainButtons,
}) => {
  return (
    <div className="flex h-[100px] items-center justify-center justify-between gap-[60px]">
      {showMainButtons ? (
        <>
          <div className="group relative">
            <Button
              variant="brand"
              size="default"
              onClick={() => {
                setShowMainButtons(false);
                startCamera();
              }}
            >
              시작하기
            </Button>
            <div className="duration-10 absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 transform rounded bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-80">
              시작하기를 누르면 바로 촬영이 시작됩니다.
            </div>
          </div>
          <div className="group relative">
            <Button
              variant="brand"
              size="default"
              className="bg-white text-black"
            >
              단어 삭제
            </Button>
            <div className="duration-10 absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 transform rounded bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-80">
              번역된 내용 중 마지막 단어가 삭제됩니다.
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="group relative">
            <Button
              variant="brand"
              size="default"
              className="bg-buttonGray text-white"
            >
              번역 촬영중
            </Button>
          </div>
          <div className="group relative">
            <Button
              variant="brand"
              size="default"
              className="bg-white text-black"
            >
              단어 삭제
            </Button>
            <div className="duration-10 absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 transform rounded bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-80">
              번역된 내용 중 마지막 단어가 삭제됩니다.
            </div>
          </div>
          <div className="group relative">
            <Button
              variant="brand"
              size="default"
              className="bg-brandRed text-white"
              onClick={() => {
                setShowMainButtons(true);
                stopCamera();
              }}
            >
              종료하기
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ButtonSection;
