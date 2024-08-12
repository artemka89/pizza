import { FC } from 'react';

import { cn } from '@/shared/lib/cn';
import { Title } from '@/shared/ui/title';

interface GraySectionProps {
  title?: string;
  actions?: JSX.Element;
  children: React.ReactNode;
  className?: string;
}

export const GraySection: FC<GraySectionProps> = ({
  title,
  actions,
  children,
  className,
}) => {
  return (
    <section
      className={cn(className, 'rounded-2xl bg-muted/60 px-6 pb-10 pt-6')}>
      <div className='mb-6 flex items-center justify-between'>
        {title && <Title size='sm'>{title}</Title>}
        {actions}
      </div>
      {children}
    </section>
  );
};
