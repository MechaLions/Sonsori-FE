interface FrontCardViewProps {
  title: string;
  imageUrl: string;
}

const FrontCardView = (props: FrontCardViewProps) => {
  const { title, imageUrl } = props;

  return (
    <div className="card-dynamic-size card-front-back">
      <img
        src={imageUrl}
        alt={title}
        className="h-[170px] w-full flex-1 rounded-t-[15px] object-cover"
      />
      <div className="flex h-[130px] w-full items-center justify-center rounded-b-[15px] bg-brand text-3xl font-bold text-white">
        {title}
      </div>
    </div>
  );
};

export default FrontCardView;
