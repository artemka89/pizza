import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { getProductImageUrl } from '@/entities/products';
import { ProductModalLayout } from '@/shared/ui/layouts/product-modal-layout';
import { SwitchButtons } from '@/shared/ui/switch-buttons';

import { Coffee } from '../model/types/coffee';
import { useMappedOptionToParam } from '../model/use-mapped-option-to-param';
import { AddToCartButton } from '../ui/add-to-cart-button';
import { OptionParamText } from '../ui/option-param-text';
import { ProductDetailLayout } from '../ui/product-detail-layout';
import { IngredientItem } from '../ui/product-ingredient/ingredient-item';
import { ProductIngredientList } from '../ui/product-ingredient/product-ingredient-list';

export const CoffeeDetail: FC<{ data: Coffee }> = ({ data }) => {
  const { mappedOptions, setOptionParam } = useMappedOptionToParam(
    data.options,
    'size',
  );

  const navigate = useNavigate();

  const onCloseModal = () => {
    navigate('/');
  };

  const imageUrl = getProductImageUrl({
    id: data.imageId,
    size: 'big',
  }).toString();

  if (!data) return null;

  return (
    <ProductModalLayout open={!!data} onCloseModal={onCloseModal}>
      <ProductDetailLayout
        title={data.name}
        params={<OptionParamText sizeName='л' weightName='г' />}
        contents={data.contents}
        image={<img src={imageUrl} alt={data.name} />}
        addToCartButton={<AddToCartButton closeModal={onCloseModal} />}>
        <SwitchButtons
          values={mappedOptions}
          onChangeValue={setOptionParam}
          quantityType='л'
        />
        {data.ingredients.length > 0 && (
          <ProductIngredientList>
            {data.ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                item={ingredient}
                setItem={() => {}}
              />
            ))}
          </ProductIngredientList>
        )}
      </ProductDetailLayout>
    </ProductModalLayout>
  );
};
