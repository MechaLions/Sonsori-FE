import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import AnswerSection from "./AnswerSection";
import { Activity, ActivityHeader, ActivityContent } from "./Activity";

type AnswerParams = {
  step: number;
};

const AnswerActivity: ActivityComponentType<AnswerParams> = ({ params }) => {
  const { step } = params;

  return (
    <AppScreen>
      <Activity>
        <ActivityContent>
          <ActivityHeader step={step}></ActivityHeader>
          <AnswerSection step={step} />
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default AnswerActivity;
