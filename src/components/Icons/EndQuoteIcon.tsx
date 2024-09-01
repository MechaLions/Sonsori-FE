import EndQuoteIcon from "@/assets/TextBoxEndQuoteIcon.png";

interface EndQuoteProps {
  className?: string;
}

const EndQuote: React.FC<EndQuoteProps> = ({ className }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src={EndQuoteIcon}
        className="h-[34.24px] w-[29.38px]"
        loading="lazy"
        alt="EndQuote"
      />
    </div>
  );
};

export default EndQuote;
