import { FC } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/shared/ui/dialog';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const ProfileModal: FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='h-[300px] max-w-[300px] bg-background'>
        {children}
        <DialogTitle className='hidden' />
        <DialogDescription className='hidden' />
      </DialogContent>
    </Dialog>
  );
};
