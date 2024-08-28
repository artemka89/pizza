import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelectedItems } from '@/entities/product';
import { ProductModalLayout } from '@/shared/ui/layouts/product-modal-layout';
import { ProductDetailFabric } from '@/widgets/product-detail';

export const ProductDetailPage: FC = () => {
  const navigate = useNavigate();

  const [clearItems] = useSelectedItems((state) => [state.clearItems]);

  const onCloseModal = () => {
    clearItems();
    navigate('/');
  };

  return (
    <ProductModalLayout open={true} onCloseModal={onCloseModal}>
      <ProductDetailFabric />
    </ProductModalLayout>
  );
};
