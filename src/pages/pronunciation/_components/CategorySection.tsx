import CategoryItem from "./CategoryItem";

const CategorySection = () => {
  return (
    <section className="mx-auto grid gap-x-20 gap-y-[90px] sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <CategoryItem title="카테고리1" />
      <CategoryItem title="카테고리2" />
      <CategoryItem title="카테고리3" />
      <CategoryItem title="카테고리4" />
      <CategoryItem title="카테고리5" />
      <CategoryItem title="카테고리6" />
      <CategoryItem title="카테고리7" />
      <CategoryItem title="카테고리8" />
    </section>
  );
};

export default CategorySection;
