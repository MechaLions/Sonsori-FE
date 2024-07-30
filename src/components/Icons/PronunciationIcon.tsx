import PronunciationImage from "@/assets/PronunciationImage.png";

const PronunciationIcon = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={PronunciationImage}
        className="h-auto w-[200px]"
        loading="lazy"
        alt="PronunciationImage"
      />
    </div>
  );
};

export default PronunciationIcon;
