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
    console.log({
      optionId: selectedOption?.id,
      ingredientsIds: selectedIngredients.map((i) => i.id),
    });
  };

  const onclickButton = () => {
    addToCart();
    closeModal();
  };

  const price =
    selectedOption &&
    selectedOption?.price +
      selectedIngredients.reduce((a, b) => a + b.price, 0);

  return (
    <Button onClick={onclickButton} className='h-12 w-full text-base'>
      В корзину {price} ₽
    </Button>
  );
};
