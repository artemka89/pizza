import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useGetProductDetail } from '@/entities/products';
import { PizzaDetail } from '@/features/product-details';
import { CoffeeDetail } from '@/features/product-details';
import { DrinkDetail } from '@/features/product-details';

enum CATEGORY_TYPE {
  PIZZA = 'Пиццы',
  COFFEE = 'Кофе',
  DRINK = 'Напитки',
}
export const ProductDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useGetProductDetail(id || '');

  switch (data?.category.name) {
    case CATEGORY_TYPE.PIZZA:
      return <PizzaDetail data={data} />;
    case CATEGORY_TYPE.COFFEE:
      return <CoffeeDetail data={data} />;
    case CATEGORY_TYPE.DRINK:
      return <DrinkDetail data={data} />;

    default:
      return null;
  }
};
