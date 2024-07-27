import { FC } from 'react';

import { Button } from '@/shared/ui/button';

import { useSelectedItems } from '../../model/selected-items-store';

interface AddToCartButtonProps {
  closeModal: () => void;
}
export const AddToCartButton: FC<AddToCartButtonProps> = ({ closeModal }) => {
  const [selectedOption, selectedIngredients] = useSelectedItems((state) => [
    state.option,
    state.ingredients,
  ]);

  const addToCart = () => {
    // eslint-disable-next-line no-console
    console.log({ optionId: selectedOption?.id, selectedIngredients });
  };

  const onclickButton = () => {
    addToCart();
    closeModal();
  };

  return (
    <Button onClick={onclickButton} className='h-12 w-full text-base'>
      В корзину {selectedOption?.price} ₽
    </Button>
  );
};
