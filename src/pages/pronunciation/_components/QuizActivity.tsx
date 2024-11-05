import { useState } from "react";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import StepNumber from "@/components/StepNumber";
import NextStepButton from "@/components/NextStepButton";
import { Activity, ActivityMain, ActivityContent } from "@/components/Activity";

import { useMutationPronunAccuracy } from "@/hooks/mutations/useMutationPronunAccuracy";

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
  const mutation = useMutationPronunAccuracy();

  const [audioFile, setAudioFile] = useState<File | null>(null);

  const quiz = usePronunQuizStore(state => state.getPronunQuiz(step));
  if (!quiz) {
    return <div>Loading quiz data...</div>;
  }

  const handleClick = async () => {
    mutation.mutate(
      {
        word_id: quiz.word_id,
        audio_file: audioFile!,
      },
      {
        onSuccess: response => {
          replace(
            "AnswerActivity",
            {
              step: step,
              response: response,
            },
            { animate: false },
          );
          setAudioFile(null);
        },
        onError: () => {
          alert("녹음을 다시 한번 진행해 주세요.");
          setAudioFile(null);
        },
      },
    );
  };

  return (
    <AppScreen>
      <Activity>
        <ActivityContent container="pronunciation">
          <StepNumber step={step}>
            <h1 className="text-center text-2xl font-medium text-brandDarkGray">
              학습할 문장과 발음 텍스트를 확인하고, 녹음 버튼을 누르고 녹음을
              완료해주세요.
            </h1>
          </StepNumber>
          <ActivityMain>
            <PropmptSection
              voice_text={quiz.answer_voice}
              origin_text={quiz.word_text}
            />
            <div className="relative flex h-20 w-[70%] items-center">
              <div className="absolute left-1/2 -translate-x-1/2 transform">
                <MicDialog setAudioFile={setAudioFile} />
              </div>
              <NextStepButton
                className="absolute right-0"
                handleClick={handleClick}
                disabled={!audioFile}
                isLoading={mutation.isPending}
              />
            </div>
          </ActivityMain>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default QuizActivity;
