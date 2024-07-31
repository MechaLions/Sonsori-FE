import { Link, useLocation } from "react-router-dom";
import { cn } from "@ui/lib/utils";

import UserIcon from "./Icons/UserIcon";
import Logo from "./Icons/Logo";

interface NavItemProps {
  link: string;
  title: string;
}

const NavItem = (props: NavItemProps) => {
  const { link, title } = props;
  const isActive = location.pathname === link;

  return (
    <Link to={link} className="text-xl font-bold">
      <p
        className={cn(
          "hover:text-blue-300",
          isActive ? "text-blue-500" : "text-black",
        )}
      >
        {title}
      </p>
    </Link>
  );
};

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between px-[88px] py-3.5">
      <Link to="/home">
        <Logo />
      </Link>
      <NavItem title="수어 번역" link="/translate" />
      <NavItem title="수어 쉐도잉" link="/shadowing" />
      <NavItem title="퀴즈" link="/quiz" />
      <NavItem title="발음 교정" link="/pronunciation" />
      <Link to="/mypage">
        <UserIcon isActive={location.pathname === "/mypage"} />
      </Link>
    </nav>
  );
};

export default Nav;
