import { FC } from 'react';

import { useCartStore } from '@/entities/cart';
import { Sheet } from '@/shared/ui/sheet';

interface CartSheetProps {
  children: React.ReactNode;
}

export const CartSheet: FC<CartSheetProps> = ({ children }) => {
  const [showCart, setShowCart] = useCartStore((state) => [
    state.show,
    state.setShow,
  ]);

  return (
    <Sheet open={showCart} onOpenChange={setShowCart}>
      {children}
    </Sheet>
  );
};
