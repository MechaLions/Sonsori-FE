import ShadowingPart from "./_components/ShadowingPart";
import QuizPart from "./_components/QuizPart";
import PronunciationPart from "./_components/PronunciationPart";

const MyPage = () => {
  return (
    <main className="flex h-full flex-col">
      <section className="flex h-full w-full items-center justify-evenly">
        <ShadowingPart />
        <QuizPart />
        <PronunciationPart />
      </section>
    </main>
  );
};

export default MyPage;
