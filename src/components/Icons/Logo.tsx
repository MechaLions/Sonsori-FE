import { cn } from "@ui/lib/utils";

import LogoImage from "@/assets/LogoImage.png";

interface LogoProps {
  size?: string;
}

const Logo = (props: LogoProps) => {
  const { size } = props;

  return (
    <div className="flex items-center justify-center">
      <img
        src={LogoImage}
        className={cn("h-auto", size ? size : "w-[38px]")}
        loading="lazy"
        alt="Logo"
      />
    </div>
  );
};

export default Logo;
