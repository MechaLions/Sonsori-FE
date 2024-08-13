import TranslateSection from "./_components/TranslateSection";
import MainSection from "./_components/MainSection";
import ExplainSection from "./_components/ExplainSection";

const Home = () => {
  return (
    <main className="flex w-full flex-col">
      <MainSection />
      <ExplainSection />
      <TranslateSection />
    </main>
  );
};

export default Home;
