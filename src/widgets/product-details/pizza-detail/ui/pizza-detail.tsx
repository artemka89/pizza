import { FC } from 'react';

import { ProductDetailLayout, useSelectedItems } from '@/entities/product';
import { AddToCartButton } from '@/features/cart';
import {
  PizzaImage,
  ProductIngredientList,
  SelectedOptionText,
} from '@/features/product-details';
import { getProductOptionFieldValues } from '@/features/product-details';
import { PIZZA_SIZES } from '@/features/product-details';
import { ProductOptionSwitcher } from '@/features/product-details';

import { useGetPizzaDetail } from '../model/use-get-pizza-detail';

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
    PIZZA_SIZES,
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
      image={<PizzaImage imageId={pizza.imageId} />}
      params={<SelectedOptionText sizeName='см' weightName='г' />}
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
