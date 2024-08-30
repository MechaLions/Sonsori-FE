interface CategoryItemProps {
  title: string;
}

const CategoryItem = (props: CategoryItemProps) => {
  const { title } = props;
  return (
    <section className="shadow-categoryShadow flex h-[300px] w-[380px] flex-col rounded-[15px] bg-white">
      <div className="flex flex-1 items-center justify-center text-3xl font-bold text-brand">
        이미지
      </div>
      <div className="flex h-[130px] items-center justify-center rounded-b-[15px] bg-brand text-3xl font-bold text-white">
        {title}
      </div>
    </section>
  );
};

export default CategoryItem;
