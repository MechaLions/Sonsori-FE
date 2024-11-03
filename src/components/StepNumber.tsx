interface StepNumberProps {
  step: number;
}

const StepNumber = (props: StepNumberProps) => {
  const { step } = props;

  return (
    <div className="flex items-baseline justify-center gap-5 font-bold [text-shadow:_0px_4px_4px_rgba(0,0,0,0.25)]">
      <span className="text-[70px] text-brand">{step}</span>
      <span className="text-[50px]">/</span>
      <span className="text-[50px]">10</span>
    </div>
  );
};

export default StepNumber;
