import PauseImage from "@/assets/PauseIcon.png";

const PauseIcon = () => {
  return (
    <div className="flex items-center justify-center hover:cursor-pointer">
      <img
        src={PauseImage}
        className="h-[20px] w-[20px]"
        loading="lazy"
        alt="github"
      />
    </div>
  );
};

export default PauseIcon;
