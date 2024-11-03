import React from "react";

import ButtonSection from "./ButtonSection";

interface VideoSectionProps {
  isCameraOn: boolean;
  videoRef: React.RefObject<HTMLVideoElement>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  showMainButtons: boolean;
  startCamera: () => void;
  stopCamera: () => void;
  setShowMainButtons: (value: boolean) => void;
  deleteLastWord: () => void;
}

const VideoSection = (props: VideoSectionProps) => {
  const {
    isCameraOn,
    videoRef,
    canvasRef,
    showMainButtons,
    startCamera,
    stopCamera,
    setShowMainButtons,
    deleteLastWord,
  } = props;
  return (
    <div className="flex w-[766px] flex-col items-center gap-4 rounded-2xl bg-white pb-6 shadow-lg">
      <div className="flex gap-1 pt-3">
        <span className="h-2 w-2 rounded-full bg-buttonGray"></span>
        <span className="h-2 w-2 rounded-full bg-buttonGray"></span>
        <span className="h-2 w-2 rounded-full bg-buttonGray"></span>
      </div>
      {isCameraOn ? (
        <div className="flex items-center justify-center">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="scale-x-[-1] rounded-2xl object-cover"
            style={{ width: "698px", height: "428px" }}
          ></video>
          <canvas
            ref={canvasRef}
            width={698}
            height={428}
            style={{ display: "none" }}
          ></canvas>
        </div>
      ) : (
        <div className="flex-center flex min-h-[428px] w-[698px] items-center justify-center rounded-2xl bg-[#434242]">
          <h1 className="text-[28px] font-semibold text-[#D9D9D9]">
            시작하기를 누르면 번역을 위한 촬영이 시작됩니다.
          </h1>
        </div>
      )}
      <ButtonSection
        showMainButtons={showMainButtons}
        setShowMainButtons={setShowMainButtons}
        startCamera={startCamera}
        stopCamera={stopCamera}
        deleteLastWord={deleteLastWord}
      />
    </div>
  );
};

export default VideoSection;
