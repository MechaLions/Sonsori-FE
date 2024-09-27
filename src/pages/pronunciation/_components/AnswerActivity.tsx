import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import {
  Activity,
  ActivityHeader,
  ActivityContent,
  ActivityMain,
} from "@/components/Activity";

import { PronunQuizItem } from "@/types/pronunciationType";

import AnswerSection from "./AnswerSection";
type AnswerParams = {
  step: number;
  quizList: PronunQuizItem[];
};

const AnswerActivity: ActivityComponentType<AnswerParams> = ({ params }) => {
  const { step, quizList } = params;

  return (
    <AppScreen>
      <Activity>
        <ActivityContent container="pronunciation">
          <ActivityHeader step={step}></ActivityHeader>
          <ActivityMain>
            <AnswerSection step={step} quizList={quizList} />
          </ActivityMain>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default AnswerActivity;
