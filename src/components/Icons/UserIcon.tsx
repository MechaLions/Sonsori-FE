import { useEffect, useState } from "react";

import UserImage from "@/assets/UserImage.png";
import UserHoverImage from "@/assets/UserHoverImage.png";
import UserActiveImage from "@/assets/UserActiveImage.png";

interface UserIconProps {
  isActive: boolean;
}

const UserIcon = (props: UserIconProps) => {
  const { isActive } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [ImageSrc, setImageSrc] = useState(UserImage);

  useEffect(() => {
    if (isHovered) setImageSrc(UserHoverImage);
    if (isActive) setImageSrc(UserActiveImage);
    if (!isActive && !isHovered) setImageSrc(UserImage);
  }, [isHovered, isActive]);

  return (
    <div
      className="flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={ImageSrc}
        className="h-auto w-[50px]"
        loading="lazy"
        alt="UserIcon"
      />
    </div>
  );
};

export default UserIcon;
