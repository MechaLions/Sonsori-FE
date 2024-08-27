interface InputItemProps {
  title: string;
  placeholder: string;
  isSignupPassword?: boolean;
}

const InputItem = (props: InputItemProps) => {
  const { title, placeholder, isSignupPassword } = props;

  const type = title === "비밀번호" ? "password" : "text";

  return (
    <div className="flex w-full flex-col gap-2">
      <h1 className="pl-[3px] text-xl font-semibold">{title}</h1>
      <div className="border-brandGray rounded-[15px] border-2 py-5 pl-8">
        <input
          type={type}
          className="flex grow items-center text-base leading-tight text-[#636363] ring-offset-background file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:opacity-50"
          placeholder={placeholder}
        />
      </div>
      {isSignupPassword && (
        <div className="border-brandGray rounded-[15px] border-2 py-5 pl-8">
          <input
            type={type}
            className="flex grow items-center text-base leading-tight text-[#636363] ring-offset-background file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:opacity-50"
            placeholder="비밀번호 재확인"
          />
        </div>
      )}
    </div>
  );
};

export default InputItem;
