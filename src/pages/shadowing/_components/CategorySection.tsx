import { useEffect, useState } from "react";
import { AxiosError } from "axios";

import CategoryItem from "./CategoryItem"; // 카테고리 아이템 컴포넌트

import { instance } from "@/api/instance";

interface Category {
  category_id: number;
  category_name: string;
  description: string;
  category_image_url: string;
}

const CategorySection = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await instance.get("categories");
        if (response.status === 200) {
          setCategories(response.data.categories);
        }
      } catch (error: unknown) {
        if (
          error instanceof AxiosError &&
          error.response &&
          error.response.status === 404
        ) {
          setError("카테고리가 없습니다.");
        } else {
          setError("카테고리를 가져오는 중 오류가 발생했습니다.");
        }
      }
    };

    fetchCategories();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="category-section mx-auto grid gap-y-[90px] sm:grid-cols-1 sm:gap-x-8 lg:grid-cols-2 lg:gap-x-10 xl:grid-cols-3 xl:gap-x-20">
      {categories.length > 0 ? (
        categories.map(category => (
          <CategoryItem key={category.category_id} category={category} />
        ))
      ) : (
        <p>카테고리를 불러오는 중입니다...</p>
      )}
    </div>
  );
};

export default CategorySection;
