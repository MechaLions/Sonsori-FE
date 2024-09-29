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
  setAudioFile: (file: File | null) => void;
}

const MicDialog = (props: MicDialogProps) => {
  const { setAudioFile } = props;
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const handleStartRecording = async () => {
    setAudioFile(null);
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
      setAudioFile(file);
    };

    mediaRecorderRef.current.start();
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
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
