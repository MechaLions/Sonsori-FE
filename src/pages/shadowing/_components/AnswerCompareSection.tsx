interface AnswerCompareSectionProps {
  correctText: string;
  userText: string | string[];
}

// 발음을 비교하여 같은 글자는 초록색, 다른 글자는 빨간색으로
const getColoredText = (correct: string, user: string | string[]) => {
  if (!correct) return <span className="text-brandRed">null</span>;

  const userString = Array.isArray(user) ? user[0] || "" : user || "";
  return correct.split("").map((char, index) => {
    const userChar = userString[index] || "";
    return (
      <span
        key={index}
        className={char === userChar ? "text-brandGreen" : "text-brandRed"}
      >
        {userChar || ""}
      </span>
    );
  });
};

const AnswerCompareSection = (props: AnswerCompareSectionProps) => {
  const { correctText, userText } = props;
  return (
    <div className="flex w-1/2 flex-col items-center justify-center gap-10 rounded-[20px] bg-brandLightBlue py-9 pl-[60px] leading-tight">
      <div className="flex w-full flex-col gap-1">
        <p className="text-base text-brandMediumGray">올바른 문장</p>
        <p className="text-3xl font-semibold">{correctText}</p>
      </div>
      <div className="flex w-full flex-col gap-1">
        <p className="text-base text-brandMediumGray">사용자 입력 문장</p>
        <p className="text-3xl font-semibold">
          {getColoredText(correctText, userText)}
        </p>
      </div>
    </div>
  );
};

export default AnswerCompareSection;
