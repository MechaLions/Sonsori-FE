import io from "socket.io-client";
import { useState, useRef, useEffect } from "react";

const URL = import.meta.env.VITE_SOKET_URL;
const socket = io(URL, { transports: ["polling"] });

const useVideoStream = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [translateText, setTranslateText] = useState<string>("");
  const [count, setCount] = useState(0);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
  const [isCameraOn, setIsCameraOn] = useState(false);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected...!", socket.connected);
    });

    socket.on("result", (data: string) => {
      const cleanedData = data
        .replace(/^\[|\]$/g, "")
        .replace(/^'|'$/g, "")
        .trim();
      setTranslateText(cleanedData);
    });

    socket.on("response_back", (data: string) => {
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
        setTranslateText("번역을 시작합니다.");
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

      socket.disconnect();
    }
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
        socket.emit("image", data);
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

  return {
    videoRef,
    canvasRef,
    translateText,
    isCameraOn,
    startVideo,
    stopVideo,
    deleteLastWord,
  };
};

export default useVideoStream;
