import ErrorMentBox from "./ErrorMentBox";

interface InputItemProps {
  title: string;
  placeholder: string;
  isPass: boolean;
  errorMent: string;
  value: string;
  value2?: string;
  isSignupPassword?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange2?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputItem = (props: InputItemProps) => {
  const {
    title,
    placeholder,
    value,
    value2,
    errorMent,
    isPass,
    isSignupPassword,
    onChange,
    onChange2,
  } = props;

  const type = title === "비밀번호" ? "password" : "text";

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex w-full items-center gap-3">
        <h1 className="pl-[3px] text-xl font-semibold">{title}</h1>
        <ErrorMentBox ment={errorMent} isPass={isPass} />
      </div>
      <div className="rounded-[15px] border-2 border-brandGray py-5 pl-8">
        <input
          type={type}
          value={value}
          className="flex grow items-center text-base leading-tight text-[#636363] ring-offset-background file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:opacity-50"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
      {isSignupPassword && (
        <div className="rounded-[15px] border-2 border-brandGray py-5 pl-8">
          <input
            type={type}
            value={value2}
            className="flex grow items-center text-base leading-tight text-[#636363] ring-offset-background file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:opacity-50"
            placeholder="비밀번호 재확인"
            onChange={onChange2}
          />
        </div>
      )}
    </div>
  );
};

export default InputItem;
