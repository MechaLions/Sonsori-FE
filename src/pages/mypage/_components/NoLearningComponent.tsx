const NoLearningComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-5">
      <h1 className="text-2xl font-semibold">최근 학습 기록이 없어요 😢</h1>
      <p className="text-xl font-semibold">
        바로가기를 눌러
        <br /> 새로운 학습을 시작해보세요!
      </p>
    </div>
  );
};

export default NoLearningComponent;
