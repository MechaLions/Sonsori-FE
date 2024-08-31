import MikeImage from "@/assets/mikeImage.png";

const MikeIcon = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={MikeImage}
        className="h-auto w-[75px]"
        loading="lazy"
        alt="MikeIcon"
      />
    </div>
  );
};

export default MikeIcon;
