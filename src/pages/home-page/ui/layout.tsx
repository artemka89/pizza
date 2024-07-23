import { FC, useRef } from 'react';
import { useIntersection } from 'react-use';

import logoIcon from '@/shared/assets/icons/logo.png';
import { cn } from '@/shared/lib/cn';
interface LayoutProps {
  topBar?: React.ReactNode;
  sideBar?: React.ReactNode;
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ topBar, sideBar, children }) => {
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    threshold: 1,
    rootMargin: '-10px 0px 0px 0px',
  });

  const isAnimate = intersection && intersection.intersectionRatio < 1;

  return (
    <>
      <nav
        className={cn(
          'sticky top-0 z-10 w-full bg-background/75 py-2 backdrop-blur-xl transition-colors',
          isAnimate && 'bg-secondary/75 drop-shadow-sm',
        )}>
        <div ref={intersectionRef} className='container overflow-hidden'>
          <div
            className={cn(
              'inline-flex -translate-x-16 items-center transition-transform',
              isAnimate && 'translate-x-0',
            )}>
            <img src={logoIcon} alt='Logo' className='mr-4 size-8' />
            <div>{topBar}</div>
          </div>
        </div>
      </nav>
      <div className='container mt-10 flex gap-16'>
        {sideBar}
        <div className='flex-1'>{children}</div>
      </div>
    </>
  );
};
