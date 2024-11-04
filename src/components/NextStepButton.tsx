import { cn } from "@ui/lib/utils";
import { LoaderCircleIcon } from "@ui/components/ui/icon";
import { Button } from "@ui/components/ui/button";

interface NextStepButtonProps {
  disabled: boolean;
  className?: string;
  handleClick: () => void;
  isLoading?: boolean;
}

const NextStepButton = (props: NextStepButtonProps) => {
  const { disabled, className, handleClick, isLoading, ...rest } = props;

  return (
    <Button
      variant="brand"
      className={cn("", className)}
      onClick={handleClick}
      disabled={disabled}
      {...rest}
    >
      {isLoading ? (
        <LoaderCircleIcon className="w-[60px] animate-spin" />
      ) : (
        "결과 확인"
      )}
    </Button>
  );
};

export default NextStepButton;
