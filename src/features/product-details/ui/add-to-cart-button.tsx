import { FC } from 'react';

import { Button } from '@/shared/ui/button';

import { useSelectedItems } from '../model/selected-items-store';

interface AddToCartButtonProps {
  closeModal: () => void;
}
export const AddToCartButton: FC<AddToCartButtonProps> = ({ closeModal }) => {
  const [selectedOption, selectedIngredients, price] = useSelectedItems(
    (state) => [state.option, state.ingredients, state.price],
  );

  const addToCart = () => {
    // eslint-disable-next-line no-console
    console.log({
      optionId: selectedOption?.id,
      ingredientsIds: selectedIngredients.map((i) => i.id),
      price,
    });
  };

  const onclickButton = () => {
    addToCart();
    closeModal();
  };

  return (
    <Button onClick={onclickButton} className='h-12 w-full text-base'>
      В корзину {price} ₽
    </Button>
  );
};
