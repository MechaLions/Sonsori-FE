import TranslateIcon from "@/components/Icons/TranslateIcon";
import ShadowingIcon from "@/components/Icons/ShadowingIcon";
import QuizIcon from "@/components/Icons/QuizIcon";
import PronunciationIcon from "@/components/Icons/PronunciationIcon";

import LinkComponent from "./LinkComponent";

interface MainSectionProps {
  handleScrollToTranslate: () => void;
}

const MainSection = (props: MainSectionProps) => {
  const { handleScrollToTranslate } = props;

  return (
    <main
      className="brand-container flex w-full flex-col justify-around"
      style={{ height: "calc(100vh - 88px)" }}
    >
      <section className="flex w-full flex-col items-center justify-center text-center text-[55px] font-bold leading-tight">
        손끝에서 글로, <br />
        소리에서 마음으로.
      </section>
      <section className="flex w-full justify-around px-10">
        <LinkComponent
          childrenIcon={<TranslateIcon />}
          ment={
            <>
              수어를 한글로
              <br />
              번역해주는 서비스
            </>
          }
          onClick={handleScrollToTranslate}
        />
        <LinkComponent
          childrenIcon={<ShadowingIcon />}
          ment={
            <>
              수어 학습을 위한
              <br />
              쉐도잉 서비스
            </>
          }
        />
        <LinkComponent
          childrenIcon={<QuizIcon />}
          ment={
            <>
              학습한 내용을
              <br />
              복습할 수 있는 퀴즈
            </>
          }
        />
        <LinkComponent
          childrenIcon={<PronunciationIcon />}
          ment={<>한국어 발음 교정</>}
        />
      </section>
    </main>
  );
};

export default MainSection;
