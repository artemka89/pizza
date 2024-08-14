import { FC } from 'react';

import { PageContainer } from '@/shared/ui/layouts/page-container';
import { CartDrawer } from '@/widgets/cart-drawer';
import { Header } from '@/widgets/header';

export const ProfilePage: FC = () => {
  return (
    <>
      <Header showCartIcon />
      <PageContainer className='container'>
        <div>Profile</div>
      </PageContainer>
      <CartDrawer />
    </>
  );
};
