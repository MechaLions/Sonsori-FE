interface PropmptSectionProps {
  origin_text: string;
  voice_text: string;
}

const PropmptSection = (props: PropmptSectionProps) => {
  const { origin_text, voice_text } = props;
  return (
    <section className="flex w-[70%] flex-col items-center justify-center gap-14 rounded-[20px] bg-white py-[62px] pl-24 leading-tight shadow-shadowBrand">
      <div className="flex w-full flex-col gap-[10px]">
        <p className="text-xl text-brandMediumGray">학습할 문장</p>
        <p className="text-4xl">{origin_text}</p>
      </div>
      <div className="flex w-full flex-col gap-[10px]">
        <p className="text-xl text-brandMediumGray">올바른 발음</p>
        <p className="text-4xl font-bold">"{voice_text}"</p>
      </div>
    </section>
  );
};

export default PropmptSection;
