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
  const UpdateCartItemAmount = useUpdateCartItemAmount();

  const onCLickPlus = () => {
    UpdateCartItemAmount.mutate({ id: cartItemId, amount: amount + 1 });
  };

  const onClickMinus = () => {
    UpdateCartItemAmount.mutate({ id: cartItemId, amount: amount - 1 });
  };

  return (
    <div className='flex items-center gap-2'>
      <Button
        onClick={onClickMinus}
        disabled={UpdateCartItemAmount.isPending}
        variant='outline'
        size='icon'
        className='size-7 rounded-lg p-0'>
        <Minus />
      </Button>
      <span className='font-bold'>{amount}</span>
      <Button
        onClick={onCLickPlus}
        disabled={UpdateCartItemAmount.isPending}
        variant='outline'
        size='icon'
        className='size-7 rounded-lg p-0'>
        <Plus />
      </Button>
    </div>
  );
};
