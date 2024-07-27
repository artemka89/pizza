import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IngredientItem } from '@/features/product-details/ui/product-ingredient/ingredient-item';
import { Button } from '@/shared/ui/button';
import { ProductModalLayout } from '@/shared/ui/layouts/product-modal-layout';

import { Pizza } from '../model/types/pizza';
import { PizzaDetailLayout } from '../ui/pizza-detail/pizza-detail-layout';
import { PizzaImage } from '../ui/pizza-detail/pizza-image';
import { PizzaSwitchOptions } from '../ui/pizza-detail/pizza-switch-options';
import { ProductIngredientList } from '../ui/product-ingredient/product-ingredient-list';

export const PizzaDetail: FC<{ data: Pizza }> = ({ data }) => {
  const [activeSize, setActiveSize] = useState('30');

  const activeOption = data?.options.find(
    (option) => option.size.toString() === activeSize,
  );

  const pizzaParams = `${activeOption?.size} см, ${activeOption?.weight} гр`;

  const navigate = useNavigate();

  const addToCart = () => {
    const activeOption = data?.options.find(
      (option) => option.size.toString() === activeSize,
    );
    // eslint-disable-next-line no-console
    console.log({ option: activeOption, ingredientIds: '' });
  };

  const onCloseModal = () => {
    addToCart();
    navigate('/');
  };

  if (!data) return null;

  return (
    <ProductModalLayout open={!!data} onCloseModal={onCloseModal}>
      <PizzaDetailLayout
        title={data.name}
        params={pizzaParams}
        contents={data.contents}
        image={<PizzaImage imageId={data.imageId} size={activeOption?.size} />}
        addToCartButton={
          <Button onClick={onCloseModal} className='h-12 w-full text-base'>
            В корзину {activeOption?.price} ₽
          </Button>
        }>
        <>
          <PizzaSwitchOptions
            options={data.options}
            setOption={setActiveSize}
          />
          {data.ingredients.length > 0 && (
            <ProductIngredientList>
              {data.ingredients.map((ingredient) => (
                <IngredientItem key={ingredient.id} item={ingredient} />
              ))}
            </ProductIngredientList>
          )}
        </>
      </PizzaDetailLayout>
    </ProductModalLayout>
  );
};
