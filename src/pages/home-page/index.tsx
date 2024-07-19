import { FC } from 'react';

import { getPizzaImageUrl } from '@/entities/pizza';
import { PizzaList } from '@/features/pizza-list';
import { Button } from '@/shared/ui/button';
import { ProductCardLayout } from '@/shared/ui/layouts/product-card-layout';

import { Layout } from './ui/layout';
import { CategoryList } from './category-list';
import { FilterSideBar } from './filter-side-bar';
import { SortPopup } from './sort-popup';

export const HomePage: FC = () => {
  return (
    <Layout
      topBar={
        <>
          <CategoryList />
          <SortPopup />
        </>
      }
      sideBar={<FilterSideBar />}>
      <PizzaList
        renderPizzas={(pizza) => (
          <ProductCardLayout
            key={pizza.id}
            item={pizza}
            imageUrl={() => getPizzaImageUrl({ id: pizza.imageId })}
            action={<Button variant='outline'>Добавить</Button>}
          />
        )}
      />
    </Layout>
  );
};
