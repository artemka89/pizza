import { FC } from 'react';

import { useGetUser } from '@/entities/user';
import { CartDrawer } from '@/widgets/cart-drawer';
import { Header } from '@/widgets/header';

import { Layout } from './layout';
import { ProfileForm } from './profile-form';

export const ProfilePage: FC = () => {
  const user = useGetUser();

  if (!user.data) {
    return null;
  }

  return (
    <>
      <Header showCartIcon />
      <Layout form={<ProfileForm data={user.data} />} />
      <CartDrawer />
    </>
  );
};
