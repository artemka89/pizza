import { FC } from 'react';

import { useGetProducts } from '@/entities/product';
import { ProductListLayout } from '@/shared/ui/layouts/product-list-layout';

import { Pizza } from '../model/types';

interface PizzaListProps {
  renderPizzas: (pizza: Pizza) => React.ReactNode;
}

export const PizzaList: FC<PizzaListProps> = ({ renderPizzas }) => {
  const { data: pizzas } = useGetProducts();

  return (
    <ProductListLayout title='Пиццы'>
      {pizzas?.map(renderPizzas)}
    </ProductListLayout>
  );
};
