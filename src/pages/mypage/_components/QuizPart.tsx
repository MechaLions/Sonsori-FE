import { Button } from "@ui/components/ui/button";

import ScoreComponent from "./ScoreComponent";

import { Link } from "@/router";

const QuizPart = () => {
  return (
    <div className="shadow-shadowBrand flex min-h-[558px] w-[29%] flex-col items-center justify-between gap-3 rounded-[30px] bg-white px-24 py-10 text-center leading-tight">
      <h1 className="text-3xl font-bold">수어 퀴즈</h1>
      <div className="text-2xl font-semibold">
        <p>가장 최근 학습 성적</p>
      </div>
      <ScoreComponent />
      <Link to={"/quiz"} className="mt-3">
        <Button variant="brand">수어 퀴즈 바로가기 →</Button>
      </Link>
    </div>
  );
};

export default QuizPart;
