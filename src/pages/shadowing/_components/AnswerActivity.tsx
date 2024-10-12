import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import {
  Activity,
  ActivityContent,
  ActivityHeader,
  ActivityMain,
} from "@/components/Activity";

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
          <ActivityHeader step={step} />
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
