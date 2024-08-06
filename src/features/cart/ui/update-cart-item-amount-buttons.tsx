import { FC } from 'react';
import { Minus, Plus } from 'lucide-react';

import { Button } from '@/shared/ui/button';
import { Spinner } from '@/shared/ui/spinner';

import { useUpdateCartItemAmount } from '../model/use-update-item-amount';

interface UpdateCartItemAmountButtonProps {
  cartItemId: string;
  amount: number;
}

export const UpdateCartItemAmountButton: FC<
  UpdateCartItemAmountButtonProps
> = ({ cartItemId, amount }) => {
  const updateCartItemAmount = useUpdateCartItemAmount();

  const isDisabledMinus = updateCartItemAmount.isPending ? true : amount <= 1;

  const isDisabledPlus = updateCartItemAmount.isPending ? true : amount >= 99;

  const isLoadingButtons =
    updateCartItemAmount.isPending || updateCartItemAmount.isPending;

  const onClickMinus = () => {
    if (isLoadingButtons) return;
    updateCartItemAmount.mutate({ id: cartItemId, amount: amount - 1 });
  };

  const onCLickPlus = () => {
    if (isLoadingButtons) return;
    updateCartItemAmount.mutate({ id: cartItemId, amount: amount + 1 });
  };

  return (
    <div className='flex items-center gap-2'>
      <Button
        onClick={onClickMinus}
        disabled={isDisabledMinus}
        variant='outline'
        size='icon'
        className='size-6 rounded-lg p-0'>
        <Minus />
      </Button>
      <span className='relative flex items-center justify-center font-bold'>
        {isLoadingButtons && (
          <Spinner className='absolute size-6 text-primary' />
        )}
        {amount}
      </span>
      <Button
        onClick={onCLickPlus}
        disabled={isDisabledPlus}
        variant='outline'
        size='icon'
        className='size-6 rounded-lg p-0'>
        <Plus />
      </Button>
    </div>
  );
};
