import { FC } from 'react';
import { ArrowRight, Minus, Plus } from 'lucide-react';

import { Button } from '@/shared/ui/button';
import { ScrollArea } from '@/shared/ui/scroll-area';
import { Separator } from '@/shared/ui/separator';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/ui/sheet';
import { Title } from '@/shared/ui/title';

import { CartButton } from './cart-button';
interface CartProps {
  className?: string;
}

export const Cart: FC<CartProps> = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <CartButton />
      </SheetTrigger>
      <SheetContent className='flex flex-col gap-0 bg-secondary p-0'>
        <SheetHeader className='px-4 py-5 text-xl shadow'>
          <SheetTitle>
            В корзине <span className='font-bold'>{3} товара</span>
          </SheetTitle>
        </SheetHeader>
        <div className='relative -z-10 flex-grow'>
          <ScrollArea classNameViewport=''>
            <div className='max-h-[calc(100vh-228px)] space-y-2'>
              {[...Array(7)].map((_, i) => (
                <div key={i} className='flex gap-4 bg-background p-4'>
                  <div className='size-[64px]'>
                    <img
                      src='https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif'
                      alt='pizza'
                      className='h-full w-full'
                    />
                  </div>
                  <div>
                    <Title size='xs'>Пицца Чизбургер</Title>
                    <span className='text-sm text-secondary-foreground'>
                      Средняя 30 см, стандартное тесто
                    </span>
                    <Separator className='mb-4 mt-3' />
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <Button
                          variant={'outline'}
                          size={'icon'}
                          className='size-7 rounded-lg p-0'>
                          <Minus />
                        </Button>
                        <span className='font-bold'>{2}</span>
                        <Button
                          variant={'outline'}
                          size={'icon'}
                          className='size-7 rounded-lg p-0'>
                          <Plus />
                        </Button>
                      </div>
                      <div className='font-bold'>{965} ₽</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
        <SheetFooter className='bg-background p-6 shadow-[0px_-22px_52px_-4px_rgba(34,60,80,0.15)]'>
          <div className='w-full'>
            <div className='flex items-center justify-between'>
              <span>Итого: </span>
              <span className='mx-1 flex-1 translate-y-1 border-b border-dashed border-secondary-foreground/20' />
              <span className='font-bold'>{2965} ₽</span>
            </div>

            <SheetClose className='my-6 w-full'>
              <Button className='group relative w-full'>
                Оформить заказ
                <ArrowRight className='absolute right-14 w-5 animate-duration-1000 animate-ease-linear group-hover:animate-shake group-hover:animate-infinite' />
              </Button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
