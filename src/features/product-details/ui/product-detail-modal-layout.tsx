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
  onCloseModal: (open: boolean) => void;
}

export const ProductDetailModalLayout: FC<ProductDetailModalLayoutProps> = ({
  title,
  children,
  action,
  image,
  onCloseModal,
}) => {
  return (
    <Dialog open={!!title} onOpenChange={onCloseModal}>
      <DialogContent className='h-[610px] w-[924px] max-w-[924px] bg-background'>
        <div className='relative flex'>
          <div className='flex h-full w-[506px] items-center justify-center'>
            {image}
          </div>
          <div className='flex-1'>
            <ScrollArea className='absolute -mr-[22px] h-[488px]'>
              <div className='px-7'>
                <DialogTitle className='mb-1 text-[24px] font-medium'>
                  {title}
                </DialogTitle>
                {children}
              </div>
            </ScrollArea>
            <div className='mx-7 mt-6'>{action}</div>
          </div>
        </div>
        <DialogDescription className='hidden'></DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
