import { FC } from 'react';
import { Trash2 } from 'lucide-react';

import { useRemoveAllCartItems } from '../model/use-remove-all-cart-items';

export const ClearCartButton: FC = () => {
  const clearCart = useRemoveAllCartItems();

  const onClickButton = () => {
    clearCart.mutate();
  };

  return (
    <button
      onClick={onClickButton}
      type='button'
      className='text-muted-foreground transition-colors hover:text-foreground'>
      <div className='text-md flex items-center gap-1'>
        <Trash2 size={18} />
        <span>Очистить корзину</span>
      </div>
    </button>
  );
};
