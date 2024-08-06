import { FC } from 'react';
import { Trash2 } from 'lucide-react';

import { Button } from '@/shared/ui/button';

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
    <Button
      variant='secondary'
      size='icon'
      onClick={onCLickRemove}
      disabled={removeCartItem.isPending}
      className='h-auto w-auto p-0 text-secondary-foreground/70 transition-colors hover:text-secondary-foreground'>
      <Trash2 size={18} />
    </Button>
  );
};
