import { Button } from "@ui/components/ui/button";

interface ButtonSectionProps {
  showMainButtons: boolean;
  startCamera: () => void;
  stopCamera: () => void;
  setShowMainButtons: (value: boolean) => void;
  deleteLastWord: () => void;
}

const ButtonSection = (props: ButtonSectionProps) => {
  const {
    showMainButtons,
    startCamera,
    stopCamera,
    setShowMainButtons,
    deleteLastWord,
  } = props;

  return (
    <div className="flex items-center justify-between gap-6">
      {showMainButtons ? (
        <div className="group relative flex items-center">
          <div className="duration-10 absolute right-full mr-2 w-max transform rounded bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-80">
            시작하기를 누르면 바로 촬영이 시작됩니다.
          </div>
          <Button
            variant="brand"
            size="small"
            onClick={() => {
              setShowMainButtons(false);
              startCamera();
            }}
          >
            시작하기
          </Button>
        </div>
      ) : (
        <>
          <div className="group relative flex items-center">
            <div className="duration-10 absolute right-full mr-2 w-max transform rounded bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-80">
              번역된 내용 중 마지막 단어가 삭제됩니다.
            </div>
            <Button
              variant="brand"
              size="small"
              className="bg-white text-black"
              onClick={deleteLastWord}
            >
              단어 삭제
            </Button>
          </div>
          <div className="group relative flex items-center">
            <Button
              variant="brand"
              size="small"
              className="bg-brandRed text-white"
              onClick={() => {
                setShowMainButtons(true);
                stopCamera();
              }}
            >
              종료하기
            </Button>
            <div className="duration-10 absolute left-full ml-2 w-max transform rounded bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-80">
              촬영이 종료됩니다.
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ButtonSection;
