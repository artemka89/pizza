import { FC } from 'react';
import { Link } from 'react-router-dom';

import { CartIconButton } from '@/features/cart';
import { SearchProductInput } from '@/features/search-product';
import { cn } from '@/shared/lib/cn';
import { ROUTES } from '@/shared/lib/constants/routes';
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
          <Link to={ROUTES.AUTH}>
            <Button variant='outline'>Войти</Button>
          </Link>
          <CartIconButton />
        </div>
      </div>
    </header>
  );
};
