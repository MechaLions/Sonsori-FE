import QuizImage from "@/assets/QuizImage.png";

const QuizIcon = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={QuizImage}
        className="h-auto w-[200px]"
        loading="lazy"
        alt="PronunciationImage"
      />
    </div>
  );
};

export default QuizIcon;
