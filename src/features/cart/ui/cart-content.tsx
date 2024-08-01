import { FC } from 'react';

import { ScrollArea } from '@/shared/ui/scroll-area';
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/shared/ui/sheet';

interface CartContentLayoutProps {
  header: JSX.Element;
  footer: JSX.Element;
  payButton: JSX.Element;
  children: React.ReactNode;
}

export const CartContentLayout: FC<CartContentLayoutProps> = ({
  header,
  footer,
  payButton,
  children,
}) => {
  return (
    <SheetContent className='flex flex-col gap-0 bg-secondary p-0'>
      <SheetHeader className='px-4 py-5 text-xl shadow'>{header}</SheetHeader>
      <div className='relative -z-10 flex-grow'>
        <ScrollArea>
          <div className='max-h-[calc(100vh-228px)] space-y-2'>{children}</div>
        </ScrollArea>
      </div>
      <SheetFooter className='block w-full bg-background p-6 shadow-[0px_-22px_52px_-4px_rgba(34,60,80,0.15)]'>
        {footer}
        <div className='my-6 w-full'>
          <SheetClose className='w-full'>{payButton}</SheetClose>
        </div>
      </SheetFooter>
      <SheetTitle className='invisible' />
      <SheetDescription className='invisible' />
    </SheetContent>
  );
};
