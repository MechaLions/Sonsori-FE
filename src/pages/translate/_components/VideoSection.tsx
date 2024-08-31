import Webcam from "react-webcam";
import React from "react";

interface VideoSectionProps {
  isCameraOn: boolean;
  videoConstraints: MediaTrackConstraints;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  isCameraOn,
  videoConstraints,
}) => {
  return (
    <div className="group relative mt-[30px] flex h-[510px] w-[766px] items-center justify-center rounded-2xl bg-white px-[34px] pb-10 shadow-lg">
      <div className="absolute top-[15px] flex space-x-1">
        <span className="bg-buttonGray h-2 w-2 rounded-full"></span>
        <span className="bg-buttonGray h-2 w-2 rounded-full"></span>
        <span className="bg-buttonGray h-2 w-2 rounded-full"></span>
      </div>

      {isCameraOn ? (
        <Webcam
          id="main-webcam"
          audio={false}
          className="mt-[41px] rounded-2xl"
          videoConstraints={videoConstraints}
          style={{
            width: "698px",
            height: "428px",
            objectFit: "cover",
          }}
        />
      ) : (
        <div className="my-50 flex-center mt-10 flex h-[428px] w-[698px] justify-center rounded-2xl bg-[#434242]">
          <h1 className="mt-[197px] text-center text-[28px] font-semibold text-[#D9D9D9]">
            시작하기를 누르면 번역을 위한 촬영이 시작됩니다.
          </h1>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
