import { FC } from 'react';
import { Minus, Plus } from 'lucide-react';

import { Button } from '@/shared/ui/button';

import { useUpdateCartItemAmount } from '../model/use-update-item-amount';

interface PlusMinusAmountButtonProps {
  cartItemId: string;
  amount: number;
}

export const PlusMinusAmountButton: FC<PlusMinusAmountButtonProps> = ({
  cartItemId,
  amount,
}) => {
  const updateCartItemAmount = useUpdateCartItemAmount();

  const onCLickPlus = () => {
    if (amount >= 99) return;
    updateCartItemAmount.mutate({ id: cartItemId, amount: amount + 1 });
  };

  const onClickMinus = () => {
    if (amount <= 1) return;
    updateCartItemAmount.mutate({ id: cartItemId, amount: amount - 1 });
  };

  return (
    <div className='flex items-center gap-2'>
      <Button
        onClick={onClickMinus}
        disabled={amount <= 1 || updateCartItemAmount.isPending}
        variant='outline'
        size='icon'
        className='size-6 rounded-lg p-0'>
        <Minus />
      </Button>
      <span className='font-bold'>{amount}</span>
      <Button
        onClick={onCLickPlus}
        disabled={amount >= 99 && updateCartItemAmount.isPending}
        variant='outline'
        size='icon'
        className='size-6 rounded-lg p-0'>
        <Plus />
      </Button>
    </div>
  );
};
