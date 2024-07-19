import { FC } from 'react';

import { Header } from '@/widgets/header';

import { CategoryList } from './category-list';
import { FilterSideBar } from './filter-side-bar';
import { ProductCard, ProductList } from './product-list';
import { SortPopup } from './sort-popup';

const pizzas = [
  {
    id: '1',
    name: 'Пицца',
    price: 1000,
    image:
      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: '2',
    name: 'Пицца',
    price: 1000,
    image:
      'https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: '3',
    name: 'Пицца',
    price: 1000,
    image:
      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: '4',
    name: 'Пицца',
    price: 1000,
    image:
      'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];

export const HomePage: FC = () => {
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
            {pizzas.map((pizza) => (
              <ProductCard key={pizza.id} item={pizza} />
            ))}
          </ProductList>
        </div>
      </div>
    </main>
  );
};
