import { FC } from 'react';

import { PageContainer } from '@/shared/ui/layouts/page-container';

interface LayoutProps {
  topBar?: React.ReactNode;
  sideBar?: React.ReactNode;
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ topBar, sideBar, children }) => {
  return (
    <PageContainer>
      <div className='mt-10 flex items-center justify-between'>{topBar}</div>
      <div className='mt-10 flex gap-16'>
        {sideBar}
        <div className='flex-1'>{children}</div>
      </div>
    </PageContainer>
  );
};
