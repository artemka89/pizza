import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

import logoIcon from '@/shared/assets/icons/logo.png';
import { cn } from '@/shared/lib/cn';
import { PageContainer } from '@/shared/ui/layouts/page-container';
interface LayoutProps {
  nav?: React.ReactNode;
  actions?: React.ReactNode;
  sideBar?: React.ReactNode;
  productList: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({
  nav,
  actions,
  sideBar,
  productList,
}) => {
  const { ref, inView } = useInView({
    root: null,
    threshold: 1,
    rootMargin: '-10px 0px 0px 0px',
  });

  const isAnimate = !inView;

  return (
    <PageContainer>
      <nav
        className={cn(
          'sticky top-0 z-10 w-full bg-background/75 py-2 backdrop-blur-xl transition-colors',
          isAnimate && 'bg-secondary/75 drop-shadow-sm',
        )}>
        <div ref={ref} className='container flex items-center overflow-hidden'>
          <div
            className={cn(
              'flex -translate-x-16 items-center transition-transform ease-in-out',
              isAnimate && 'translate-x-0',
            )}>
            <img src={logoIcon} alt='Logo' className='mr-4 size-8' />
            <div>{nav}</div>
          </div>
          <div className='ml-auto'>{actions}</div>
        </div>
      </nav>
      <div className='container mt-10 flex gap-16'>
        {sideBar}
        <div className='flex-1'>{productList}</div>
      </div>
    </PageContainer>
  );
};
