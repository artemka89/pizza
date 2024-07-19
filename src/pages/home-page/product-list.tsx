import { FC } from 'react';

import { getPizzaImageUrl } from '@/entities/pizza';
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
    imageId: string;
    description: string;
  };
}

export const ProductCard: FC<ProductCardProps> = ({ item }) => {
  const imageUrl = getPizzaImageUrl({
    id: item.imageId,
    size: 'small',
  });

  return (
    <div className='flex h-[418px] cursor-pointer flex-col items-center p-4'>
      <div className='h-[220px] w-[220px] transition-transform hover:translate-y-1'>
        <img
          src={imageUrl.toString()}
          alt={item.name}
          className='h-full w-full'
        />
      </div>
      <h4 className='pb-1 pt-2 text-center text-xl font-bold leading-tight'>
        {item.name}
      </h4>
      <div className='flex-1 overflow-hidden text-center text-sm text-muted-foreground'>
        <p className='line-clamp-4'>{item.description}</p>
      </div>

      <div className='flex w-full items-center justify-between'>
        <span className='text-lg font-bold'>от {399} ₽</span>
        <Button variant='outline'>Добавить</Button>
      </div>
    </div>
  );
};
