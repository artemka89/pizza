import { FC } from 'react';

import { ProductDetailLayout } from '@/entities/product';
import { AddToCartButton } from '@/features/cart';
import {
  PizzaImage,
  PizzaOptionSwitcher,
  ProductIngredientList,
  SelectedOptionText,
} from '@/features/product-details';

import { useGetPizzaDetail } from '../model/use-get-pizza-detail';

interface PizzaDetailProps {
  id: string;
}

export const PizzaDetail: FC<PizzaDetailProps> = ({ id }) => {
  const { data: pizza } = useGetPizzaDetail(id);

  if (!pizza) {
    return null;
  }

  return (
    <ProductDetailLayout
      title={pizza.name}
      contents={pizza.contents}
      image={<PizzaImage imageId={pizza.imageId} />}
      params={<SelectedOptionText sizeName='см' weightName='г' />}
      options={<PizzaOptionSwitcher options={pizza.options} />}
      ingredients={<ProductIngredientList items={pizza.ingredients} />}
      addToCartButton={
        <AddToCartButton categoryId={pizza.category.id} productId={pizza.id} />
      }
    />
  );
};
