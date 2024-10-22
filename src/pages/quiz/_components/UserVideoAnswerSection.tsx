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
}

const UserVideoAnswerSection: React.FC<UserVideoAnswerSectionProps> = ({
  videoRef,
  canvasRef,
  isCameraOn,
  startVideo,
  stopVideo,
  deleteLastWord,
  setIsChecked,
}) => {
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
          onClick={() => {
            stopVideo();
            setIsChecked(true);
          }}
        >
          <CheckIcon />
        </button>
      </div>
    </div>
  );
};

export default UserVideoAnswerSection;
