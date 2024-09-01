import { Button } from "@ui/components/ui/button";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import ProgressBar from "@/components/ProgressBar";

import { usePronunciationFlow } from "@/utils/usePronunciationFlow";

import PropmptSection from "./PromptSection";
import MikeDialog from "./MikeDialog";
import { Activity, ActivityHeader, ActivityContent } from "./Activity";

type QuizParams = {
  step: number;
};

const QuizActivity: ActivityComponentType<QuizParams> = ({ params }) => {
  const { step } = params;

  const { replace } = usePronunciationFlow();

  const handleClick = () => {
    replace(
      "AnswerActivity",
      {
        step: step,
      },
      { animate: false },
    );
  };

  return (
    <AppScreen>
      <Activity>
        <ActivityContent>
          <ActivityHeader step={step}>
            <ProgressBar percent={step / 10} />
          </ActivityHeader>
          <PropmptSection />
          <div className="relative mb-8 flex h-20 w-[70%] items-center">
            <div className="absolute left-1/2 -translate-x-1/2 transform">
              <MikeDialog />
            </div>
            <Button
              variant="brand"
              className="absolute right-0"
              onClick={handleClick}
            >
              결과 확인
            </Button>
          </div>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default QuizActivity;
