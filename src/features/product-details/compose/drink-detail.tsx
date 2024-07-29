import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { getProductImageUrl } from '@/entities/products';
import { ProductModalLayout } from '@/shared/ui/layouts/product-modal-layout';
import { SwitchButtons } from '@/shared/ui/switch-buttons';

import { ACTIVE_PIZZA_SIZE } from '../lib/constants';
import { useSelectedItems } from '../model/selected-items-store';
import { Drink } from '../model/types/drink';
import { useMappedOptionToParam } from '../model/use-mapped-option-to-param';
import { AddToCartButton } from '../ui/add-to-cart-button';
import { OptionParamText } from '../ui/option-param-text';
import { ProductDetailLayout } from '../ui/product-detail-layout';

export const DrinkDetail: FC<{ data: Drink }> = ({ data }) => {
  const navigate = useNavigate();

  const [clearItems] = useSelectedItems((state) => [state.clearItems]);

  const { mappedOptions, setOptionParam } = useMappedOptionToParam(
    data.options,
    'size',
  );

  const imageUrl = getProductImageUrl({
    id: data.imageId,
    size: 'big',
  }).toString();

  const onCloseModal = () => {
    clearItems();
    navigate('/');
  };

  return (
    <ProductModalLayout open={!!data} onCloseModal={onCloseModal}>
      <ProductDetailLayout
        title={data.name}
        params={<OptionParamText sizeName=' л' />}
        contents={data.contents}
        image={<img src={imageUrl} alt={data.name} />}
        addToCartButton={<AddToCartButton closeModal={onCloseModal} />}>
        <SwitchButtons
          values={mappedOptions}
          activeParam={ACTIVE_PIZZA_SIZE}
          onChangeValue={setOptionParam}
        />
      </ProductDetailLayout>
    </ProductModalLayout>
  );
};
