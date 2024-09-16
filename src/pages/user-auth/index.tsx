import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@ui/lib/utils";

import Logo from "@/components/Icons/Logo";

import LoginSection from "./_components/LoginSection";

import SignupSection from "@/pages/user-auth/_components/SignupSection";

const ANIMATION_DURATION = 0.3; // 애니메이션 지속 시간 상수화
const SECTIONS = {
  LOGIN: "login",
  SIGNUP: "signup",
};

const AuthPage = () => {
  const [activeSection, setActiveSection] = useState(SECTIONS.LOGIN);

  const activeStyle = "underline text-brand";

  const handleSectionChange = (section: string) => {
    setTimeout(() => {
      setActiveSection(section);
    }, ANIMATION_DURATION * 1000); // 애니메이션 지속 시간과 일치시킴
  };

  const renderSection = () => {
    return activeSection === SECTIONS.LOGIN ? (
      <LoginSection />
    ) : (
      <SignupSection />
    );
  };

  const renderTab = (section: string, label: string) => (
    <p
      className={cn(
        "inline-block cursor-pointer",
        activeSection === section ? activeStyle : "",
      )}
      onClick={() => handleSectionChange(section)}
    >
      {label}
    </p>
  );

  return (
    <main className="auth-container relative flex h-full w-full items-center justify-center">
      <AnimatePresence>
        <motion.section
          key={activeSection}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: ANIMATION_DURATION }}
          className="absolute m-auto flex w-[900px] flex-col items-center gap-6 rounded-[30px] bg-white px-[220px] pb-16 pt-8 shadow-shadowBrand"
        >
          <div className="flex items-center justify-center gap-3">
            <Logo size="w-8" />
            <h1 className="text-xl font-semibold text-brand">Sonsori</h1>
          </div>
          <div className="flex items-center justify-center gap-4 pb-3 text-2xl font-semibold text-[#9b9b9b]">
            {renderTab(SECTIONS.LOGIN, "로그인")}
            {renderTab(SECTIONS.SIGNUP, "회원가입")}
          </div>
          {renderSection()}
        </motion.section>
      </AnimatePresence>
    </main>
  );
};

export default AuthPage;
