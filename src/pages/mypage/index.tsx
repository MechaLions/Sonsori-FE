import ShadowingPart from "./_components/ShadowingPart";
import QuizPart from "./_components/QuizPart";
import PronunciationPart from "./_components/PronunciationPart";

const MyPage = () => {
  return (
    <main
      className="flex h-full flex-col"
      style={{
        background:
          "linear-gradient(123deg, #7CABE9 54%, #0169F4 79%, #055ED6 99%)",
      }}
    >
      <section className="flex h-full w-full items-center justify-evenly bg-white/[.42]">
        <ShadowingPart />
        <QuizPart />
        <PronunciationPart />
      </section>
    </main>
  );
};

export default MyPage;
