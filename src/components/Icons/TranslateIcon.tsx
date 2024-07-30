import TranslateImage from "@/assets/TranslateImage.png";

const TranslateIcon = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={TranslateImage}
        className="h-auto w-[200px]"
        loading="lazy"
        alt="PronunciationImage"
      />
    </div>
  );
};

export default TranslateIcon;
