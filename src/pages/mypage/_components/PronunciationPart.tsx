import { Button } from "@ui/components/ui/button";

import DoughnutChart from "@/components/DoughnutChart";

import NoLearningComponent from "./NoLearningComponent";

import { Link } from "@/router";

interface PronunciationPartProps {
  pronunName: string;
  pronunAvg: number;
}

const PronunciationPart = (props: PronunciationPartProps) => {
  const { pronunName, pronunAvg } = props;
  return (
    <div className="flex min-h-[478px] w-[400px] flex-col items-center justify-between gap-3 rounded-[30px] bg-white py-10 text-center leading-tight shadow-shadowBrand">
      <h1 className="text-3xl font-bold">발음 교정</h1>
      {pronunName === null ? (
        <NoLearningComponent />
      ) : (
        <>
          <div className="text-2xl font-semibold">
            <p className="inline-block text-brand">{pronunName}&nbsp;</p>
            <p className="inline-block">카테고리를</p>
            <p>가장 최근에 학습했어요.</p>
          </div>
          <div className="flex flex-col gap-3">
            <DoughnutChart percent={pronunAvg / 100} />
            <div className="text-2xl font-bold">
              <p>평균 정확도</p>
              <p className="text-brand">{pronunAvg}%</p>
            </div>
          </div>
        </>
      )}
      <Link to={"/pronunciation"} className="mt-3">
        <Button variant="brand">발음 교정 바로가기 →</Button>
      </Link>
    </div>
  );
};

export default PronunciationPart;
