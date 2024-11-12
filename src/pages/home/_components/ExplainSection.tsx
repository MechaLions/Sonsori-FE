import { forwardRef } from "react";

interface ExplainSectionProps {}

const ExplainSection = forwardRef<HTMLDivElement>(
  (props: ExplainSectionProps, ref) => {
    return (
      <main
        {...props}
        ref={ref}
        className="flex flex-col gap-20 px-40 py-36 text-[25px]"
      >
        <section>
          <h1 className="mb-14 text-[40px] font-bold text-brand">
            "손소리"<span className="text-brandDarkGray">란</span>
          </h1>
          <div className="mb-2">
            <span className="bg-[#E5F0FF] text-3xl font-semibold text-brand">
              구화인
            </span>
            은 입술 모양을 통해 말을 이해하는 사람을 뜻합니다.
          </div>
          <div>
            손소리는&nbsp;
            <span className="bg-[#E5F0FF] text-3xl font-semibold text-brand">
              구화인을 위한 교육 플랫폼
            </span>
            &nbsp;으로, 수어와 발음 학습에 필요한 다양한 기능을 제공합니다.
          </div>
        </section>
        <section className="flex gap-14">
          <div className="flex flex-col gap-3 rounded-[20px] bg-[#e9f1fd] p-14 shadow-shadowBrand">
            <h1 className="text-3xl font-bold">1. 수어 학습</h1>
            <p>
              수어번역, 수어 쉐도잉, 퀴즈를 통해 <br />
              수어를 체계적으로 학습할 수 있습니다.
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-[20px] bg-[#e9f1fd] p-14 shadow-shadowBrand">
            <h1 className="text-3xl font-bold">2. 발음 학습</h1>
            <p>
              발음 교정 기능에서는 표준 발음 텍스트를 보며
              <br />
              발음 연습을 할 수 있습니다.
            </p>
          </div>
        </section>
        <div>
          손소리는 구화인이 어려운 학습 환경에서도 원활한 소통을 할 수 있도록
          최선을 다해 지원하겠습니다.
        </div>
      </main>
    );
  },
);

export default ExplainSection;
