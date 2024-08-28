import { FC } from 'react';

import {
  getProductOptionFieldValues,
  ProductDetailLayout,
  useGetCoffeeDetail,
  useSelectedItems,
} from '@/entities/product';
import { AddToCartButton } from '@/features/cart';
import {
  ProductIngredientList,
  ProductOptionSwitcher,
  SelectedOptionFieldText,
} from '@/features/product';

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

  return (
    <ProductDetailLayout
      title={coffee.name}
      contents={coffee.contents}
      imageUrl={coffee.imageUrl}
      optionFieldText={<SelectedOptionFieldText />}
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
