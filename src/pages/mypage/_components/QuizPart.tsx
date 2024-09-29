import { Button } from "@ui/components/ui/button";

import ScoreComponent from "./ScoreComponent";

import { Link } from "@/router";

interface QuizPartProps {
  correctNumber: number;
}

const QuizPart = (props: QuizPartProps) => {
  const { correctNumber } = props;

  return (
    <div className="flex min-h-[478px] w-[400px] flex-col items-center justify-between gap-3 rounded-[30px] bg-white py-10 text-center leading-tight shadow-shadowBrand">
      <h1 className="text-3xl font-bold">수어 퀴즈</h1>
      <div className="text-2xl font-semibold">
        <p>가장 최근 학습 성적</p>
      </div>
      <ScoreComponent correctNumber={correctNumber} />
      <Link to={"/quiz"} className="mt-3">
        <Button variant="brand">수어 퀴즈 바로가기 →</Button>
      </Link>
    </div>
  );
};

export default QuizPart;
