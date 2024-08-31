const PropmptSection = () => {
  return (
    <section className="flex w-[76%] flex-col items-center justify-center gap-14 rounded-[20px] bg-white py-[70px] pl-24 leading-tight shadow-shadowBrand">
      <div className="flex w-full flex-col gap-[10px]">
        <p className="text-[25px] text-[#686868]">학습할 문장</p>
        <p className="text-[40px]">밥 먹었어?</p>
      </div>
      <div className="flex w-full flex-col gap-[10px]">
        <p className="text-[25px] text-[#686868]">올바른 문장</p>
        <p className="text-[40px] font-bold">"밤 머거써?"</p>
      </div>
    </section>
  );
};

export default PropmptSection;
