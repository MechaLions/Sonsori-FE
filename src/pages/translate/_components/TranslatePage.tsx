import { useState, useRef, useEffect } from "react";
import { Button } from "@ui/components/ui/button";

const TranslatePage = () => {
  // 보여지는 버튼 set 제어
  const [showMainButtons, setShowMainButtons] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 카메라 켜기
  const startCamera = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setIsCameraOn(true);
        }
      } catch (err) {
        console.error("카메라 접근에 실패했습니다:", err);
      }
    }
  };

  // 카메라 끄기
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setIsCameraOn(false);
    }
  };

  useEffect(() => {
    // 컴포넌트가 언마운트될 때 카메라를 끄는 처리
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <main
      className="translate-background flex w-full flex-col items-center"
      style={{ height: "calc(100vh - 88px)" }}
    >
      {/* 버튼 그룹 */}
      <div className="mt-[70px] flex h-[100px] items-center justify-center gap-[60px]">
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
              <Button
                variant="red"
                size="default"
                onClick={() => {
                  setShowMainButtons(true);
                  stopCamera();
                }}
              >
                종료하기
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* 카메라 화면이 들어갈 이미지 박스 */}
      <div className="group relative mt-[30px] flex h-[510px] w-[766px] items-center justify-center rounded-2xl bg-white shadow-lg">
        {/* 작은 점 세개 */}
        <div className="absolute top-[15px] flex space-x-1">
          <span className="h-2 w-2 rounded-full bg-gray-300"></span>
          <span className="h-2 w-2 rounded-full bg-gray-300"></span>
          <span className="h-2 w-2 rounded-full bg-gray-300"></span>
        </div>

        {/* 카메라 영상 */}
        {isCameraOn ? (
          <video
            ref={videoRef}
            autoPlay
            className="h-full w-full rounded-lg"
          ></video>
        ) : (
          <img
            src="https://via.placeholder.com/698x428"
            alt="placeholder"
            className="rounded-lg"
          />
        )}
      </div>

      {/* 텍스트 박스 */}
      <div className="group mt-[57px] flex h-[115px] w-[766px] items-center justify-center rounded-2xl border-[2px] border-brand bg-white p-4 text-center">
        {/* 텍스트 양옆 작은 네모 */}
        <div className="left-[-100px] h-4 w-4 rounded bg-blue-600"></div>
        <p className="text-[20px] text-brand">
          시작하기 버튼을 누르면 번역을 위한 촬영이 시작됩니다.
        </p>
        <div className="right-[-30px] h-4 w-4 rounded bg-blue-600"></div>
      </div>
    </main>
  );
};

export default TranslatePage;
