import { FC } from 'react';

import { useGetPizzas } from '@/entities/pizza';
import { Header } from '@/widgets/header';

import { CategoryList } from './category-list';
import { FilterSideBar } from './filter-side-bar';
import { ProductCard, ProductList } from './product-list';
import { SortPopup } from './sort-popup';

export const HomePage: FC = () => {
  const { data: pizzas } = useGetPizzas('');

  return (
    <main className='container min-h-screen'>
      <Header />
      <div className='mt-10 flex items-center justify-between'>
        <CategoryList />
        <SortPopup />
      </div>
      <div className='mt-10 flex gap-16'>
        <FilterSideBar />
        <div className='flex-1'>
          <ProductList title='Пиццы'>
            {pizzas?.map((pizza) => (
              <ProductCard key={pizza.id} item={pizza} />
            ))}
          </ProductList>
        </div>
      </div>
    </main>
  );
};
