import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useGetCategories } from '@/entities/category';
import { CATEGORY_TYPE } from '@/shared/lib/constants/category-type';
import {} from '@/widgets/product-details';

import { PizzaDetail } from './pizza-detail/ui/pizza-detail';

export const ProductDetailFabric: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: categories } = useGetCategories();
  const category = categories?.find((item) => {
    const currentCategory = item.products.find((product) => product.id === id);
    return currentCategory;
  });

  if (!id) {
    throw new Error('Product id not found');
  }

  switch (category?.type) {
    case CATEGORY_TYPE.PIZZA:
      return <PizzaDetail id={id} />;

    default:
      return null;
  }
};
