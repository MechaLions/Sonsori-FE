import useVideoStream from "@/hooks/useVideoStream";

import VideoQuestionSection from "./VideoQuestionSection";
import UserVideoAnswerSection from "./UserVideoAnswerSection";
import TextQuestionSection from "./TextQuestionSection";
import TextAnswerSection from "./TextAnswerSection";

interface PromptSectionProps {
  step: number;
  onAnswerSelect: (answer: string) => void;
  setIsChecked: (value: boolean) => void;
  showVideoAnswerSection: boolean;
  textQuestionChanged: boolean;
}

const PromptSection = ({
  step,
  onAnswerSelect,
  setIsChecked,
  showVideoAnswerSection,
  textQuestionChanged,
}: PromptSectionProps) => {
  const {
    videoRef,
    canvasRef,
    // translateText,
    isCameraOn,
    startVideo,
    stopVideo,
    deleteLastWord,
  } = useVideoStream();

  const leftSection =
    step > 5 ? (
      <TextQuestionSection textQuestionChanged={textQuestionChanged} />
    ) : (
      <VideoQuestionSection />
    );

  const rightSection =
    step > 5 ? (
      showVideoAnswerSection ? (
        <VideoQuestionSection />
      ) : (
        <UserVideoAnswerSection
          videoRef={videoRef}
          canvasRef={canvasRef}
          isCameraOn={isCameraOn}
          startVideo={startVideo}
          stopVideo={stopVideo}
          deleteLastWord={deleteLastWord}
          setIsChecked={setIsChecked}
        />
      )
    ) : (
      <TextAnswerSection onAnswerSelect={onAnswerSelect} />
    );

  return (
    <div className="relative flex w-[1032px] items-center justify-between rounded-2xl bg-white p-1 pb-5 pt-7 shadow-lg">
      {/* Dots */}
      <div className="absolute left-1/2 top-3 flex -translate-x-1/2 transform space-x-1">
        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
      </div>

      <div className="flex h-full w-full items-center">
        <div className="flex flex-1 items-center justify-center">
          {leftSection}
        </div>
        {/* Divider */}
        <div className="h-[350px] w-[1px] bg-gray-500"></div>
        <div className="flex h-[450px] flex-1 items-center justify-center">
          {rightSection}
        </div>
      </div>
    </div>
  );
};

export default PromptSection;
