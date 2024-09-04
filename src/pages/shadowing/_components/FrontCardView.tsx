interface FrontCardViewProps {
  title: string;
}

const FrontCardView = (props: FrontCardViewProps) => {
  const { title } = props;

  return (
    <div className="card-dynamic-size card-front-back">
      <div className="flex w-full flex-1 items-center justify-center text-3xl font-bold text-brand">
        이미지
      </div>
      <div className="flex h-[130px] w-full items-center justify-center rounded-b-[15px] bg-brand text-3xl font-bold text-white">
        {title}
      </div>
    </div>
  );
};

export default FrontCardView;
