import FrontCardView from "@/components/FrontCardView";
import BackCardView from "@/components/BackCardView";

import { useQueryPronunQuizList } from "@/hooks/queries/useQueryPronunQuizList";

import { usePronunciationFlow } from "@/utils/usePronunciationFlow";
import { setPronunciationId } from "@/utils/handleCategoryID";

import { usePronunQuizStore } from "@/store/usePronunQuizStore";

interface CategoryItemProps {
  id: number;
  title: string;
  description: string;
  category_image_url: string;
}

const CategoryItem = (props: CategoryItemProps) => {
  const { id, title, description, category_image_url } = props;

  const { push } = usePronunciationFlow();
  const { refetch } = useQueryPronunQuizList(id);
  const setPronunQuizList = usePronunQuizStore(
    state => state.setPronunQuizList,
  );

  const handleClick = async () => {
    setPronunciationId(id.toString());

    const { data: quizList } = await refetch();
    if (quizList) {
      setPronunQuizList(quizList);
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

// import FrontCardView from "@/components/FrontCardView";
// import BackCardView from "@/components/BackCardView";

// import { useQueryPronunQuizList } from "@/hooks/queries/useQueryPronunQuizList";

// import { usePronunciationFlow } from "@/utils/usePronunciationFlow";
// import { setPronunciationId } from "@/utils/handleCategoryID";

// interface CategoryItemProps {
//   id: number;
//   title: string;
//   description: string;
//   category_image_url: string;
// }

// const CategoryItem = (props: CategoryItemProps) => {
//   const { id, title, description, category_image_url } = props;

//   const { push } = usePronunciationFlow();

//   const handleClick = () => {
//     setPronunciationId(id.toString());
//     const { data: quizList } = useQueryPronunQuizList(id);
//     push(
//       "QuizActivity",
//       {
//         step: 1,
//         quizList: quizList,
//       },
//       { animate: false },
//     );
//   };

//   return (
//     <main className="card-static-size group" onClick={handleClick}>
//       <section className="group-hover:rotate-y-180 relative h-full w-full duration-500 [transform-style:preserve-3d]">
//         <FrontCardView title={title} imageUrl={category_image_url} />
//         <BackCardView description={description} />
//       </section>
//     </main>
//   );
// };

// export default CategoryItem;
