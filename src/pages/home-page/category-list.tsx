import { FC, useState } from 'react';

import { cn } from '@/shared/lib/cn';

const items = [
  {
    id: '1',
    title: 'Пиццы',
  },
  {
    id: '2',
    title: 'Завтраки',
  },
  {
    id: '3',
    title: 'Напитки',
  },
  {
    id: '4',
    title: 'Десерты',
  },
  {
    id: '5',
    title: 'Кофе',
  },
];

interface CategoryListProps {
  className?: string;
}

export const CategoryList: FC<CategoryListProps> = ({ className }) => {
  const [activeCategory, setActiveCategory] = useState('1');

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
  };

  return (
    <ul
      className={cn(
        'inline-flex h-12 items-center gap-2 rounded-2xl bg-secondary px-1',
        className,
      )}>
      {items.map((item) => (
        <li key={item.id}>
          <CategoryButton
            item={item}
            activeId={activeCategory}
            changeCategory={handleCategoryClick}
          />
        </li>
      ))}
    </ul>
  );
};

interface CategoryButtonProps {
  item: { id: string; title: string };
  activeId: string;
  changeCategory: (id: string) => void;
  className?: string;
}

const CategoryButton: FC<CategoryButtonProps> = ({
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
