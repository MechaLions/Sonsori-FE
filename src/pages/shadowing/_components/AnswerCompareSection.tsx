const AnswerCompareSection = () => {
  const correctText = "밥 먹었어?";
  const userText = "밥 마셨어?";

  // 발음을 비교하여 같은 글자는 초록색, 다른 글자는 빨간색으로
  const getColoredText = (correct: string, user: string) => {
    const correctChars = correct.split("");
    const userChars = user.split("");

    return userChars.map((char: string, index: number) => {
      if (char === correctChars[index]) {
        return (
          <span key={index} className="text-brandGreen">
            {char}
          </span>
        );
      } else {
        return (
          <span key={index} className="text-brandRed">
            {char}
          </span>
        );
      }
    });
  };

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
