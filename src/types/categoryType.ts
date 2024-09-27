export type CategoryResponse = {
  categories: CategoryItem[];
};

export type CategoryItem = {
  category_id: number;
  category_name: string;
  description: string;
  category_image_url: string;
};
