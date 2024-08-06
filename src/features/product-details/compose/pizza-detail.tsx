import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelectedItems } from '@/entities/products';
import { ProductModalLayout } from '@/shared/ui/layouts/product-modal-layout';

import { AddToCartButton } from '../add-cart-item/ui/add-to-cart-button';
import { Pizza } from '../model/types/pizza';
import { OptionParamText } from '../ui/option-param-text';
import { PizzaImage } from '../ui/pizza-detail/pizza-image';
import { SwitchPizzaOptionButtons } from '../ui/pizza-detail/switch-pizza-option-buttons';
import { ProductDetailLayout } from '../ui/product-detail-layout';
import { ProductIngredientList } from '../ui/product-ingredient/product-ingredient-list';

export const PizzaDetail: FC<{ data: Pizza }> = ({ data }) => {
  const navigate = useNavigate();

  const [clearItems] = useSelectedItems((state) => [state.clearItems]);

  const onCloseModal = () => {
    clearItems();
    navigate('/');
  };

  return (
    <ProductModalLayout open={!!data} onCloseModal={onCloseModal}>
      <ProductDetailLayout
        title={data.name}
        params={<OptionParamText sizeName='см' weightName='г' />}
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
          <SwitchPizzaOptionButtons options={data.options} />
          <ProductIngredientList items={data.ingredients} />
        </>
      </ProductDetailLayout>
    </ProductModalLayout>
  );
};
