import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { getProductImageUrl, useSelectedItems } from '@/entities/products';
import { ProductModalLayout } from '@/shared/ui/layouts/product-modal-layout';
import { SwitchButtons } from '@/shared/ui/switch-buttons';

import { AddToCartButton } from '../add-cart-item/ui/add-to-cart-button';
import { Coffee } from '../model/types/coffee';
import { useMappedOptionToParam } from '../model/use-mapped-option-to-param';
import { OptionParamText } from '../ui/option-param-text';
import { ProductDetailLayout } from '../ui/product-detail-layout';
import { IngredientItem } from '../ui/product-ingredient/ingredient-item';
import { ProductIngredientList } from '../ui/product-ingredient/product-ingredient-list';

export const CoffeeDetail: FC<{ data: Coffee }> = ({ data }) => {
  const navigate = useNavigate();

  const { mappedOptions, setOptionParam } = useMappedOptionToParam(
    data.options,
    'size',
  );

  const [toggleIngredient, clearItems] = useSelectedItems((state) => [
    state.toggleIngredient,
    state.clearItems,
  ]);

  const onCloseModal = () => {
    clearItems();
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
        params={<OptionParamText sizeName='л' weightName='г' />}
        contents={data.contents}
        image={<img src={imageUrl} alt={data.name} />}
        addToCartButton={
          <AddToCartButton
            categoryId={data.category.id}
            productId={data.id}
            closeModal={onCloseModal}
          />
        }>
        <SwitchButtons
          values={mappedOptions}
          onChangeValue={setOptionParam}
          quantityType='л'
        />
        {data.ingredients.length > 0 && (
          <ProductIngredientList>
            {data.ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                item={ingredient}
                toggleItem={toggleIngredient}
              />
            ))}
          </ProductIngredientList>
        )}
      </ProductDetailLayout>
    </ProductModalLayout>
  );
};
