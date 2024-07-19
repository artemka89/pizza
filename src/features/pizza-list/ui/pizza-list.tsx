import { FC } from 'react';

import { useGetPizzas } from '@/entities/pizza';
import { ProductListLayout } from '@/shared/ui/layouts/product-list-layout';

import { Pizza } from '../model/types';

interface PizzaListProps {
  renderPizzas: (pizza: Pizza) => React.ReactNode;
}

export const PizzaList: FC<PizzaListProps> = ({ renderPizzas }) => {
  const { data: pizzas } = useGetPizzas('');
  return (
    <ProductListLayout title='Пиццы'>
      {pizzas?.map(renderPizzas)}
    </ProductListLayout>
  );
};
