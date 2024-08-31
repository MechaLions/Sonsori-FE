const AnswerCompareSection = () => {
  const correctPronunciation = "밤 머거써?";
  const userPronunciation = "밤 머러써?";

  // 발음을 비교하여 같은 글자는 초록색, 다른 글자는 빨간색으로
  const getColoredPronunciation = (correct: string, user: string) => {
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
    <div className="bg-brandLightBlue flex w-1/2 flex-col items-center justify-center gap-10 rounded-[20px] py-9 pl-[60px] leading-tight">
      <div className="flex w-full flex-col gap-1">
        <p className="text-brandMediumGray text-base">올바른 발음</p>
        <p className="text-3xl font-semibold">{correctPronunciation}</p>
      </div>
      <div className="flex w-full flex-col gap-1">
        <p className="text-brandMediumGray text-base">사용자 발음</p>
        <p className="text-3xl font-semibold">
          {getColoredPronunciation(correctPronunciation, userPronunciation)}
        </p>
      </div>
    </div>
  );
};

export default AnswerCompareSection;
