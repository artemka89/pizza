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
  children: React.ReactNode;
}

export const AuthModal: FC<AuthModalProps> = ({ title, children }) => {
  return (
    <Dialog open={true} onOpenChange={() => {}}>
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
