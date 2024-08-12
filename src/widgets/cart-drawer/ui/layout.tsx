import { FC } from 'react';

import { useCartStore } from '@/entities/cart';
import { ScrollArea } from '@/shared/ui/scroll-area';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from '@/shared/ui/sheet';
import { Title } from '@/shared/ui/title';

interface LayoutProps {
  payButton: JSX.Element;
  children: React.ReactNode;
  totalPrice: number;
  totalAmountText: string;
}

export const Layout: FC<LayoutProps> = ({
  totalAmountText,
  totalPrice,
  payButton,
  children,
}) => {
  const [showCart, setShowCart] = useCartStore((state) => [
    state.show,
    state.setShow,
  ]);

  return (
    <Sheet open={showCart} onOpenChange={setShowCart}>
      <SheetContent className='flex flex-col gap-0 bg-secondary p-0'>
        {totalPrice ? (
          <>
            <div className='px-4 py-5 text-xl shadow'>
              <Title>
                В корзине <span className='font-bold'>{totalAmountText}</span>
              </Title>
            </div>
            <div className='relative -z-10 flex-grow'>
              <ScrollArea>
                <div className='max-h-[calc(100vh-228px)] space-y-2'>
                  {children}
                </div>
              </ScrollArea>
            </div>
            <div className='block w-full bg-background p-6 shadow-[0px_-22px_52px_-4px_rgba(34,60,80,0.15)]'>
              <div className='flex w-full items-center justify-between'>
                <span>Итого: </span>
                <span className='mx-1 flex-1 translate-y-1 border-b border-dashed border-secondary-foreground/20' />
                <span className='font-bold'>{totalPrice} ₽</span>
              </div>
              <div className='my-6'>{payButton}</div>
            </div>
          </>
        ) : (
          <div className='flex h-full flex-col items-center justify-center p-4'>
            <Title>Корзина пустая</Title>
            <p className='text-center text-muted-foreground'>
              Ваша корзина пуста, откройте «Меню» и выберите понравившийся
              товар.
            </p>
          </div>
        )}
        <SheetTitle className='invisible' />
        <SheetDescription className='invisible' />
      </SheetContent>
    </Sheet>
  );
};
