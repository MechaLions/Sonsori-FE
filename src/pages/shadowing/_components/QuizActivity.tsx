import { Button } from "@ui/components/ui/button";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import ProgressBar from "@/components/ProgressBar";
import {
  Activity,
  ActivityHeader,
  ActivityMain,
  ActivityContent,
} from "@/components/Activity";

import { useShadowingFlow } from "@/utils/shadowing/useShadowingFlow";

import PropmptSection from "./PromptSection";
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
        <ActivityContent container="shadowing">
          <ActivityHeader step={step} className="relative">
            <ProgressBar percent={step / 10} />
            <Button
              variant="brand"
              className="absolute bottom-[50px] right-[20%]"
              onClick={handleClick}
            >
              결과 확인
            </Button>
          </ActivityHeader>
          <ActivityMain>
            <PropmptSection />
          </ActivityMain>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default QuizActivity;
