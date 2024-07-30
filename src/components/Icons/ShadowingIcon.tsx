import ShadowingImage from "@/assets/ShadowingImage.png";

const ShadowingIcon = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={ShadowingImage}
        className="h-auto w-[200px]"
        loading="lazy"
        alt="PronunciationImage"
      />
    </div>
  );
};

export default ShadowingIcon;
