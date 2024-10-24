interface LinkComponentProps {
  childrenIcon: React.ReactNode;
  ment: React.ReactElement;
  onClick?: () => void;
}

const LinkComponent: React.FC<LinkComponentProps> = ({
  childrenIcon,
  ment,
  onClick,
}) => {
  return (
    <div
      className="flex max-w-fit cursor-pointer flex-col gap-[30px]"
      onClick={onClick}
    >
      <div className="transform transition-transform duration-300 hover:scale-[1.15]">
        {childrenIcon}
      </div>
      <div className="text-center text-xl font-bold leading-tight text-white">
        {ment}
      </div>
    </div>
  );
};

export default LinkComponent;
