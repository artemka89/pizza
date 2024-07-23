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

  const categories = data?.filter((item) => item.productAmount > 0);

  const handleCategoryClick = (id: string) => {
    setActiveCategoryId(id);
  };

  return (
    <ul className={'inline-flex h-12 items-center gap-2 px-1'}>
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
