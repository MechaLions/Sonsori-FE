import { ScaleLoader } from "react-spinners";
import { useRef } from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogAction,
  AlertDialogTitle,
} from "@ui/components/ui/alert-dialog";

import MicIcon from "@/components/Icons/MicIcon";

interface MicDialogProps {
  setAudioURL: (url: string) => void;
}

const MicDialog = (props: MicDialogProps) => {
  const { setAudioURL } = props;
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const handleStartRecording = async () => {
    audioChunksRef.current = [];

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);

    mediaRecorderRef.current.ondataavailable = event => {
      audioChunksRef.current.push(event.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, {
        type: "audio/mp3",
      });
      const file = new File([audioBlob], "recording.mp3", {
        type: "audio/mp3",
      });
      const url = URL.createObjectURL(file); // URL 생성
      setAudioURL(url); // QuizActivity에 URL 전달
      console.log(url);
      handleUpload(file); // 녹음 종료 후 자동 업로드
    };

    mediaRecorderRef.current.start();
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
  };

  const handleUpload = async (audioFile: File) => {
    const formData = new FormData();
    formData.append("audio", audioFile);

    // 백엔드에 파일을 업로드하는 API 호출
    try {
      await fetch("YOUR_BACKEND_API_URL", {
        method: "POST",
        body: formData,
      });
      alert("파일이 업로드되었습니다!");
    } catch (error) {
      console.error("파일 업로드 실패:", error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger onClick={handleStartRecording}>
        <MicIcon />
      </AlertDialogTrigger>
      <AlertDialogContent className="flex flex-col items-center justify-center bg-brandLightBlue">
        <AlertDialogTitle className="text-[30px] font-bold">
          녹음 중입니다.
        </AlertDialogTitle>
        <ScaleLoader
          color="#0169F4"
          cssOverride={{}}
          height={60}
          margin={5}
          radius={50}
          speedMultiplier={0.7}
          width={10}
        />
        <AlertDialogAction onClick={handleStopRecording}>
          녹음 종료하기
        </AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default MicDialog;
