import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@ui/components/ui/dialog";
import { Button } from "@ui/components/ui/button";

import { useControlRedirect } from "@/hooks/useControlRedirect";

const AuthRequiredModal = () => {
  const {
    isModalOpen,
    handleOpenModalOrRedirect,
    handleCloseModal,
    handleRedirectToAuth,
  } = useControlRedirect();

  return (
    <Dialog open={isModalOpen} onOpenChange={handleOpenModalOrRedirect}>
      <DialogContent
        className="flex flex-col items-center justify-center bg-brandLightBlue"
        isXHidden
      >
        <DialogHeader>
          <DialogTitle className="text-center text-[30px] font-bold">
            해당 기능은 로그인 후<br />
            사용할 수 있어요.
          </DialogTitle>
        </DialogHeader>
        <DialogFooter className="w-full flex-row justify-center gap-3 sm:flex-row">
          <Button
            variant="brand"
            className="h-[52px] border-2 border-brand bg-white text-brand"
            onClick={handleCloseModal}
          >
            취소
          </Button>
          <Button variant="brand" onClick={handleRedirectToAuth}>
            로그인/회원가입
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AuthRequiredModal;
