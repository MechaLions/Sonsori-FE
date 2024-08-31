import { Button } from "@ui/components/ui/button";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import ProgressBar from "@/components/ProgressBar";
import MikeIcon from "@/components/Icons/MikeIcon";

import { usePronunciationFlow } from "@/utils/usePronunciationFlow";

import PropmptSection from "./PromptSection";
import { Activity, ActivityHeader, ActivityContent } from "./Activity";

type QuizParams = {
  step: number;
};

const QuizActivity: ActivityComponentType<QuizParams> = ({ params }) => {
  const { step } = params;

  const { push } = usePronunciationFlow();

  const handleClick = () => {
    push("AnswerActivity", {
      step: 1,
    });
  };

  return (
    <AppScreen>
      <Activity>
        <ActivityContent>
          <ActivityHeader step={step}>
            <ProgressBar percent={step / 10} />
          </ActivityHeader>
          <PropmptSection />
          <div className="relative mb-8 flex h-20 w-[70%] items-center justify-between">
            <div className="absolute left-1/2 -translate-x-1/2 transform">
              <MikeIcon />
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
