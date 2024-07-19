import { FC } from 'react';

import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';
import { Title } from '@/shared/ui/title';

interface ProductListProps {
  title: string;
  columnsNumber?: 3 | 'auto';
  children: React.ReactNode;
}

export const ProductList: FC<ProductListProps> = ({
  title,
  columnsNumber = 'auto',
  children,
}) => {
  return (
    <div>
      <Title size='lg'>{title}</Title>
      <div
        className={cn(
          `my-10 grid w-full justify-center gap-4`,
          {
            3: ['grid-cols-[repeat(3,288px)]'],
            auto: ['grid-cols-[repeat(auto-fill,288px)]'],
          }[columnsNumber],
        )}>
        {children}
      </div>
    </div>
  );
};

interface ProductCardProps {
  item: {
    name: string;
    price: number;
    image: string;
    description: string;
  };
}

export const ProductCard: FC<ProductCardProps> = ({ item }) => {
  return (
    <div className='cursor-pointer space-y-3 p-4'>
      <div className='transition-transform hover:translate-y-1'>
        <img src={item.image} alt={item.name} className='h-full w-full' />
      </div>
      <Title size='sm'>{item.name}</Title>
      <div>{item.description}</div>
      <div className='flex items-center justify-between'>
        <span>от {item.price} ₽</span>
        <Button variant='outline'>Добавить</Button>
      </div>
    </div>
  );
};
