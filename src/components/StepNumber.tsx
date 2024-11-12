interface StepNumberProps {
  step: number;
  children?: React.ReactNode;
}

const StepNumber = (props: StepNumberProps) => {
  const { step, children } = props;

  return (
    <section className="flex flex-col items-center justify-center gap-1.5">
      <div className="flex items-baseline justify-center gap-5 font-bold [text-shadow:_0px_4px_4px_rgba(0,0,0,0.25)]">
        <span className="text-[70px] text-brand">{step}</span>
        <span className="text-[50px]">/</span>
        <span className="text-[50px]">10</span>
      </div>
      {children}
    </section>
  );
};

export default StepNumber;
