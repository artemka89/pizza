import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelectedItems } from '@/entities/products';
import { ProductModalLayout } from '@/shared/ui/layouts/product-modal-layout';

import { AddToCartButton } from '../add-cart-item/ui/add-to-cart-button';
import { Pizza } from '../model/types/pizza';
import { OptionParamText } from '../ui/option-param-text';
import { PizzaImage } from '../ui/pizza-detail/pizza-image';
import { PizzaOptionSwitcher } from '../ui/pizza-detail/pizza-option-switcher';
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
        contents={data.contents}
        image={<PizzaImage imageId={data.imageId} />}
        params={<OptionParamText sizeName='см' weightName='г' />}
        options={<PizzaOptionSwitcher options={data.options} />}
        ingredients={<ProductIngredientList items={data.ingredients} />}
        addToCartButton={
          <AddToCartButton
            categoryId={data.category.id}
            productId={data.id}
            closeModal={onCloseModal}
          />
        }
      />
    </ProductModalLayout>
  );
};
