import { useEffect, useState } from "react";

import useVideoStream from "@/hooks/useVideoStream";

import VideoQuestionSection from "./VideoQuestionSection";
import UserVideoAnswerSection from "./UserVideoAnswerSection";
import TextQuestionSection from "./TextQuestionSection";
import TextAnswerSection from "./TextAnswerSection";

import { instance } from "@/api/instance";

interface PromptSectionProps {
  step: number;
  onAnswerSelect: (answer: string) => void;
  setIsChecked: (value: boolean) => void;
  showVideoAnswerSection: boolean;
  textQuestionChanged: boolean;
  correctCount: number; // correctCount를 받아옴
  handleCorrectCount: (count: number) => void; // handleCorrectCount 추가
}

const PromptSection = ({
  step,
  onAnswerSelect,
  setIsChecked,
  showVideoAnswerSection,
  textQuestionChanged,
  correctCount,
  handleCorrectCount, // handleCorrectCount 파라미터로 받음
}: PromptSectionProps) => {
  const {
    videoRef,
    canvasRef,
    translateText,
    isCameraOn,
    startVideo,
    stopVideo,
    deleteLastWord,
  } = useVideoStream();

  const [correctText, setCorrectText] = useState("");
  const [signUrl, setSignUrl] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [correctness, setCorrectness] = useState<boolean | undefined>(
    undefined,
  );

  // API 호출: quiz 데이터 가져오기
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await instance.get("/quiz");
        if (response.status === 200) {
          const data = response.data.quiz[step - 1]; // step에 맞는 데이터 선택

          // API 응답에 따라 상태 업데이트
          setCorrectText(data.correct_text);
          setSignUrl(data.sign_url);
          setOptions(data.options || []);
          setCorrectAnswer(data.correct_text);
        } else {
          throw new Error("API 요청 실패");
        }
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };

    fetchQuizData();
  }, [step]);

  // translateText localStorage에 저장
  useEffect(() => {
    if (translateText) {
      localStorage.setItem("translateText", translateText);
    }
  }, [translateText]);

  // correctness에 따라 handleCorrectCount 호출
  const handleCorrectness = (isCorrect: boolean) => {
    if (isCorrect) {
      handleCorrectCount(correctCount + 1);
    }
    setCorrectness(isCorrect);
  };

  // 왼쪽 섹션: step에 따른 로직 적용
  const leftSection =
    step > 5 ? (
      <TextQuestionSection
        textQuestionChanged={textQuestionChanged}
        correctText={correctText}
      />
    ) : (
      <VideoQuestionSection signUrl={signUrl} />
    );

  // 오른쪽 섹션: step에 따른 로직 적용
  const rightSection =
    step > 5 ? (
      showVideoAnswerSection ? (
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
          setCorrectness={handleCorrectness} // handleCorrectness 전달
        />
      ) : (
        <TextAnswerSection
          options={options.length > 0 ? options : ["옵션이 없습니다."]}
          correctAnswer={correctAnswer}
          onAnswerSelect={onAnswerSelect}
          setCorrectness={handleCorrectness} // handleCorrectness 전달
        />
      )
    ) : (
      <TextAnswerSection
        options={options.length > 0 ? options : ["옵션이 없습니다."]}
        correctAnswer={correctAnswer}
        onAnswerSelect={onAnswerSelect}
        setCorrectness={handleCorrectness} // handleCorrectness 전달
      />
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
