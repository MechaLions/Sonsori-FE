import FrontCardView from "@/components/FrontCardView";
import BackCardView from "@/components/BackCardView";

import { usePronunciationFlow } from "@/utils/usePronunciationFlow";

interface CategoryItemProps {
  title: string;
  description: string;
}

const CategoryItem = (props: CategoryItemProps) => {
  const { title, description } = props;

  const { push } = usePronunciationFlow();

  const handleClick = () => {
    push(
      "QuizActivity",
      {
        step: 1,
      },
      { animate: false },
    );
  };

  return (
    <main className="card-static-size group" onClick={handleClick}>
      <section className="group-hover:rotate-y-180 relative h-full w-full duration-500 [transform-style:preserve-3d]">
        <FrontCardView title={title} />
        <BackCardView description={description} />
      </section>
    </main>
  );
};

export default CategoryItem;
