import ReplayImage from "@/assets/ReplayIcon.png";

const ReplayIcon = () => {
  return (
    <div className="flex items-center justify-center hover:cursor-pointer">
      <img
        src={ReplayImage}
        className="h-[20px] w-[20px]"
        loading="lazy"
        alt="github"
      />
    </div>
  );
};

export default ReplayIcon;
