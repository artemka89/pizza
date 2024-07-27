import { FC } from 'react';

import { Button } from '@/shared/ui/button';

import { useSelectedItems } from '../../model/selected-items-store';
import { PizzaOption } from '../../model/types/pizza';

interface AddToCartButtonProps {
  options: PizzaOption[];
  closeModal: () => void;
}
export const AddToCartButton: FC<AddToCartButtonProps> = ({
  options,
  closeModal,
}) => {
  const [activeSize, ingredientIds] = useSelectedItems((state) => [
    state.size,
    state.ingredientIds,
    state.clearItems,
  ]);

  const activeOption = options.find(
    (option) => option.size.toString() === activeSize,
  );

  const addToCart = () => {
    const activeOption = options.find(
      (option) => option.size.toString() === activeSize,
    );
    // eslint-disable-next-line no-console
    console.log({ optionId: activeOption?.id, ingredientIds });
  };

  const onclickButton = () => {
    addToCart();
    closeModal();
  };

  return (
    <Button onClick={onclickButton} className='h-12 w-full text-base'>
      В корзину {activeOption?.price} ₽
    </Button>
  );
};
