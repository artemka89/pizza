import { FC } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/shared/ui/dialog';
import { ScrollArea } from '@/shared/ui/scroll-area';

interface ProductDetailModalLayoutProps {
  title: string;
  children: React.ReactNode;
  action: JSX.Element;
  image: JSX.Element;
}

export const ProductDetailModalLayout: FC<ProductDetailModalLayoutProps> = ({
  title,
  children,
  action,
  image,
}) => {
  return (
    <Dialog open={true}>
      <DialogContent className='h-[610px] w-[924px] max-w-[924px] bg-background pr-1'>
        <div className='flex'>
          <div className='flex h-full w-[530px] items-center justify-center'>
            {image}
          </div>
          <div className='flex-1'>
            <ScrollArea className='h-[488px] px-7'>
              <DialogTitle className='mb-1 text-[24px] font-medium'>
                {title}
              </DialogTitle>
              {children}
            </ScrollArea>
            <div className='mx-7 mt-6'>{action}</div>
          </div>
        </div>
        <DialogDescription className='hidden'></DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
