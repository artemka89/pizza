import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useGetProductDetail } from '@/entities/products';
import { PizzaDetail } from '@/features/product-details';

enum CATEGORY_TYPE {
  PIZZA = 'pizza',
  DRINK = 'drink',
}
export const ProductDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useGetProductDetail(id || '');

  switch (data?.category.type) {
    case CATEGORY_TYPE.PIZZA:
      return <PizzaDetail data={data} />;

    default:
      return null;
  }
};
