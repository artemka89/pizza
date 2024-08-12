import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { CartIconButton } from '@/features/cart';
import { CategoryList } from '@/features/category-list';
import { ProductList } from '@/features/product-list';
import { CartDrawer } from '@/widgets/cart-drawer';

import { Layout } from './ui/layout';

export const HomePage: FC = () => {
  return (
    <>
      <Layout
        nav={<CategoryList />}
        actions={<CartIconButton />}
        productList={<ProductList />}
      />
      <Outlet />
      <CartDrawer />
    </>
  );
};
