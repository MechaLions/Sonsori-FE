import FrontCardView from "./FrontCardView";
import BackCardView from "./BackCardView";

interface CategoryItemProps {
  title: string;
  description: string;
}

const CategoryItem = (props: CategoryItemProps) => {
  const { title, description } = props;
  return (
    <main className="card-static-size group">
      <section className="group-hover:rotate-y-180 relative h-full w-full duration-500 [transform-style:preserve-3d]">
        <FrontCardView title={title} />
        <BackCardView description={description} />
      </section>
    </main>
  );
};

export default CategoryItem;
