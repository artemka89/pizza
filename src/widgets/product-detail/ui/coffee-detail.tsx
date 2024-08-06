import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  getProductImageUrl,
  ProductDetailLayout,
  useGetProductDetail,
  useSelectedItems,
} from '@/entities/products';
import { AddToCartButton } from '@/features/cart';
import {
  CoffeeOptionSwitcher,
  OptionParamText,
  ProductIngredientList,
} from '@/features/product-details';
import { ProductModalLayout } from '@/shared/ui/layouts/product-modal-layout';

export const CoffeeDetail: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: coffee } = useGetProductDetail(id || '');

  const navigate = useNavigate();

  const [clearItems] = useSelectedItems((state) => [state.clearItems]);

  const onCloseModal = () => {
    clearItems();
    navigate('/');
  };

  if (!coffee) return null;

  const imageUrl = getProductImageUrl({
    id: coffee.imageId,
    size: 'big',
  }).toString();

  return (
    <ProductModalLayout open={!!coffee} onCloseModal={onCloseModal}>
      <ProductDetailLayout
        title={coffee.name}
        contents={coffee.contents}
        image={<img src={imageUrl} alt={coffee.name} />}
        params={<OptionParamText sizeName='л' weightName='г' />}
        options={<CoffeeOptionSwitcher options={coffee.options} />}
        ingredients={<ProductIngredientList items={coffee.ingredients} />}
        addToCartButton={
          <AddToCartButton
            categoryId={coffee.category.id}
            productId={coffee.id}
          />
        }
      />
    </ProductModalLayout>
  );
};
