import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/header';

export const Layout: FC = () => {
  return (
    <div className='min-h-screen'>
      <Outlet />
      <footer className='container mt-32 h-28 p-4'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non tenetur,
        mollitia dolore, debitis consequuntur culpa eveniet ratione id, rerum
        numquam consectetur fugit soluta aspernatur dolores perferendis rem cum
        suscipit vitae!
      </footer>
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
