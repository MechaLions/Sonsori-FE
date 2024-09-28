import { useState } from "react";

import useVideoStream from "@/hooks/useVideoStream";

import VideoSection from "./_components/VideoSection";
import TextBoxSection from "./_components/TextBoxSection";
import ButtonSection from "./_components/ButtonSection";

const TranslatePage = () => {
  const {
    videoRef,
    canvasRef,
    translateText,
    isCameraOn,
    startVideo,
    stopVideo,
    deleteLastWord,
  } = useVideoStream();
  const [showMainButtons, setShowMainButtons] = useState(true);

  return (
    <main
      className="translate-background flex w-full flex-col items-center justify-evenly"
      style={{ height: "calc(100vh - 78px)" }}
    >
      <ButtonSection
        showMainButtons={showMainButtons}
        setShowMainButtons={setShowMainButtons}
        startCamera={startVideo}
        stopCamera={stopVideo}
        deleteLastWord={deleteLastWord}
      />
      <VideoSection
        isCameraOn={isCameraOn}
        videoRef={videoRef}
        canvasRef={canvasRef}
      />
      <TextBoxSection translateText={translateText} />
    </main>
  );
};

export default TranslatePage;
