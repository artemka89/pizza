import { FC } from 'react';
import { Link } from 'react-router-dom';

import logoIcon from '@/shared/assets/icons/logo.png';
import { cn } from '@/shared/lib/cn';
import { ROUTES } from '@/shared/lib/constants/routes';

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link to={ROUTES.HOME} className={cn('flex gap-2', className)}>
      <div className={cn(className)}>
        <img src={logoIcon} alt='Logo' />
      </div>
      <div>
        <span className='text-2xl font-black'>ПИЦЦА</span>
      </div>
    </Link>
  );
};
