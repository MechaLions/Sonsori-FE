import CheckImage from "@/assets/CheckIcon.png";

const CheckIcon = () => {
  return (
    <div className="flex items-center justify-center hover:cursor-pointer">
      <img
        src={CheckImage}
        className="h-[20px] w-[20px]"
        loading="lazy"
        alt="github"
      />
    </div>
  );
};

export default CheckIcon;
