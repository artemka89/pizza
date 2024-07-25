import { FC, useState } from 'react';

import { getProductImageUrl, useGetProductDetail } from '@/entities/products';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog';
import { ScrollArea } from '@/shared/ui/scroll-area';

import { PizzaImage } from './pizza-image';
import { PizzaOptions } from './pizza-options';

const tags = Array.from({ length: 50 }).map((_, i) => `Ингридиент - ${i + 1}`);

interface PizzaDetailProps {
  id: string;
  className?: string;
}

export const PizzaDetail: FC<PizzaDetailProps> = ({ id, className }) => {
  const { data } = useGetProductDetail(id);
  const [activeOptionSize, setActiveOptionSize] = useState('30');

  const activeOption = data?.options.find(
    (option) => option.size.toString() === activeOptionSize,
  );

  const imageUrl = getProductImageUrl({
    id: data?.imageId || '',
    size: 'big',
  }).toString();

  if (!data) return null;

  return (
    <div className={cn(className)}>
      <Dialog>
        <DialogTrigger asChild>
          <Button>В корзину</Button>
        </DialogTrigger>
        <DialogContent className='h-[610px] w-[924px] max-w-[924px] bg-background pr-1'>
          <div className='flex'>
            <div className='flex h-full w-[530px] items-center justify-center'>
              <PizzaImage size={activeOption?.size} imageUrl={imageUrl} />
            </div>
            <div className='flex-1'>
              <ScrollArea className='h-[488px] px-7'>
                <DialogTitle className='mb-1 text-[24px] font-medium'>
                  {data.name}
                </DialogTitle>
                <div className='mb-2 text-muted-foreground'>
                  {activeOption?.size} см, {activeOption?.weight} гр
                </div>
                <div className='mb-4 text-sm leading-none'>
                  {data?.contents}
                </div>
                <PizzaOptions
                  options={data.options}
                  activeOptionSize={activeOptionSize}
                  setActiveOptionSize={setActiveOptionSize}
                />

                <DialogTitle className='mb-2 text-[24px] font-medium'>
                  Добавить по вкусу
                </DialogTitle>

                {tags.map((tag) => (
                  <div key={tag} className='text-sm'>
                    {tag}
                  </div>
                ))}
              </ScrollArea>
              <div className='mx-7 mt-6'>
                <Button className='h-12 w-full text-base'>
                  В корзину за 299 ₽
                </Button>
              </div>
            </div>
          </div>
          <DialogDescription className='hidden'></DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};
