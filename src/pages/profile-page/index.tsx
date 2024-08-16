import { FC } from 'react';

import { useGetUser } from '@/entities/user';
import { ProfileForm } from '@/features/profile';
import { CartDrawer } from '@/widgets/cart-drawer';
import { Header } from '@/widgets/header';

import { Layout } from './ui/layout';

export const ProfilePage: FC = () => {
  const user = useGetUser();

  if (!user.data) {
    return null;
  }

  return (
    <>
      <Header showCartIcon showSignOut />
      <Layout form={<ProfileForm data={user.data} />} />
      <CartDrawer />
    </>
  );
};
