import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { IngredientItem } from '@/features/product-details/ui/product-ingredient/ingredient-item';
import { ProductModalLayout } from '@/shared/ui/layouts/product-modal-layout';

import { useSelectedItems } from '../model/selected-items-store';
import { Pizza } from '../model/types/pizza';
import { AddToCartButton } from '../ui/pizza-detail/add-to-cart-button';
import { PizzaImage } from '../ui/pizza-detail/pizza-image';
import { PizzaParamText } from '../ui/pizza-detail/pizza-param-text';
import { PizzaSwitchOptions } from '../ui/pizza-detail/pizza-switch-options';
import { ProductDetailLayout } from '../ui/product-detail-layout';
import { ProductIngredientList } from '../ui/product-ingredient/product-ingredient-list';

export const PizzaDetail: FC<{ data: Pizza }> = ({ data }) => {
  const [toggleIngredient, clearItems] = useSelectedItems((state) => [
    state.toggleIngredient,
    state.clearItems,
  ]);

  const navigate = useNavigate();

  const onCloseModal = () => {
    clearItems();
    navigate('/');
  };

  if (!data) return null;

  return (
    <ProductModalLayout open={!!data} onCloseModal={onCloseModal}>
      <ProductDetailLayout
        title={data.name}
        params={<PizzaParamText />}
        contents={data.contents}
        image={<PizzaImage imageId={data.imageId} />}
        addToCartButton={<AddToCartButton closeModal={onCloseModal} />}>
        <>
          <PizzaSwitchOptions options={data.options} />
          {data.ingredients.length > 0 && (
            <ProductIngredientList>
              {data.ingredients.map((ingredient) => (
                <IngredientItem
                  key={ingredient.id}
                  item={ingredient}
                  setItem={toggleIngredient}
                />
              ))}
            </ProductIngredientList>
          )}
        </>
      </ProductDetailLayout>
    </ProductModalLayout>
  );
};
