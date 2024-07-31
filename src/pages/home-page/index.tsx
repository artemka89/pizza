import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { CartButton } from '@/features/cart';
import { CategoryList } from '@/features/category-list';
import { ProductList } from '@/features/product-list';

import { Layout } from './ui/layout';

export const HomePage: FC = () => {
  return (
    <>
      <Layout
        nav={<CategoryList />}
        actions={<CartButton />}
        productList={<ProductList />}
      />
      <Outlet />
    </>
  );
};
