import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  ProductDetailLayout,
  useGetProductDetail,
  useSelectedItems,
} from '@/entities/products';
import { AddToCartButton } from '@/features/cart';
import {
  OptionParamText,
  PizzaImage,
  PizzaOptionSwitcher,
  ProductIngredientList,
} from '@/features/product-details';
import { ProductModalLayout } from '@/shared/ui/layouts/product-modal-layout';

export const PizzaDetail: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: pizza } = useGetProductDetail(id || '');

  const navigate = useNavigate();

  const [clearItems] = useSelectedItems((state) => [state.clearItems]);

  const onCloseModal = () => {
    clearItems();
    navigate('/');
  };

  if (!pizza) {
    return null;
  }

  return (
    <ProductModalLayout open={!!pizza} onCloseModal={onCloseModal}>
      <ProductDetailLayout
        title={pizza.name}
        contents={pizza.contents}
        image={<PizzaImage imageId={pizza.imageId} />}
        params={<OptionParamText sizeName='см' weightName='г' />}
        options={<PizzaOptionSwitcher options={pizza.options} />}
        ingredients={<ProductIngredientList items={pizza.ingredients} />}
        addToCartButton={
          <AddToCartButton
            categoryId={pizza.category.id}
            productId={pizza.id}
          />
        }
      />
    </ProductModalLayout>
  );
};
