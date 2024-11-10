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
  handleCorrectness: (value: boolean) => void;
}

interface QuizItem {
  type: string;
  word_id: number;
  correct_text: string;
  sign_url: string;
  options?: string[];
}

const PromptSection = ({
  step,
  onAnswerSelect,
  setIsChecked,
  showVideoAnswerSection,
  handleCorrectness,
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

  // 10개 전체 문제 데이터
  const [quizData, setQuizData] = useState<string[]>([]);
  const [correctTexts, setCorrectTexts] = useState<string[]>([]);
  const [signUrls, setSignUrls] = useState<string[]>([]);
  const [optionsList, setOptionsList] = useState<string[][]>([]);

  // 하나의 문제 데이터
  const [currentCorrectText, setCurrentCorrectText] = useState("");
  const [currentSignUrl, setCurrentSignUrl] = useState("");
  const [currentOptions, setCurrentOptions] = useState<string[]>([]);

  // API 호출: quiz 데이터 가져오기 (step === 1일 때만)
  useEffect(() => {
    if (step === 1) {
      const fetchQuizData = async () => {
        try {
          const response = await instance.get("/quiz");
          if (response.status === 200) {
            const quizData = response.data.quiz;
            setQuizData(quizData);
            console.log("quizData:", quizData);

            // 각 데이터 속성 배열을 따로 만들어 한 번에 상태 업데이트
            const newSignUrls = quizData.map((d: QuizItem) => d.sign_url);
            const newCorrectTexts = quizData.map(
              (d: QuizItem) => d.correct_text,
            );
            const newOptionsList = quizData.map(
              (d: QuizItem) => d.options || [],
            );

            setSignUrls(newSignUrls);
            setCorrectTexts(newCorrectTexts);
            setOptionsList(newOptionsList);

            console.log("signUrls:", newSignUrls);
            console.log("correctTexts:", newCorrectTexts);
            console.log("optionsList:", newOptionsList);
          } else {
            throw new Error("API 요청 실패");
          }
        } catch (error) {
          console.error("Error fetching quiz data:", error);
        }
      };

      fetchQuizData();
    }
  }, [step]);

  // step 변경 시 해당 step의 데이터를 설정
  useEffect(() => {
    if (quizData.length > 0 && step <= quizData.length) {
      setCurrentSignUrl(signUrls[step - 1] || "");
      setCurrentCorrectText(correctTexts[step - 1] || "");
      setCurrentOptions(optionsList[step - 1] || []);
    }
  }, [step, quizData, signUrls, correctTexts, optionsList]);

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
        correctText={currentCorrectText}
        translateText={translateText}
      />
    ) : (
      <VideoQuestionSection signUrl={currentSignUrl} />
    );

  // 오른쪽 섹션: step에 따른 로직 적용
  const rightSection =
    step > 5 ? (
      showVideoAnswerSection ? (
        <VideoQuestionSection signUrl={currentSignUrl} />
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
          correctText={currentCorrectText} // correctText 전달
          handleCorrectness={handleCorrectness} // handleCorrectness 전달
        />
      )
    ) : (
      <TextAnswerSection
        options={
          currentOptions.length > 0 ? currentOptions : ["옵션이 없습니다."]
        }
        correctAnswer={currentCorrectText}
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
