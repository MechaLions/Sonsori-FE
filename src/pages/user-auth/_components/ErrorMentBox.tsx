import { cn } from "@ui/lib/utils";

interface ErrorMentBoxProps {
  isPass?: boolean;
  ment: string;
}

const ErrorMentBox = (props: ErrorMentBoxProps) => {
  const { isPass, ment } = props;

  return (
    <div
      className={cn("text-xs", {
        "text-brandGreen": isPass,
        "text-brandRed": !isPass,
      })}
    >
      {ment}
    </div>
  );
};

export default ErrorMentBox;
