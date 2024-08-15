import { useRef } from "react";

import TranslateSection from "./_components/TranslateSection";
import ShadowingSection from "./_components/ShadowingSection";
import QuizSection from "./_components/QuizSection";
import PronunciationSection from "./_components/PronunciationSection";
import MainSection from "./_components/MainSection";
import Footer from "./_components/Footer";
import ExplainSection from "./_components/ExplainSection";

export type SectionName = "Translate" | "Shadowing" | "Quiz" | "Pronunciation";

const Home = () => {
  const translateRef = useRef<HTMLDivElement>(null);
  const shadowingRef = useRef<HTMLDivElement>(null);
  const quizRef = useRef<HTMLDivElement>(null);
  const pronunciationRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    Translate: translateRef,
    Shadowing: shadowingRef,
    Quiz: quizRef,
    Pronunciation: pronunciationRef,
  };

  // 클릭 시 호출될 함수
  const handleScrollToSection = (section: SectionName) => {
    const ref = sectionRefs[section];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="flex w-full flex-col">
      <MainSection onScrollToSection={handleScrollToSection} />
      <ExplainSection />
      <TranslateSection ref={translateRef} />
      <ShadowingSection ref={shadowingRef} />
      <QuizSection ref={quizRef} />
      <PronunciationSection ref={pronunciationRef} />
      <Footer />
    </main>
  );
};

export default Home;
