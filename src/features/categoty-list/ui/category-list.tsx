import { FC, useState } from 'react';

import { CategoryItem, useGetCategories } from '@/entities/category';

export const CategoryList: FC = () => {
  const { data } = useGetCategories();

  const [activeCategory, setActiveCategory] = useState('');

  const categories = data?.filter((item) => item.products.length > 0);

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
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
            activeId={activeCategory}
            changeCategory={handleCategoryClick}
          />
        </li>
      ))}
    </ul>
  );
};
