import LogoImage from "@/assets/LogoImage.png";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={LogoImage}
        className="h-auto w-[60px]"
        loading="lazy"
        alt="Logo"
      />
    </div>
  );
};

export default Logo;
