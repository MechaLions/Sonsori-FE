import { useState } from "react";
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

import { usePronunciationFlow } from "@/utils/usePronunciationFlow";

import PropmptSection from "./PromptSection";
import MicDialog from "./MicDialog";

import { usePronunQuizStore } from "@/store/usePronunQuizStore";

type QuizParams = {
  step: number;
};

const QuizActivity: ActivityComponentType<QuizParams> = ({ params }) => {
  const { step } = params;

  const { replace } = usePronunciationFlow();

  const [audioURL, setAudioURL] = useState("");
  const quiz = usePronunQuizStore(state => state.getPronunQuiz(step));

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
        <ActivityContent container="pronunciation">
          <ActivityHeader step={step}>
            <ProgressBar percent={step / 10} />
          </ActivityHeader>
          <ActivityMain>
            <PropmptSection
              voice_text={quiz!.answer_voice}
              origin_text={quiz!.word_text}
            />
            {audioURL && (
              <audio controls className="mt-4">
                <source src={audioURL} type="audio/mp3" />
                Your browser does not support the audio tag.
              </audio>
            )}
            <div className="relative flex h-20 w-[70%] items-center">
              <div className="absolute left-1/2 -translate-x-1/2 transform">
                <MicDialog setAudioURL={setAudioURL} />
              </div>
              <Button
                variant="brand"
                className="absolute right-0"
                onClick={handleClick}
              >
                결과 확인
              </Button>
            </div>
          </ActivityMain>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default QuizActivity;
