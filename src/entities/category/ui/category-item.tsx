import { FC } from 'react';

import { cn } from '@/shared/lib/cn';

interface CategoryItemProps {
  item: { id: string; title: string };
  activeId: string;
  changeCategory: (id: string) => void;
  className?: string;
}

export const CategoryItem: FC<CategoryItemProps> = ({
  item,
  activeId,
  changeCategory,
  className,
}) => {
  const isActive = activeId === item.id;

  return (
    <button
      onClick={() => changeCategory(item.id)}
      className={cn(
        'h-10 px-4 py-2 font-bold transition-colors hover:text-primary',
        isActive && 'rounded-2xl bg-background text-primary shadow-sm',
        className,
      )}>
      {item.title}
    </button>
  );
};
