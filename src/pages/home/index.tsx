import { useRef } from "react";

import TranslateSection from "./_components/TranslateSection";
import MainSection from "./_components/MainSection";
import ExplainSection from "./_components/ExplainSection";

const Home = () => {
  // useRef로 TranslateSection을 참조하는 레퍼런스 생성
  const translateSectionRef = useRef<HTMLDivElement>(null);

  // 클릭 시 호출될 함수
  const handleScrollToTranslate = () => {
    if (translateSectionRef.current) {
      translateSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="flex w-full flex-col">
      <MainSection handleScrollToTranslate={handleScrollToTranslate} />
      <ExplainSection />
      <TranslateSection ref={translateSectionRef} />
    </main>
  );
};

export default Home;
