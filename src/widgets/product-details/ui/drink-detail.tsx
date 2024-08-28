import { FC } from 'react';

import {
  getProductImageUrl,
  ProductDetailLayout,
  useGetDrinkDetail,
  useSelectedItems,
} from '@/entities/product';
import { AddToCartButton } from '@/features/cart';
import {
  getProductOptionFieldValues,
  ProductOptionSwitcher,
  SelectedOptionFieldText,
} from '@/features/product-details';

interface DrinkDetailProps {
  id: string;
}

export const DrinkDetail: FC<DrinkDetailProps> = ({ id }) => {
  const { data: drink } = useGetDrinkDetail(id);

  const [setOption] = useSelectedItems((state) => [state.setOption]);

  if (!drink) return null;

  const optionFieldValues = getProductOptionFieldValues(
    drink.options,
    'volume',
  );

  const setOptionField = (key: string) => {
    const field = drink.options.find(
      (field) => field.volume.toString() === key,
    );
    if (field) {
      setOption(field);
    }
  };

  const imageUrl = getProductImageUrl({
    id: drink.imageId,
    size: 'big',
  }).toString();

  return (
    <ProductDetailLayout
      title={drink.name}
      optionFieldToText={<SelectedOptionFieldText />}
      contents={drink.contents}
      image={<img src={imageUrl} alt={drink.name} />}
      options={
        <ProductOptionSwitcher
          fields={optionFieldValues}
          setField={setOptionField}
        />
      }
      addToCartButton={
        <AddToCartButton categoryId={drink.category.id} productId={drink.id} />
      }></ProductDetailLayout>
  );
};
