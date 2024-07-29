import { FC } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/shared/ui/dialog';

interface ProductModalLayoutProps {
  open: boolean;
  children: React.ReactNode;
  onCloseModal: (value: boolean) => void;
}

export const ProductModalLayout: FC<ProductModalLayoutProps> = ({
  open,
  children,
  onCloseModal,
}) => {
  return (
    <Dialog open={open} onOpenChange={onCloseModal}>
      <DialogContent className='h-[610px] max-w-[924px] bg-background'>
        {children}
        <DialogTitle className='hidden' />
        <DialogDescription className='hidden' />
      </DialogContent>
    </Dialog>
  );
};
