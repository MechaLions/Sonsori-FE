import { useEffect } from "react";

interface VideoSectionProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  isCameraOn: boolean;
  startVideo: () => Promise<void>;
  stopVideo: () => void;
}

const VideoSection = (props: VideoSectionProps) => {
  const { videoRef, isCameraOn, startVideo, stopVideo } = props;

  useEffect(() => {
    if (isCameraOn) {
      startVideo().catch(error =>
        console.error("Error starting video:", error),
      );
    } else {
      stopVideo(); // 카메라 중지
    }

    return () => {
      stopVideo(); // 컴포넌트 언마운트 시 카메라 중지
    };
  }, [isCameraOn, startVideo, stopVideo]);

  return (
    <div className="group relative flex h-[500px] w-[766px] items-center justify-center rounded-2xl bg-white px-[34px] pb-10 shadow-lg">
      <div className="absolute top-[15px] flex space-x-1">
        <span className="h-2 w-2 rounded-full bg-buttonGray"></span>
        <span className="h-2 w-2 rounded-full bg-buttonGray"></span>
        <span className="h-2 w-2 rounded-full bg-buttonGray"></span>
      </div>

      {isCameraOn ? (
        <>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="mt-[41px] rounded-2xl"
            style={{
              width: "698px",
              height: "428px",
              objectFit: "cover",
            }}
          ></video>
        </>
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
