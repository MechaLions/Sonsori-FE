import { useQueryCategoryList } from "@/hooks/queries/useQueryCategoryList";

import CategoryItem from "./CategoryItem";

const CategorySection = () => {
  const { data: categoryList } = useQueryCategoryList();

  return (
    <section className="mx-auto grid gap-y-[90px] sm:grid-cols-1 sm:gap-x-8 lg:grid-cols-2 lg:gap-x-10 xl:grid-cols-3 xl:gap-x-20">
      {categoryList.map(
        ({ category_id, category_name, description, category_image_url }) => (
          <CategoryItem
            key={category_id}
            title={category_name}
            description={description}
            category_image_url={category_image_url}
          />
        ),
      )}
    </section>
  );
};

export default CategorySection;
