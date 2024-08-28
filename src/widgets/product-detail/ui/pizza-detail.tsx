import { FC } from 'react';

import {
  getProductOptionFieldValues,
  PIZZA_SIZE_FIELD_VALUES,
  ProductDetailLayout,
  useGetPizzaDetail,
  useSelectedItems,
} from '@/entities/product';
import { AddToCartButton } from '@/features/cart';
import {
  ProductIngredientList,
  ProductOptionSwitcher,
  SelectedOptionFieldText,
} from '@/features/product';

import { PizzaImage } from './pizza-image';

interface PizzaDetailProps {
  id: string;
}

export const PizzaDetail: FC<PizzaDetailProps> = ({ id }) => {
  const { data: pizza } = useGetPizzaDetail(id);

  const [setOption] = useSelectedItems((state) => [state.setOption]);

  if (!pizza) {
    return null;
  }

  const optionFieldValues = getProductOptionFieldValues(
    pizza.options,
    'size',
    PIZZA_SIZE_FIELD_VALUES,
  );

  const setOptionField = (key: string) => {
    const field = pizza.options.find((field) => field.size.toString() === key);
    if (field) {
      setOption(field);
    }
  };

  return (
    <ProductDetailLayout
      title={pizza.name}
      contents={pizza.contents}
      image={<PizzaImage imageUrl={pizza.imageUrl} />}
      optionFieldText={<SelectedOptionFieldText />}
      options={
        <ProductOptionSwitcher
          fields={optionFieldValues}
          setField={setOptionField}
        />
      }
      ingredients={<ProductIngredientList items={pizza.ingredients} />}
      addToCartButton={
        <AddToCartButton categoryId={pizza.category.id} productId={pizza.id} />
      }
    />
  );
};
