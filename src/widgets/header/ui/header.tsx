import { FC } from 'react';

import { SignOutButton } from '@/features/auth';
import { CartIconButton } from '@/features/cart';
import { SearchProductInput } from '@/features/product';

import { Logo } from './logo/logo';
import { Layout } from './layout';
import { Profile } from './profile';

interface HeaderProps {
  isProfile?: boolean;
  showSignOut?: boolean;
  showCartIcon?: boolean;
  showSearch?: boolean;
}

export const Header: FC<HeaderProps> = ({
  isProfile,
  showSignOut,
  showCartIcon,
  showSearch,
}) => {
  return (
    <Layout
      logo={<Logo />}
      search={showSearch && <SearchProductInput />}
      actions={
        <>
          {showSignOut && <SignOutButton />}
          {isProfile && <Profile />}
          {showCartIcon && <CartIconButton />}
        </>
      }
    />
  );
};
