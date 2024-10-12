import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import {
  Activity,
  ActivityContent,
  ActivityHeader,
  ActivityMain,
} from "@/components/Activity";

import { ShadowingAccuracyResponse } from "@/types/shadowingType";

import AnswerSection from "./AnswerSection";

type AnswerParams = {
  step: number;
  response: ShadowingAccuracyResponse;
};

const AnswerActivity: ActivityComponentType<AnswerParams> = ({ params }) => {
  const { step, response } = params;

  return (
    <AppScreen>
      <Activity>
        <ActivityContent container="shadowing">
          <ActivityHeader step={step}></ActivityHeader>
          <ActivityMain>
            <AnswerSection step={step} response={response} />
          </ActivityMain>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default AnswerActivity;
