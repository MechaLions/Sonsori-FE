import UserAnswerSection from "./UserAnswerSection";
import QuestionSection from "./QuestionSection";

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

const PromptSection = () => {
  return (
    <div className="relative flex w-[1032px] items-center justify-between rounded-2xl bg-white p-1 pb-10 pt-10 shadow-lg">
      {/* 점 세개 */}
      <div className="absolute left-1/2 top-3 flex -translate-x-1/2 transform space-x-1">
        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
      </div>
      {/* 양쪽 콘텐츠 공간*/}
      <div className="flex h-full w-full items-center">
        <div className="flex flex-1 items-center justify-center">
          <QuestionSection />
        </div>
        {/* Divider 선 */}
        <div className="h-[500px] w-[1px] bg-gray-500"></div>
        <div className="flex flex-1 items-center justify-center">
          <UserAnswerSection videoConstraints={videoConstraints} />
        </div>
      </div>
    </div>
  );
};

export default PromptSection;
