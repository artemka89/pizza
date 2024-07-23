import { FC } from 'react';

import { useGetCategories } from '@/entities/category';

import { CategoryWithProducts } from '../model/types';

interface ProductListsProps {
  renderCategoriesWithProducts: (
    category: CategoryWithProducts,
  ) => React.ReactNode;
}

export const ProductLists: FC<ProductListsProps> = ({
  renderCategoriesWithProducts,
}) => {
  const { data } = useGetCategories();

  const categoryWithProducts = data?.filter((item) => item.products.length > 0);

  return (
    <div className='space-y-10'>
      {categoryWithProducts?.map(renderCategoriesWithProducts)}
    </div>
  );
};
