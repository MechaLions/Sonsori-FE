import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { getID } from "@/utils/handleID";

import { useNavigate } from "@/router";

export const useControlRedirect = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const excludedPaths = ["/home", "/user-auth", "/translate"];

  const handleOpenModalOrRedirect = () => {
    const isAuthenticated = !!getID();
    if (!isAuthenticated && !excludedPaths.includes(location.pathname)) {
      setOpen(true);
    } else {
      setOpen(false);
      return;
    }
  };

  // 경로가 변경될 때마다 자동으로 로그인 상태를 확인하고 모달을 열거나 닫음
  useEffect(() => {
    handleOpenModalOrRedirect(); // 경로 변경 시 자동으로 실행
  }, [location.pathname]);

  const handleCloseModal = () => {
    setOpen(false);
    navigate("/home");
  };

  const handleRedirectToAuth = () => {
    handleCloseModal();
    navigate("/user-auth");
  };

  return {
    isModalOpen: open,
    handleOpenModalOrRedirect,
    handleCloseModal,
    handleRedirectToAuth,
  };
};
