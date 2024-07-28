import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getProductImageUrl } from '@/entities/products';
import { ProductModalLayout } from '@/shared/ui/layouts/product-modal-layout';
import { SwitchButtons } from '@/shared/ui/switch-buttons';

import { Pizza } from '../model/types/pizza';
import { ProductDetailLayout } from '../ui/product-detail-layout';
import { AddToCartButton } from '../ui/product-ingredient/add-to-cart-button';
import { IngredientItem } from '../ui/product-ingredient/ingredient-item';
import { ProductIngredientList } from '../ui/product-ingredient/product-ingredient-list';

export const CoffeeDetail: FC<{ data: Pizza }> = ({ data }) => {
  const [activeSize] = useState(data.options[0].size.toString());

  const sizeWithName = {
    param: activeSize,
    name: activeSize,
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
      <ProductDetailLayout
        title={data.name}
        params={<div>{pizzaParams}</div>}
        contents={data.contents}
        image={<img src={imageUrl} alt={data.name} />}
        addToCartButton={<AddToCartButton closeModal={onCloseModal} />}>
        <SwitchButtons values={[sizeWithName]} onChangeValue={() => {}} />
        {data.ingredients.length > 0 && (
          <ProductIngredientList>
            {data.ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                item={ingredient}
                setItem={() => {}}
              />
            ))}
          </ProductIngredientList>
        )}
      </ProductDetailLayout>
    </ProductModalLayout>
  );
};
