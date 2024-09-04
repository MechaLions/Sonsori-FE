import UndoImage from "@/assets/UndoIcon.png";

const UndoIcon = () => {
  return (
    <div className="flex items-center justify-center hover:cursor-pointer">
      <img
        src={UndoImage}
        className="h-[20px] w-[20px]"
        loading="lazy"
        alt="github"
      />
    </div>
  );
};

export default UndoIcon;
