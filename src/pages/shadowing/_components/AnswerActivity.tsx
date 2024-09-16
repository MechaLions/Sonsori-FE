import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import {
  Activity,
  ActivityHeader,
  ActivityContent,
  ActivityMain,
} from "@/components/Activity";

import AnswerSection from "./AnswerSection";
type AnswerParams = {
  step: number;
};

const AnswerActivity: ActivityComponentType<AnswerParams> = ({ params }) => {
  const { step } = params;

  return (
    <AppScreen>
      <Activity>
        <ActivityContent container="shadowing">
          <ActivityHeader step={step}></ActivityHeader>
          <ActivityMain>
            <AnswerSection step={step} />
          </ActivityMain>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default AnswerActivity;
