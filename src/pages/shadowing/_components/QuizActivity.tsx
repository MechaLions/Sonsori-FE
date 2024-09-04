import { Button } from "@ui/components/ui/button";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import ProgressBar from "@/components/ProgressBar";

import { useShadowingFlow } from "@/utils/shadowing/useShadowingFlow";

import PropmptSection from "./PromptSection";
import { Activity, ActivityHeader, ActivityContent } from "./Activity";

type QuizParams = {
  step: number;
};

const QuizActivity: ActivityComponentType<QuizParams> = ({ params }) => {
  const { step } = params;

  const { replace } = useShadowingFlow();

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
            <div className="relative flex h-20 w-[70%] items-center">
              <Button
                variant="brand"
                className="absolute right-[-150px] mb-[250px]"
                onClick={handleClick}
              >
                결과 확인
              </Button>
            </div>
          </ActivityHeader>
          <div className="mt-[-50px] justify-evenly">
            <PropmptSection />
          </div>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default QuizActivity;
