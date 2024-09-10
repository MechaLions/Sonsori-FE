import Webcam from "react-webcam";
import React, { useState } from "react";

import UndoIcon from "@/components/Icons/UndoIcon";
import PlayIcon from "@/components/Icons/PlayIcon";
import PauseIcon from "@/components/Icons/PauseIcon";

interface VideoSectionProps {
  videoConstraints: MediaTrackConstraints;
}

const VideoAnswerSection: React.FC<VideoSectionProps> = ({
  videoConstraints,
}) => {
  const [isCameraOn, setIsCameraOn] = useState(false);

  const startCamera = () => {
    setIsCameraOn(true);
  };

  const stopCamera = () => {
    setIsCameraOn(false);
  };

  return (
    <div className="flex w-[450px] flex-col items-center">
      {/* 카메라 화면 */}
      <div className="bg-gray h-[280px] w-[450px] rounded-lg">
        {isCameraOn ? (
          <Webcam
            id="main-webcam"
            audio={false}
            className="rounded-2xl"
            videoConstraints={videoConstraints}
            style={{
              width: "450px",
              height: "280px",
              objectFit: "cover",
            }}
            mirrored={true} // 좌우반전 제거
          />
        ) : (
          <div className="flex h-[280px] w-[450px] items-center justify-center rounded-lg bg-[#434242]">
            <h1 className="text-center text-[20px] font-semibold text-[#D9D9D9]">
              시작하기를 누르면 번역을 위한 촬영이 시작됩니다.
            </h1>
          </div>
        )}
      </div>

      {/* 아이콘 버튼 */}
      <div className="mt-5 flex gap-[30px]">
        <button onClick={startCamera}>
          <PlayIcon />
        </button>
        <UndoIcon />
        <button onClick={stopCamera}>
          <PauseIcon />
        </button>
      </div>
    </div>
  );
};

export default VideoAnswerSection;