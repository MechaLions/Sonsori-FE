import React, { useState, useEffect, useRef } from "react";

import VideoSection from "./_components/VideoSection";
import TextBoxSection from "./_components/TextBoxSection";
import ButtonSection from "./_components/ButtonSection";

const FACING_MODE_ENVIRONMENT = "environment";

const videoConstraints: MediaTrackConstraints = {
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

const TranslatePage: React.FC = () => {
  const [showMainButtons, setShowMainButtons] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const startCamera = () => setIsCameraOn(true);
  const stopCamera = () => setIsCameraOn(false);

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

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [isCameraOn]);

  return (
    <main
      className="translate-background flex w-full flex-col items-center justify-evenly"
      style={{ height: "calc(100vh - 88px)" }}
    >
      <ButtonSection
        showMainButtons={showMainButtons}
        setShowMainButtons={setShowMainButtons}
        startCamera={startCamera}
        stopCamera={stopCamera}
      />
      <VideoSection
        isCameraOn={isCameraOn}
        videoConstraints={videoConstraints}
      />
      <TextBoxSection />
    </main>
  );
};

export default TranslatePage;
