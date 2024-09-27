import io from "socket.io-client";
import { useState, useEffect, useRef } from "react";

import TextBoxSection from "./_components/TextBoxSection";
import ButtonSection from "./_components/ButtonSection";

import VideoSection from "@/pages/translate/_components/VideoSection";

const socket = io("http://3.39.217.112:8080");

const TranslatePage = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [translateText, setTranslateText] = useState<string>("");
  const [count, setCount] = useState(0);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const [isCameraOn, setIsCameraOn] = useState(false);

  const [showMainButtons, setShowMainButtons] = useState(true);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected...!", socket.connected);
    });

    socket.on("result", (data: string) => {
      console.log("Final Translated Sentence:", data);
      const cleanedData = data
        .replace(/^\[|\]$/g, "")
        .replace(/^'|'$/g, "")
        .trim();

      setTranslateText(cleanedData);
    });

    socket.on("response_back", (data: string) => {
      console.log("Translated Word:", data);
      setTranslateText(data);
    });

    socket.on("delete_back", (data: string) => {
      setTranslateText(data);
    });

    return () => {
      socket.off("connect");
      socket.off("result");
      socket.off("response_back");
      socket.off("delete_back");
    };
  }, []);

  const startVideo = async () => {
    setIsCameraOn(true);
    if (navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        startMessage();
        console.log("Starting translation...");
        sendFrames();
      }
    }
  };

  const stopVideo = () => {
    setTranslateText("");
    setIsCameraOn(false);
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;

      // 소켓 연결 종료
      socket.disconnect();
      console.log("Socket disconnected.");
    }
  };

  const startMessage = () => {
    setTranslateText("번역을 시작합니다.");
  };

  const sendFrames = () => {
    if (count >= 30) {
      clearTimeout(timerId!);
      return;
    }

    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (canvas && video) {
      const context = canvas.getContext("2d");
      if (context) {
        const width = video.videoWidth;
        const height = video.videoHeight;

        context.drawImage(video, 0, 0, width, height);
        const data = canvas.toDataURL("image/jpeg", 0.5);
        context.clearRect(0, 0, width, height);
        socket.emit("image", data); // 서버한테 이미지 보내기
        setCount(count + 1);
      }
    }

    const timer = setTimeout(sendFrames, 300);
    setTimerId(timer);
  };

  const deleteLastWord = () => {
    socket.emit("image", "delete");
    clearTimeout(timerId!);
  };

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
