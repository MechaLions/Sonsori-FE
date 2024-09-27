import io from "socket.io-client";
import { useState, useEffect, useRef } from "react";

import TextBoxSection from "./_components/TextBoxSection";
import ButtonSection from "./_components/ButtonSection";

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
      setTranslateText(data);
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
      <div className="group relative flex h-[500px] w-[766px] items-center justify-center rounded-2xl bg-white px-[34px] pb-10 shadow-lg">
        <div className="absolute top-[15px] flex space-x-1">
          <span className="h-2 w-2 rounded-full bg-buttonGray"></span>
          <span className="h-2 w-2 rounded-full bg-buttonGray"></span>
          <span className="h-2 w-2 rounded-full bg-buttonGray"></span>
        </div>

        {isCameraOn ? (
          <div>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="scale-x-[-1]"
            ></video>
            <canvas ref={canvasRef} width={640} height={480}></canvas>
          </div>
        ) : (
          <div className="my-50 flex-center mt-10 flex h-[428px] w-[698px] justify-center rounded-2xl bg-[#434242]">
            <h1 className="mt-[197px] text-center text-[28px] font-semibold text-[#D9D9D9]">
              시작하기를 누르면 번역을 위한 촬영이 시작됩니다.
            </h1>
          </div>
        )}
      </div>
      <TextBoxSection translateText={translateText} />
    </main>
  );
};

export default TranslatePage;

//--------------------------------------------------------

// import React, { useState, useEffect, useRef } from "react";

// import VideoSection from "./_components/VideoSection";
// import TextBoxSection from "./_components/TextBoxSection";
// import ButtonSection from "./_components/ButtonSection";

// const FACING_MODE_ENVIRONMENT = "environment";

// const videoConstraints: MediaTrackConstraints = {
//   facingMode: FACING_MODE_ENVIRONMENT,
//   advanced: [
//     { width: { exact: 2560 }, height: { exact: 1440 } },
//     { width: { exact: 1920 }, height: { exact: 1080 } },
//     { width: { exact: 1280 }, height: { exact: 720 } },
//     { width: { exact: 1024 }, height: { exact: 576 } },
//     { width: { exact: 900 }, height: { exact: 506 } },
//     { width: { exact: 800 }, height: { exact: 450 } },
//     { width: { exact: 640 }, height: { exact: 360 } },
//     { width: { exact: 320 }, height: { exact: 180 } },
//   ],
// };

// const TranslatePage: React.FC = () => {
//   const [showMainButtons, setShowMainButtons] = useState(true);
//   const [isCameraOn, setIsCameraOn] = useState(false);
//   const videoRef = useRef<HTMLVideoElement | null>(null);

//   const startCamera = () => setIsCameraOn(true);
//   const stopCamera = () => setIsCameraOn(false);

//   useEffect(() => {
//     const initCamera = async () => {
//       try {
//         if (isCameraOn) {
//           const stream = await navigator.mediaDevices.getUserMedia({
//             video: true,
//           });
//           if (videoRef.current) {
//             videoRef.current.srcObject = stream;
//           }
//         } else {
//           if (videoRef.current && videoRef.current.srcObject) {
//             const tracks = (
//               videoRef.current.srcObject as MediaStream
//             ).getTracks();
//             tracks.forEach(track => track.stop());
//             videoRef.current.srcObject = null;
//           }
//         }
//       } catch (error) {
//         console.error("카메라 접근 실패:", error);
//       }
//     };

//     initCamera();

//     return () => {
//       if (videoRef.current && videoRef.current.srcObject) {
//         const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
//         tracks.forEach(track => track.stop());
//       }
//     };
//   }, [isCameraOn]);

//   return (
//     <main
//       className="translate-background flex w-full flex-col items-center justify-evenly"
//       style={{ height: "calc(100vh - 78px)" }}
//     >
//       <ButtonSection
//         showMainButtons={showMainButtons}
//         setShowMainButtons={setShowMainButtons}
//         startCamera={startCamera}
//         stopCamera={stopCamera}
//       />
//       <VideoSection
//         isCameraOn={isCameraOn}
//         videoConstraints={videoConstraints}
//       />
//       <TextBoxSection />
//     </main>
//   );
// };

// export default TranslatePage;

//--------------------------------------------------------
