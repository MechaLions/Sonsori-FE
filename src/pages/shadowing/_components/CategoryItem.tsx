import FrontCardView from "@/components/FrontCardView";
import BackCardView from "@/components/BackCardView";

import { useQueryShadowingQuizList } from "@/hooks/queries/useQueryShadowingQuizList";

import { useShadowingFlow } from "@/utils/shadowing/useShadowingFlow";
import { setShadowingId } from "@/utils/handleCategoryID";

import { useShadowingQuizStore } from "@/store/useShadowingQuizStore";

interface CategoryItemProps {
  id: number;
  title: string;
  description: string;
  category_image_url: string;
}

const CategoryItem = (props: CategoryItemProps) => {
  const { id, title, description, category_image_url } = props;

  const { push } = useShadowingFlow();
  const { refetch } = useQueryShadowingQuizList(id);
  const setShadowingQuizList = useShadowingQuizStore(
    state => state.setShadowingQuizList,
  );

  const handleClick = async () => {
    setShadowingId(id.toString());

    const { data: quizList } = await refetch();
    if (quizList) {
      setShadowingQuizList(quizList);
      push(
        "QuizActivity",
        {
          step: 1,
        },
        { animate: false },
      );
    }
  };

  return (
    <main className="card-static-size group" onClick={handleClick}>
      <section className="group-hover:rotate-y-180 relative h-full w-full duration-500 [transform-style:preserve-3d]">
        <FrontCardView title={title} imageUrl={category_image_url} />
        <BackCardView description={description} />
      </section>
    </main>
  );
};

export default CategoryItem;
