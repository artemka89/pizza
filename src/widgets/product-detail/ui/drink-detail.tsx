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
  DrinkOptionSwitcher,
  SelectedOptionText,
} from '@/features/product-details';
import { ProductModalLayout } from '@/shared/ui/layouts/product-modal-layout';

export const DrinkDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: drink } = useGetProductDetail(id || '');

  const navigate = useNavigate();

  const [clearItems] = useSelectedItems((state) => [state.clearItems]);

  const onCloseModal = () => {
    clearItems();
    navigate('/');
  };

  if (!drink) return null;

  const imageUrl = getProductImageUrl({
    id: drink.imageId,
    size: 'big',
  }).toString();

  return (
    <ProductModalLayout open={!!drink} onCloseModal={onCloseModal}>
      <ProductDetailLayout
        title={drink.name}
        params={<SelectedOptionText sizeName=' л' />}
        contents={drink.contents}
        image={<img src={imageUrl} alt={drink.name} />}
        options={<DrinkOptionSwitcher options={drink.options} />}
        addToCartButton={
          <AddToCartButton
            categoryId={drink.category.id}
            productId={drink.id}
          />
        }></ProductDetailLayout>
    </ProductModalLayout>
  );
};
