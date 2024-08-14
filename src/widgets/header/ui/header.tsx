import { FC } from 'react';

import { CartIconButton } from '@/features/cart';
import { SearchProductInput } from '@/features/search-product';

import { Logo } from './logo/logo';
import { Layout } from './layout';
import { Profile } from './profile';

interface HeaderProps {
  isProfile?: boolean;
  showCartIcon?: boolean;
  showSearch?: boolean;
}

export const Header: FC<HeaderProps> = ({
  isProfile,
  showCartIcon,
  showSearch,
}) => {
  return (
    <Layout
      logo={<Logo />}
      search={showSearch && <SearchProductInput />}
      actions={
        <>
          {isProfile && <Profile />}
          {showCartIcon && <CartIconButton />}
        </>
      }
    />
  );
};
