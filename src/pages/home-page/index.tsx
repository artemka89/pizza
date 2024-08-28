import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { CartIconButton } from '@/features/cart';
import { CategoryList } from '@/features/category-list';
import { CartDrawer } from '@/widgets/cart-drawer';
import { Header } from '@/widgets/header';
import { ProductList } from '@/widgets/product-list';

import { Layout } from './ui/layout';

export const HomePage: FC = () => {
  return (
    <>
      <Header isProfile showSearch />
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
