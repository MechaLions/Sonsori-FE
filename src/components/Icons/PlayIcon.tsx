import PlayImage from "@/assets/PlayIcon.png";

const PlayIcon = () => {
  return (
    <div className="flex items-center justify-center hover:cursor-pointer">
      <img
        src={PlayImage}
        className="h-[20px] w-[20px]"
        loading="lazy"
        alt="github"
      />
    </div>
  );
};

export default PlayIcon;
