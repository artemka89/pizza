import { FC } from 'react';

import logoIcon from '@/shared/assets/icons/logo.png';
import { cn } from '@/shared/lib/cn';

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn('flex gap-2', className)}>
      <div className={cn(className)}>
        <img src={logoIcon} alt='Logo' />
      </div>
      <div>
        <span className='text-2xl font-black'>ПИЦЦА</span>
      </div>
    </div>
  );
};
