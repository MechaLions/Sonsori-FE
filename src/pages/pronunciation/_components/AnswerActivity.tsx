import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import {
  Activity,
  ActivityHeader,
  ActivityContent,
  ActivityMain,
} from "@/components/Activity";

import { PronunAccuracyResponse } from "@/types/pronunciationType";

import AnswerSection from "./AnswerSection";
type AnswerParams = {
  step: number;
  response: PronunAccuracyResponse;
};

const AnswerActivity: ActivityComponentType<AnswerParams> = ({ params }) => {
  const { step, response } = params;

  return (
    <AppScreen>
      <Activity>
        <ActivityContent container="pronunciation">
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
