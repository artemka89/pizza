import { FC } from 'react';

import { CartButton } from '@/features/cart';
import { SearchProductInput } from '@/features/search-product';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';

import { Logo } from './logo/logo';

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={cn('container border-b border-secondary py-2', className)}>
      <div className='flex h-16 items-center justify-between gap-4'>
        <Logo />
        <SearchProductInput />
        <div className='flex gap-2'>
          <Button variant='outline'>Войти</Button>
          <CartButton />
        </div>
      </div>
    </header>
  );
};
