import { ScaleLoader } from "react-spinners";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogAction,
  AlertDialogTitle,
} from "@ui/components/ui/alert-dialog";

import MicIcon from "@/components/Icons/MicIcon";

const MicDialog = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
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
        <AlertDialogAction>녹음 종료하기</AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default MicDialog;
