import VideoQuestionSection from "./VideoQuestionSection";
import VideoAnswerSection from "./VideoAnswerSection";
import TextQuestionSection from "./TextQuestionSection";
import TextAnswerSection from "./TextAnswerSection";

const FACING_MODE_ENVIRONMENT = "environment";

const videoConstraints: MediaTrackConstraints = {
  facingMode: FACING_MODE_ENVIRONMENT,
  advanced: [
    { width: { exact: 2560 }, height: { exact: 1440 } },
    { width: { exact: 1920 }, height: { exact: 1080 } },
    { width: { exact: 1280 }, height: { exact: 720 } },
    { width: { exact: 1024 }, height: { exact: 576 } },
    { width: { exact: 900 }, height: { exact: 506 } },
    { width: { exact: 800 }, height: { exact: 450 } },
    { width: { exact: 640 }, height: { exact: 360 } },
    { width: { exact: 320 }, height: { exact: 180 } },
  ],
};

interface PromptSectionProps {
  step: number;
  onAnswerSelect: (answer: string) => void; // answer 선택 핸들러 전달
}

const PromptSection = ({ step, onAnswerSelect }: PromptSectionProps) => {
  return (
    <div className="relative mt-10 flex w-[1032px] items-center justify-between rounded-2xl bg-white p-1 pb-5 pt-7 shadow-lg">
      {/* 점 세개 */}
      <div className="absolute left-1/2 top-3 flex -translate-x-1/2 transform space-x-1">
        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
      </div>

      {step > 5 ? (
        <div className="flex h-full w-full items-center">
          <div className="flex flex-1 items-center justify-center">
            <TextQuestionSection />
          </div>
          {/* Divider 선 */}
          <div className="h-[350px] w-[1px] bg-gray-500"></div>
          <div className="flex h-[450px] flex-1 items-center justify-center">
            <VideoAnswerSection videoConstraints={videoConstraints} />
          </div>
        </div>
      ) : (
        <div className="flex h-full w-full items-center">
          <div className="flex flex-1 items-center justify-center">
            <VideoQuestionSection />
          </div>
          {/* Divider 선 */}
          <div className="h-[350px] w-[1px] bg-gray-500"></div>
          <div className="flex h-[450px] flex-1 items-center justify-center">
            {/* TextAnswerSection이 PromptSection 내에 있음 */}
            <TextAnswerSection onAnswerSelect={onAnswerSelect} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PromptSection;
