import { useQueryMyPage } from "@/hooks/queries/useQueryMyPage";

import ShadowingPart from "./_components/ShadowingPart";
import QuizPart from "./_components/QuizPart";
import PronunciationPart from "./_components/PronunciationPart";

import UserImage from "@/assets/UserImage.png";

const MyPage = () => {
  const { data: myData } = useQueryMyPage();

  if (!myData) {
    return <div>Loading myInfo data...</div>;
  }

  return (
    <main
      className="h-full"
      style={{
        background:
          "linear-gradient(123deg, #7CABE9 54%, #0169F4 79%, #055ED6 99%)",
      }}
    >
      <div className="flex h-full w-full flex-col justify-evenly bg-white/[.42]">
        <section className="flex flex-col gap-5">
          <div className="flex items-center justify-center">
            <img src={UserImage} width={100} />
          </div>
          <div className="text-center text-[35px] font-bold lg:text-[40px]">
            <p className="inline-block text-brand">{myData.name}</p>
            <p className="inline-block">님의 학습 공간</p>
          </div>
        </section>
        <section className="flex w-full items-center justify-evenly">
          <ShadowingPart
            shadowingName={myData.shadowing_category_name}
            shadowingAvg={myData.shadowing_accuracy_avg}
          />
          <QuizPart correctNumber={myData.quiz_correct_number} />
          <PronunciationPart
            pronunName={myData.voice_category_name}
            pronunAvg={myData.voice_accuracy_avg}
          />
        </section>
      </div>
    </main>
  );
};

export default MyPage;
