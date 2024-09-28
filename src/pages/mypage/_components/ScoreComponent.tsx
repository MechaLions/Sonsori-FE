interface ScoreComponentProps {
  correctNumber: number;
}

const ScoreComponent = (props: ScoreComponentProps) => {
  const { correctNumber } = props;

  return (
    <section className="mb-8 flex items-center justify-center text-[77px] font-semibold">
      <p className="inline-block text-brand">{correctNumber}</p>
      <p className="mt-10 inline-block rotate-[15deg]">/</p>
      <p className="mt-[80px] inline-block">10</p>
    </section>
  );
};

export default ScoreComponent;
