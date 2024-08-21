import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import UserImage from "@/assets/UserImage.png";
import UserHoverImage from "@/assets/UserHoverImage.png";
import UserActiveImage from "@/assets/UserActiveImage.png";

const UserIcon = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageSrc, setImageSrc] = useState(UserImage);

  const location = useLocation();

  useEffect(() => {
    if (isHovered) {
      setImageSrc(UserHoverImage);
    } else if (location.pathname === "/mypage") {
      setImageSrc(UserActiveImage);
    } else {
      setImageSrc(UserImage);
    }
  }, [isHovered, location.pathname]);

  return (
    <div
      className="flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageSrc}
        className="h-auto w-[50px]"
        loading="lazy"
        alt="UserIcon"
      />
    </div>
  );
};

export default UserIcon;
