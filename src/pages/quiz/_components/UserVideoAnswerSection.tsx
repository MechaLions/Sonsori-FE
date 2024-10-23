import React from "react";

import UndoIcon from "@/components/Icons/UndoIcon";
import PlayIcon from "@/components/Icons/PlayIcon";
import CheckIcon from "@/components/Icons/CheckIcon";

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
  setCorrectness: (value: boolean) => void; // setCorrectness 추가
}

const UserVideoAnswerSection: React.FC<UserVideoAnswerSectionProps> = ({
  videoRef,
  canvasRef,
  isCameraOn,
  startVideo,
  stopVideo,
  deleteLastWord,
  setIsChecked,
  translateText, // translateText 받음
  correctText, // correctText 받음
  setCorrectness, // setCorrectness 받음
}) => {
  const handleCheckClick = () => {
    stopVideo();
    setIsChecked(true);

    // translateText와 correctText 비교
    if (translateText === correctText) {
      setCorrectness(true); // 일치하면 true로 설정
    } else {
      setCorrectness(false); // 일치하지 않으면 false로 설정
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
              className="scale-x-[-1] rounded-2xl object-cover"
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
        <button onClick={startVideo}>
          <PlayIcon />
        </button>
        <button onClick={deleteLastWord}>
          <UndoIcon />
        </button>
        <button
          onClick={handleCheckClick} // 체크 버튼 클릭 시 비교 로직 실행
        >
          <CheckIcon />
        </button>
      </div>
    </div>
  );
};

export default UserVideoAnswerSection;
