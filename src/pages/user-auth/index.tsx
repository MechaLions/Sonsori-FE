import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@ui/lib/utils";

import Logo from "@/components/Icons/Logo";

import LoginSection from "./_components/LoginSection";

import SignupSection from "@/pages/user-auth/_components/SignupSection";

const AuthPage = () => {
  const [activeSection, setActiveSection] = useState("login");

  const activeStyle = "underline text-brand";

  const handleSectionChange = (section: string) => {
    setTimeout(() => {
      setActiveSection(section);
    }, 300); // 애니메이션 지속 시간과 일치시킴
  };

  return (
    <main className="auth-container relative flex h-full w-full items-center justify-center">
      <AnimatePresence>
        <motion.section
          key={activeSection}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="absolute top-[160px] flex w-[900px] flex-col items-center gap-6 rounded-[30px] bg-white px-[220px] pb-16 pt-8 shadow-shadowBrand"
        >
          <div className="flex items-center justify-center gap-1">
            <Logo />
            <h1 className="text-xl font-semibold text-brand">Sonsori</h1>
          </div>
          <div className="flex items-center justify-center gap-4 pb-3 text-2xl font-semibold text-[#9b9b9b]">
            <p
              className={cn(
                "inline-block cursor-pointer",
                activeSection === "login" ? activeStyle : "",
              )}
              onClick={() => handleSectionChange("login")}
            >
              로그인
            </p>
            <p
              className={cn(
                "inline-block cursor-pointer",
                activeSection === "signup" ? activeStyle : "",
              )}
              onClick={() => handleSectionChange("signup")}
            >
              회원가입
            </p>
          </div>
          {activeSection === "login" ? <LoginSection /> : <SignupSection />}
        </motion.section>
      </AnimatePresence>
    </main>
  );
};

export default AuthPage;
