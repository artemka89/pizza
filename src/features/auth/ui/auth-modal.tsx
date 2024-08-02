import { FC } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';

interface AuthModalProps {
  title?: string;
  onClose?: () => void;
  children: React.ReactNode;
}

export const AuthModal: FC<AuthModalProps> = ({ title, onClose, children }) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className='max-w-[400px] bg-background'>
        <DialogHeader>
          <DialogTitle className='text-bold text-center text-xl'>
            {title}
          </DialogTitle>
        </DialogHeader>
        {children}

        <DialogDescription className='hidden' />
      </DialogContent>
    </Dialog>
  );
};
