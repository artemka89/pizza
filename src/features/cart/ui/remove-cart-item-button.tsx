import { FC } from 'react';
import { Trash2 } from 'lucide-react';

import { useRemoveCartItem } from '../model/use-remove-cart-item';
interface RemoveCartItemButtonProps {
  cartItemId: string;
}

export const RemoveCartItemButton: FC<RemoveCartItemButtonProps> = ({
  cartItemId,
}) => {
  const removeCartItem = useRemoveCartItem();

  const onCLickRemove = () => {
    removeCartItem.mutate(cartItemId);
  };

  return (
    <button
      onClick={onCLickRemove}
      className='text-secondary-foreground/70 transition-colors hover:text-secondary-foreground'>
      <Trash2 size={18} />
    </button>
  );
};
