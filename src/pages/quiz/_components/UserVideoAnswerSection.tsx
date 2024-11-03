import React from "react";
import { Button } from "@ui/components/ui/button";

interface UserVideoAnswerSectionProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  isCameraOn: boolean;
  startVideo: () => void;
  stopVideo: () => void;
  deleteLastWord: () => void;
  setIsChecked: (value: boolean) => void;
  translateText: string; // translateText 추가
  correctText: string; // correctText 추가
  handleCorrectness: (value: boolean) => void; // handleCorrectness 추가
}

const UserVideoAnswerSection: React.FC<UserVideoAnswerSectionProps> = ({
  videoRef,
  canvasRef,
  isCameraOn,
  startVideo,
  stopVideo,
  setIsChecked,
  translateText, // translateText 받음
  correctText, // correctText 받음
  handleCorrectness, // handleCorrectness 받음
}) => {
  const handleCheckClick = () => {
    stopVideo();
    setIsChecked(true);

    // translateText와 correctText 비교
    if (translateText === correctText) {
      handleCorrectness(true); // 일치하면 true로 설정
    } else {
      handleCorrectness(false); // 일치하지 않으면 false로 설정
    }
  };

  return (
    <div className="flex w-[450px] flex-col items-center">
      <div className="bg-gray h-[280px] w-[450px] rounded-lg">
        {isCameraOn ? (
          <div className="flex h-[280px] w-[450px] items-center justify-center">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="scale-x-[-1] rounded-lg object-cover"
              style={{ width: "450px", height: "280px" }}
            ></video>
            <canvas
              ref={canvasRef}
              width={450}
              height={280}
              style={{ display: "none" }}
            ></canvas>
          </div>
        ) : (
          <div className="flex h-[280px] w-[450px] items-center justify-center rounded-lg bg-[#434242]">
            <h1 className="text-center text-[20px] font-semibold text-[#D9D9D9]">
              시작하기를 누르면 번역을 위한 촬영이 시작됩니다.
            </h1>
          </div>
        )}
      </div>

      {/* Icon Buttons */}
      <div className="mt-5 flex gap-[30px]">
        <Button
          variant="brand"
          size="small"
          onClick={startVideo}
          className="py-[8px] text-[13px] font-medium"
        >
          시작하기
        </Button>
        <Button
          variant="quiz"
          size="small"
          onClick={handleCheckClick}
          className="py-[8px] text-[13px]"
        >
          제출하기
        </Button>
      </div>
    </div>
  );
};

export default UserVideoAnswerSection;
