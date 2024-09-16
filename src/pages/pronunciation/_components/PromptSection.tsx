const PropmptSection = () => {
  return (
    <section className="flex w-[70%] flex-col items-center justify-center gap-14 rounded-[20px] bg-white py-[62px] pl-24 leading-tight shadow-shadowBrand">
      <div className="flex w-full flex-col gap-[10px]">
        <p className="text-xl text-brandMediumGray">학습할 문장</p>
        <p className="text-4xl">밥 먹었어?</p>
      </div>
      <div className="flex w-full flex-col gap-[10px]">
        <p className="text-xl text-brandMediumGray">올바른 발음</p>
        <p className="text-4xl font-bold">"밤 머거써?"</p>
      </div>
    </section>
  );
};

export default PropmptSection;
