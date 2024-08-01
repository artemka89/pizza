import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelectedItems } from '@/entities/products';
import { ProductModalLayout } from '@/shared/ui/layouts/product-modal-layout';
import { SwitchButtons } from '@/shared/ui/switch-buttons';

import { AddToCartButton } from '../add-cart-item/ui/add-to-cart-button';
import { ACTIVE_PIZZA_SIZE, PIZZA_SIZES } from '../lib/constants';
import { Pizza } from '../model/types/pizza';
import { useMappedOptionToParam } from '../model/use-mapped-option-to-param';
import { OptionParamText } from '../ui/option-param-text';
import { PizzaImage } from '../ui/pizza-detail/pizza-image';
import { ProductDetailLayout } from '../ui/product-detail-layout';
import { IngredientItem } from '../ui/product-ingredient/ingredient-item';
import { ProductIngredientList } from '../ui/product-ingredient/product-ingredient-list';

export const PizzaDetail: FC<{ data: Pizza }> = ({ data }) => {
  const navigate = useNavigate();

  const [toggleIngredient, clearItems] = useSelectedItems((state) => [
    state.toggleIngredient,
    state.clearItems,
  ]);

  const { mappedOptions, setOptionParam } = useMappedOptionToParam(
    data.options,
    'size',
    ACTIVE_PIZZA_SIZE,
    PIZZA_SIZES,
  );

  const onCloseModal = () => {
    clearItems();
    navigate('/');
  };

  return (
    <ProductModalLayout open={!!data} onCloseModal={onCloseModal}>
      <ProductDetailLayout
        title={data.name}
        params={<OptionParamText sizeName=' см' weightName=' г' />}
        contents={data.contents}
        image={<PizzaImage imageId={data.imageId} />}
        addToCartButton={
          <AddToCartButton
            categoryId={data.category.id}
            productId={data.id}
            closeModal={onCloseModal}
          />
        }>
        <>
          <SwitchButtons
            values={mappedOptions}
            activeParam={ACTIVE_PIZZA_SIZE}
            onChangeValue={setOptionParam}
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
        </>
      </ProductDetailLayout>
    </ProductModalLayout>
  );
};
