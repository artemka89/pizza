import { FC } from 'react';

import { cn } from '@/shared/lib/cn';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const PageContainer: FC<PageContainerProps> = ({
  children,
  className,
}) => {
  return <main className={cn('grow', className)}>{children}</main>;
};
