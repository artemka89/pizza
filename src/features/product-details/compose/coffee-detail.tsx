import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getProductImageUrl } from '@/entities/products';
import { IngredientItem } from '@/features/product-details/ui/product-ingredient/ingredient-item';
import { Button } from '@/shared/ui/button';
import { ProductModalLayout } from '@/shared/ui/layouts/product-modal-layout';

import { Pizza } from '../model/types/pizza';
import { CoffeeDetailLayout } from '../ui/coffee-detail/coffee-detail-layout';
import { OptionSwitcher } from '../ui/option-switcher';
import { ProductIngredientList } from '../ui/product-ingredient/product-ingredient-list';

export const CoffeeDetail: FC<{ data: Pizza }> = ({ data }) => {
  const [activeSize, setActiveSize] = useState(data.options[0].size.toString());

  const sizeWithName = {
    id: data.options[0].id,
    value: activeSize,
    disabled: true,
  };
  const activeOption = data?.options.find(
    (option) => option.size.toString() === activeSize,
  );

  const pizzaParams = `${activeSize} л, ${activeOption?.weight} гр`;

  const navigate = useNavigate();

  const onCloseModal = () => {
    navigate('/');
  };

  const imageUrl = getProductImageUrl({
    id: data.imageId,
    size: 'big',
  }).toString();

  if (!data) return null;

  return (
    <ProductModalLayout open={!!data} onCloseModal={onCloseModal}>
      <CoffeeDetailLayout
        title={data.name}
        params={pizzaParams}
        contents={data.contents}
        imageUrl={imageUrl}
        addToCartButton={
          <Button onClick={onCloseModal} className='h-12 w-full text-base'>
            В корзину {activeOption?.price} ₽
          </Button>
        }>
        <>
          <OptionSwitcher
            options={[sizeWithName]}
            quantityType='л'
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
      </CoffeeDetailLayout>
    </ProductModalLayout>
  );
};
