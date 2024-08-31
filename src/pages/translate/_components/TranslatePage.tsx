import Webcam from "react-webcam";
import { useState, useRef, useEffect } from "react";
import { Button } from "@ui/components/ui/button";

import StartQuoteIcon from "@/components/Icons/StartQuoteIcon";
import EndQuoteIcon from "@/components/Icons/EndQuoteIcon";

const FACING_MODE_ENVIRONMENT = "environment";

const videoConstraints = {
  facingMode: FACING_MODE_ENVIRONMENT,
  advanced: [
    { width: { exact: 2560 }, height: { exact: 1440 } },
    { width: { exact: 1920 }, height: { exact: 1080 } },
    { width: { exact: 1280 }, height: { exact: 720 } },
    { width: { exact: 1024 }, height: { exact: 576 } },
    { width: { exact: 900 }, height: { exact: 506 } },
    { width: { exact: 800 }, height: { exact: 450 } },
    { width: { exact: 640 }, height: { exact: 360 } },
    { width: { exact: 320 }, height: { exact: 180 } },
  ],
};

const TranslatePage = () => {
  // 보여지는 버튼 set 제어
  const [showMainButtons, setShowMainButtons] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const startCamera = () => setIsCameraOn(true);
  const stopCamera = () => setIsCameraOn(false);

  // 카메라 켜기
  useEffect(() => {
    const initCamera = async () => {
      try {
        if (isCameraOn) {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
          });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        } else {
          if (videoRef.current && videoRef.current.srcObject) {
            const tracks = (
              videoRef.current.srcObject as MediaStream
            ).getTracks();
            tracks.forEach(track => track.stop());
            videoRef.current.srcObject = null;
          }
        }
      } catch (error) {
        console.error("카메라 접근 실패:", error);
      }
    };

    initCamera();

    // 컴포넌트가 언마운트될 때 카메라 스트림 해제
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [isCameraOn]);

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
          <div className="flex h-[100px] items-center justify-center gap-[60px]">
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
          </div>
        )}
      </div>

      {/* 카메라 화면이 들어갈 이미지 박스 */}
      <div className="group relative mt-[30px] flex h-[510px] w-[766px] items-center justify-center rounded-2xl bg-white px-[34px] pb-10 shadow-lg">
        {/* 작은 점 세개 */}
        <div className="absolute top-[15px] flex space-x-1">
          <span className="h-2 w-2 rounded-full bg-grey"></span>
          <span className="h-2 w-2 rounded-full bg-grey"></span>
          <span className="h-2 w-2 rounded-full bg-grey"></span>
        </div>

        {/* 카메라 영상 */}
        {isCameraOn ? (
          <Webcam
            id="main-webcam"
            audio={false}
            className="mt-[41px] rounded-2xl"
            videoConstraints={videoConstraints}
            style={{
              width: "698px",
              height: "428px",
              objectFit: "cover", // 비디오가 부모 요소에 맞게 채워지도록 설정
            }}
          />
        ) : (
          <div className="my-50 flex-center mt-10 flex h-[428px] w-[698px] justify-center rounded-2xl bg-[#434242]">
            <h1 className="mt-[197px] text-center text-[28px] font-semibold text-[#D9D9D9]">
              <p>시작하기를 누르면 번역을 위한 촬영이 시작됩니다. </p>
            </h1>
          </div>
        )}
      </div>

      {/* 텍스트 박스 */}
      <div className="group mt-[57px] flex h-[115px] w-[766px] items-center justify-center rounded-2xl border-[2px] border-brand bg-white p-4 text-center">
        {/* 텍스트 양옆 quotation icons */}
        <StartQuoteIcon className="absolute mb-[100px] mr-[830px]" />
        <p className="text-center text-[20px] text-brand">
          번역되는 내용이 여기에 표시됩니다.
        </p>
        <EndQuoteIcon className="absolute mb-[100px] ml-[830px]" />
      </div>
    </main>
  );
};

export default TranslatePage;
