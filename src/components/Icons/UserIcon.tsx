import UserImage from "@/assets/UserImage.png";

const UserIcon = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={UserImage}
        className="h-auto w-[50px]"
        loading="lazy"
        alt="UserIcon"
      />
    </div>
  );
};

export default UserIcon;
