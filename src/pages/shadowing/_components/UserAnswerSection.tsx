import io from "socket.io-client";
import { useEffect, useState, useRef } from "react";

// 서버 소켓 연결
const socket = io("http://3.39.217.112:8080");

import UndoIcon from "@/components/Icons/UndoIcon";
import PlayIcon from "@/components/Icons/PlayIcon";
import PauseIcon from "@/components/Icons/PauseIcon";

const UserAnswerSection = () => {
  const [isCameraOn, setIsCameraOn] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [translateText, setTranslateText] = useState<string>(
    "번역되는 내용이 여기에 표시됩니다.",
  ); // 기본값 설정
  const [count, setCount] = useState(0);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // 소켓 연결 및 이벤트 리스너 설정
    socket.on("connect", () => {
      console.log("소켓 서버에 연결되었습니다.");
    });

    socket.on("result", (data: string) => {
      console.log("최종 번역 결과:", data);
      setTranslateText(data);
    });

    socket.on("response_back", (data: string) => {
      console.log("번역된 단어:", data);
      setTranslateText(data);
    });

    socket.on("delete_back", (data: string) => {
      console.log("삭제 응답:", data);
      setTranslateText(""); // 삭제 시 번역 텍스트 지우기
    });

    return () => {
      // 컴포넌트 언마운트 시 소켓 리스너 정리
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
        console.log("번역을 시작합니다...");
        sendFrames(); // 서버로 프레임 전송 시작
      }
    }
  };

  const stopVideo = () => {
    setTranslateText(""); // 비디오 정지 시 텍스트 지우기
    setIsCameraOn(false);
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      console.log("비디오가 중지되었습니다.");
    }
  };

  const deleteLastWord = () => {
    socket.emit("image", "delete"); // 서버에 삭제 요청
    clearTimeout(timerId!);
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
        context.drawImage(video, 0, 0, width, height); // 비디오 프레임 캡처
        const data = canvas.toDataURL("image/jpeg", 0.5); // JPEG 형식으로 변환
        context.clearRect(0, 0, width, height); // 캔버스 클리어
        socket.emit("image", data); // 서버에 이미지 전송
        setCount(count + 1); // 카운트 증가
      }
    }
    const timer = setTimeout(sendFrames, 300); // 300ms 간격으로 프레임 전송
    setTimerId(timer);
  };

  return (
    <div className="flex w-[450px] flex-col items-center">
      {/* 카메라 화면 */}
      <div className="bg-gray h-[280px] w-[450px] rounded-lg">
        {isCameraOn ? (
          <div>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="scale-x-[-1] rounded-2xl object-cover" // 좌우 반전
              style={{ height: "280px", width: "450px" }}
            ></video>
            <canvas ref={canvasRef} width={640} height={480}></canvas>
          </div>
        ) : (
          <div className="flex h-[280px] w-[450px] items-center justify-center rounded-lg bg-[#434242]">
            <h1 className="text-center text-[20px] font-semibold text-[#D9D9D9]">
              시작하기를 누르면 번역을 위한 촬영이 시작됩니다.
            </h1>
          </div>
        )}
      </div>

      {/* 아이콘 버튼 */}
      <div className="mt-5 flex gap-[30px]">
        <button onClick={startVideo}>
          <PlayIcon />
        </button>
        <button onClick={deleteLastWord}>
          <UndoIcon />
        </button>
        <button onClick={stopVideo}>
          <PauseIcon />
        </button>
      </div>

      {/* 텍스트 박스 */}
      <div className="mt-4 flex h-[160px] w-[450px] items-center justify-center rounded-lg bg-textboxGray">
        <p className="text-center text-[15px] font-semibold text-brandDarkGray">
          {translateText}
        </p>
      </div>
    </div>
  );
};

export default UserAnswerSection;
