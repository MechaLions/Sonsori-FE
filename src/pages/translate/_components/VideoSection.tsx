import React from "react";

interface VideoSectionProps {
  isCameraOn: boolean;
  videoRef: React.RefObject<HTMLVideoElement>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

const VideoSection = (props: VideoSectionProps) => {
  const { isCameraOn, videoRef, canvasRef } = props;
  return (
    <div className="group relative flex h-[500px] w-[766px] items-center justify-center rounded-2xl bg-white px-[34px] py-10 shadow-lg">
      <div className="absolute top-[15px] flex space-x-1">
        <span className="h-2 w-2 rounded-full bg-buttonGray"></span>
        <span className="h-2 w-2 rounded-full bg-buttonGray"></span>
        <span className="h-2 w-2 rounded-full bg-buttonGray"></span>
      </div>

      {isCameraOn ? (
        <div className="flex h-[428px] w-[698px] items-center justify-center">
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
        <div className="my-50 flex-center flex h-[428px] w-[698px] justify-center rounded-2xl bg-[#434242]">
          <h1 className="mt-[197px] text-center text-[28px] font-semibold text-[#D9D9D9]">
            시작하기를 누르면 번역을 위한 촬영이 시작됩니다.
          </h1>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
