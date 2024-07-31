interface LinkComponentProps {
  childrenIcon: React.ReactNode;
  ment: React.ReactElement;
}

const LinkComponent: React.FC<LinkComponentProps> = ({
  childrenIcon,
  ment,
}) => {
  return (
    <div className="flex max-w-fit flex-col gap-[30px]">
      {childrenIcon}
      <div className="text-center text-xl font-bold leading-tight text-white">
        {ment}
      </div>
    </div>
  );
};

export default LinkComponent;
