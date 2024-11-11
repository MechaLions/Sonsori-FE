import { useEffect } from "react";

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
  handleCorrectness: (value: boolean) => void;
  correctText: string;
  signUrl: string;
  optionList: string[];
}
const PromptSection = (props: PromptSectionProps) => {
  const {
    step,
    onAnswerSelect,
    setIsChecked,
    showVideoAnswerSection,
    handleCorrectness,
    correctText,
    signUrl,
    optionList,
  } = props;
  const {
    videoRef,
    canvasRef,
    translateText,
    isCameraOn,
    startVideo,
    stopVideo,
    deleteLastWord,
  } = useVideoStream();

  console.log("correctText: ", correctText);
  console.log("signUrl: ", signUrl);
  console.log("optionList: ", optionList);

  // translateText localStorage에 저장
  useEffect(() => {
    if (translateText) {
      localStorage.setItem("translateText", translateText);
    }
  }, [translateText]);

  // 왼쪽 섹션: step에 따른 로직 적용
  const leftSection =
    step > 5 ? (
      <TextQuestionSection
        correctText={correctText}
        translateText={translateText}
      />
    ) : (
      <VideoQuestionSection signUrl={signUrl} />
    );

  // 오른쪽 섹션: step에 따른 로직 적용
  const rightSection =
    step > 5 ? (
      showVideoAnswerSection ? (
        <VideoQuestionSection signUrl={signUrl} />
      ) : (
        <UserVideoAnswerSection
          videoRef={videoRef}
          canvasRef={canvasRef}
          isCameraOn={isCameraOn}
          startVideo={startVideo}
          stopVideo={stopVideo}
          deleteLastWord={deleteLastWord}
          setIsChecked={setIsChecked}
          translateText={translateText}
          correctText={correctText} // correctText 전달
          handleCorrectness={handleCorrectness} // handleCorrectness 전달
        />
      )
    ) : (
      <TextAnswerSection
        options={optionList.length > 0 ? optionList : ["옵션이 없습니다."]}
        correctAnswer={correctText}
        onAnswerSelect={onAnswerSelect}
        handleCorrectness={handleCorrectness} // handleCorrectness 전달
      />
    );

  return (
    <div className="flex w-[1032px] flex-col items-center gap-8 rounded-2xl bg-white pb-10 shadow-shadowBrand">
      {/* Dots */}
      <div className="flex gap-1 pt-3">
        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
      </div>

      <div className="flex w-full items-center">
        <div className="flex flex-1 items-center justify-center">
          {leftSection}
        </div>
        {/* Divider */}
        <div className="h-[340px] w-[1px] bg-gray-500"></div>
        <div className="flex flex-1 items-center justify-center">
          {rightSection}
        </div>
      </div>
    </div>
  );
};

export default PromptSection;
