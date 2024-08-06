import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useGetProductDetail } from '@/entities/products';
import { DrinkDetail } from '@/features/product-details';
import { CATEGORY_TYPE } from '@/shared/lib/constants/category-type';
import { CoffeeDetail, PizzaDetail } from '@/widgets/product-detail';

export const ProductDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useGetProductDetail(id || '');

  switch (data?.category.name) {
    case CATEGORY_TYPE.PIZZA:
      return <PizzaDetail />;
    case CATEGORY_TYPE.COFFEE:
      return <CoffeeDetail />;
    case CATEGORY_TYPE.DRINK:
      return <DrinkDetail data={data} />;

    default:
      return null;
  }
};
