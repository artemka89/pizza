import { FC } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/shared/ui/dialog';

interface AuthModalProps {
  onClose?: () => void;
  children: React.ReactNode;
}

export const AuthModal: FC<AuthModalProps> = ({ onClose, children }) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className='max-w-[400px] bg-background'>
        {children}
        <DialogTitle className='hidden' />
        <DialogDescription className='hidden' />
      </DialogContent>
    </Dialog>
  );
};
