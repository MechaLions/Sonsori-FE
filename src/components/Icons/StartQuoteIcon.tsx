import StartQuoteIcon from "@/assets/TextBoxStartQuoteIcon.png";

interface StartQuoteProps {
  className?: string;
}

const StartQuote: React.FC<StartQuoteProps> = ({ className }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src={StartQuoteIcon}
        className="h-[34.24px] w-[29.38px]"
        loading="lazy"
        alt="StartQuote"
      />
    </div>
  );
};

export default StartQuote;
