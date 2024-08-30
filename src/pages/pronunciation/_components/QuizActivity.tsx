import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

type QuizParams = {
  step: number;
};

const QuizActivity: ActivityComponentType<QuizParams> = ({ params }) => {
  const { step } = params;

  return (
    <AppScreen>
      <main className="h-full w-full">
        <h1 className="flex h-full w-full items-center justify-center text-[100px] font-bold">
          <p className="text-brandRed">{step}</p>
          <p>QuizActivity</p>
        </h1>
      </main>
    </AppScreen>
  );
};

export default QuizActivity;
