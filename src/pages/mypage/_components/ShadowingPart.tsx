import { Button } from "@ui/components/ui/button";

import DoughnutChart from "@/components/DoughnutChart";

import { Link } from "@/router";

//TODO: 정확도 & 카테고리명 api 연결
const ShadowingPart = () => {
  return (
    <div className="shadow-shadowBrand flex w-[400px] flex-col items-center justify-between gap-3 rounded-[30px] bg-white py-10 text-center leading-tight">
      <h1 className="text-3xl font-bold">수어 쉐도잉</h1>
      <div className="text-2xl font-semibold">
        <p className="inline-block text-brand">병원&nbsp;</p>
        <p className="inline-block">카테고리를</p>
        <p>가장 최근에 학습했어요.</p>
      </div>
      <div className="flex flex-col gap-3">
        <DoughnutChart percent={0.72} />
        <div className="text-2xl font-bold">
          <p>평균 정확도</p>
          <p className="text-brand">72%</p>
        </div>
      </div>
      <Link to={"/shadowing"} className="mt-3">
        <Button variant="brand">수어 쉐도잉 바로가기 →</Button>
      </Link>
    </div>
  );
};

export default ShadowingPart;
