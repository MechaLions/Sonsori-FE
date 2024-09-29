interface AnswerCompareSectionProps {
  correctText: string;
  userText: string | string[]; // userText를 문자열 또는 배열로 수용
}

const AnswerCompareSection = ({
  correctText,
  userText,
}: AnswerCompareSectionProps) => {
  // 발음을 비교하여 같은 글자는 초록색, 다른 글자는 빨간색으로 표시
  const getColoredText = (correct: string, user: string | string[]) => {
    // null 또는 undefined 방지 처리
    if (!correct) {
      return <span className="text-brandRed">null</span>;
    }

    // userText가 배열일 경우, 첫 번째 요소를 사용하여 문자열로 변환
    if (Array.isArray(user)) {
      console.warn("userText가 배열입니다:", user);
      user = user.length > 0 ? user[0] : ""; // 배열이 비어 있으면 빈 문자열로 처리
    }

    // user가 문자열이 아닐 경우 빈 문자열로 대체
    if (typeof user !== "string") {
      console.error("userText는 문자열이 아닙니다:", user);
      user = ""; // 사용자 입력이 없을 경우 빈 문자열 처리
    }

    const correctChars = correct.split(""); // 올바른 텍스트를 문자 배열로 변환
    const userChars = user.split(""); // 사용자 입력 텍스트를 문자 배열로 변환

    // 두 문자열의 길이가 다를 때 대비하여 처리
    return correctChars.map((char: string, index: number) => {
      const userChar = userChars[index] || ""; // 사용자가 입력하지 않은 부분은 빈 값 처리
      if (char === userChar) {
        return (
          <span key={index} className="text-brandGreen">
            {char}
          </span>
        );
      } else {
        return (
          <span key={index} className="text-brandRed">
            {userChar}
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
