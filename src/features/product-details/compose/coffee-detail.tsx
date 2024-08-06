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
import { ProductIngredientList } from '../ui/product-ingredient/product-ingredient-list';

export const CoffeeDetail: FC<{ data: Coffee }> = ({ data }) => {
  const navigate = useNavigate();

  const { mappedOptions, setOptionParam } = useMappedOptionToParam(
    data.options,
    'size',
  );

  const [clearItems] = useSelectedItems((state) => [state.clearItems]);

  const onCloseModal = () => {
    clearItems();
    navigate('/');
  };

  const imageUrl = getProductImageUrl({
    id: data.imageId,
    size: 'big',
  }).toString();

  return (
    <ProductModalLayout open={!!data} onCloseModal={onCloseModal}>
      <ProductDetailLayout
        title={data.name}
        contents={data.contents}
        image={<img src={imageUrl} alt={data.name} />}
        params={<OptionParamText sizeName='л' weightName='г' />}
        options={
          <SwitchButtons
            values={mappedOptions}
            onChangeValue={setOptionParam}
            quantityType='л'
          />
        }
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
