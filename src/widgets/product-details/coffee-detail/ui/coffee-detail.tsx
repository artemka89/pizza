import { FC } from 'react';

import {
  getProductImageUrl,
  ProductDetailLayout,
  useSelectedItems,
} from '@/entities/product';
import { AddToCartButton } from '@/features/cart';
import {
  getProductOptionFieldValues,
  ProductIngredientList,
  ProductOptionSwitcher,
  SelectedOptionFieldText,
} from '@/features/product-details';

import { useGetCoffeeDetail } from '../model/use-get-coffee-detail';

interface CoffeeDetailProps {
  id: string;
}

export const CoffeeDetail: FC<CoffeeDetailProps> = ({ id }) => {
  const { data: coffee } = useGetCoffeeDetail(id);

  const [setOption] = useSelectedItems((state) => [state.setOption]);

  if (!coffee) return null;

  const optionFieldValues = getProductOptionFieldValues(
    coffee.options,
    'volume',
  );

  const setOptionField = (key: string) => {
    const field = coffee.options.find(
      (field) => field.volume.toString() === key,
    );
    if (field) {
      setOption(field);
    }
  };

  const imageUrl = getProductImageUrl({
    id: coffee.imageId,
    size: 'big',
  }).toString();

  return (
    <ProductDetailLayout
      title={coffee.name}
      contents={coffee.contents}
      image={<img src={imageUrl} alt={coffee.name} />}
      optionFieldToText={<SelectedOptionFieldText />}
      options={
        <ProductOptionSwitcher
          fields={optionFieldValues}
          setField={setOptionField}
        />
      }
      ingredients={<ProductIngredientList items={coffee.ingredients} />}
      addToCartButton={
        <AddToCartButton
          categoryId={coffee.category.id}
          productId={coffee.id}
        />
      }
    />
  );
};
