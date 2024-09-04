interface BackCardViewProps {
  description: string;
}

const BackCardView = (props: BackCardViewProps) => {
  const { description } = props;

  return (
    <div className="card-dynamic-size card-front-back rotate-y-180 p-4">
      {description}
    </div>
  );
};

export default BackCardView;
