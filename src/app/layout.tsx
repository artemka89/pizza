import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/header';

export const Layout: FC = () => {
  return (
    <div className='min-h-screen'>
      <Outlet />
    </div>
  );
};

export const CartLayout: FC = () => {
  return (
    <div className='min-h-screen'>
      <Header isProfile />
      <Outlet />
    </div>
  );
};
