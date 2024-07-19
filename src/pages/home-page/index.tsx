import { FC } from 'react';

import { getPizzaImageUrl, useGetPizzas } from '@/entities/pizza';
import { Button } from '@/shared/ui/button';
import { ProductCardLayout } from '@/shared/ui/layouts/product-card-layout';
import { ProductListLayout } from '@/shared/ui/layouts/product-list-layout';

import { Layout } from './ui/layout';
import { CategoryList } from './category-list';
import { FilterSideBar } from './filter-side-bar';
import { SortPopup } from './sort-popup';

export const HomePage: FC = () => {
  const { data: pizzas } = useGetPizzas('');
  return (
    <Layout
      topBar={
        <>
          <CategoryList />
          <SortPopup />
        </>
      }
      sideBar={<FilterSideBar />}>
      <ProductListLayout title='Пиццы'>
        {pizzas?.map((pizza) => (
          <ProductCardLayout
            key={pizza.id}
            name={pizza.name}
            description={pizza.description}
            startPrice={pizza.options[0].price}
            imageUrl={() => getPizzaImageUrl({ id: pizza.imageId })}
            action={<Button variant='outline'>Добавить</Button>}
          />
        ))}
      </ProductListLayout>
    </Layout>
  );
};
