import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ProductIngredientList } from '@/features/product-details/product-ingredient-list';
import { IngredientItem } from '@/features/product-details/ui/product-ingredient/ingredient-item';
import { Button } from '@/shared/ui/button';
import { ProductModalLayout } from '@/shared/ui/layouts/product-modal-layout';

import { mapSizes } from '../lib/map-sizes-with-name';
import { Pizza } from '../model/types/pizza';
import { OptionSwitcher } from '../ui/option-switcher';
import { PizzaDetailLayout } from '../ui/pizza-detail/pizza-detail-layout';
import { PizzaImage } from '../ui/pizza-detail/pizza-image';

export const PizzaDetail: FC<{ data: Pizza }> = ({ data }) => {
  const [activeSize, setActiveSize] = useState('30');

  const sizesWithName = mapSizes(data?.options);
  const activeOption = data?.options.find(
    (option) => option.size.toString() === activeSize,
  );

  const pizzaParams = `${activeOption?.size} см, ${activeOption?.weight} гр`;

  const navigate = useNavigate();

  const onCloseModal = (open: boolean) => {
    !open && navigate('/');
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
          <Button className='h-12 w-full text-base'>
            В корзину {activeOption?.price} ₽
          </Button>
        }>
        <>
          <OptionSwitcher
            options={sizesWithName}
            activeOptionValue={activeSize}
            onClickOption={setActiveSize}
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
