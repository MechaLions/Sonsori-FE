import MicImage from "@/assets/micImage.png";

const MicIcon = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={MicImage}
        className="h-auto w-[75px]"
        loading="lazy"
        alt="MikeIcon"
      />
    </div>
  );
};

export default MicIcon;
