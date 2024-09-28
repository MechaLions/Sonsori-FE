import FrontCardView from "@/components/FrontCardView";
import BackCardView from "@/components/BackCardView";

import { useShadowingFlow } from "@/utils/shadowing/useShadowingFlow";

interface CategoryItemProps {
  category: {
    category_id: number;
    category_name: string;
    description: string;
    category_image_url: string;
  };
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const { category_name, description, category_image_url } = category;
  const { push } = useShadowingFlow();

  const handleClick = () => {
    push(
      "QuizActivity",
      {
        step: 1,
        category_id: category.category_id,
      },
      { animate: false },
    );
  };

  return (
    <main className="card-static-size group" onClick={handleClick}>
      <section className="group-hover:rotate-y-180 relative h-full w-full duration-500 [transform-style:preserve-3d]">
        <FrontCardView title={category_name} imageUrl={category_image_url} />
        <BackCardView description={description} />
      </section>
    </main>
  );
};

export default CategoryItem;
