import { FC } from 'react';

import {
  getProductOptionFieldValues,
  ProductDetailLayout,
  useGetDrinkDetail,
  useSelectedItems,
} from '@/entities/product';
import { AddToCartButton } from '@/features/cart';
import {
  ProductOptionSwitcher,
  SelectedOptionFieldText,
} from '@/features/product';

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

  return (
    <ProductDetailLayout
      title={drink.name}
      optionFieldText={<SelectedOptionFieldText />}
      contents={drink.contents}
      imageUrl={drink.imageUrl}
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
