import { FC } from 'react';

import {
  CategoryItem,
  useCategoryStore,
  useGetCategories,
} from '@/entities/category';

export const CategoryList: FC = () => {
  const { data } = useGetCategories();
  const [activeCategoryId, setActiveCategoryId] = useCategoryStore((state) => [
    state.activeCategoryId,
    state.setActiveCategoryId,
  ]);

  const categories = data?.filter((item) => item.products.length > 0);

  const handleCategoryClick = (id: string) => {
    setActiveCategoryId(id);
  };

  return (
    <ul
      className={
        'inline-flex h-12 items-center gap-2 rounded-2xl bg-secondary px-1'
      }>
      {categories?.map((item) => (
        <li key={item.id}>
          <CategoryItem
            item={item}
            activeId={activeCategoryId}
            changeCategory={handleCategoryClick}
          />
        </li>
      ))}
    </ul>
  );
};
