import UserImage from "@/assets/UserImage.png";
import UserActiveImage from "@/assets/UserActiveImage.png";

interface UserIconProps {
  isActive: boolean;
}

const UserIcon = (props: UserIconProps) => {
  const { isActive } = props;

  return (
    <div className="flex items-center justify-center">
      <img
        src={isActive ? UserActiveImage : UserImage}
        className="h-auto w-[50px]"
        loading="lazy"
        alt="UserIcon"
      />
    </div>
  );
};

export default UserIcon;
