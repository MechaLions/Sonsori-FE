import ExplainSection from "./_components/ExplainSection";
import CategorySection from "./_components/CategorySection";

// TODO: 배경 바꾸기
const PronunciationPage = () => {
  return (
    <main
      className="h-full"
      style={{
        background:
          "linear-gradient(123deg, #7CABE9 54%, #0169F4 79%, #055ED6 99%)",
      }}
    >
      <main className="flex h-full w-full flex-col items-center gap-[74px] bg-white/[.42] py-[100px]">
        <ExplainSection />
        <CategorySection />
      </main>
    </main>
  );
};

export default PronunciationPage;
