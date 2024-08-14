import { FC } from 'react';

interface LayoutProps {
  logo: React.ReactNode;
  search?: React.ReactNode;
  actions?: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ logo, search, actions }) => {
  return (
    <header className='container border-b border-secondary py-2'>
      <div className='flex h-16 items-center justify-between gap-4'>
        {logo}
        {search}
        <div className='flex items-center gap-2'>{actions}</div>
      </div>
    </header>
  );
};
