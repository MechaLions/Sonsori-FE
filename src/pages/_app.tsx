import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Nav from "@/components/Nav";

import { useNavigate } from "@/router";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // 만약 현재 경로가 '/'일 경우 '/home'으로 리디렉션(나중에 랜딩페이지 넣을거면 index.tsx 넣기)
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, [location, navigate]);

  return (
    <section className="relative flex h-dvh w-screen flex-col">
      {/* 나중에 toaster 넣을거면 넣고 */}
      {!["/user-auth"].includes(location.pathname) && (
        <header className="sticky left-0 top-0 z-10 bg-white">
          <Nav />
        </header>
      )}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full grow"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
    </section>
  );
};

export default App;
