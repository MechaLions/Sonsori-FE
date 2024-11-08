import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import StepNumber from "@/components/StepNumber";
import { Activity, ActivityContent, ActivityMain } from "@/components/Activity";

import AnswerSection from "./AnswerSection";
type AnswerParams = {
  step: number;
  correct_text: string;
  translated_text: string;
  accuracy: number;
};

const AnswerActivity: ActivityComponentType<AnswerParams> = ({ params }) => {
  const { step, correct_text, translated_text, accuracy } = params;

  return (
    <AppScreen>
      <Activity>
        <ActivityContent container="shadowing">
          <StepNumber step={step}></StepNumber>
          <ActivityMain>
            <AnswerSection
              step={step}
              correct_text={correct_text}
              translated_text={translated_text}
              accuracy={accuracy}
            />
          </ActivityMain>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default AnswerActivity;
