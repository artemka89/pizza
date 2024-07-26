import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getProductImageUrl, useGetProductDetail } from '@/entities/products';
import { Button } from '@/shared/ui/button';

import { ProductDetailModalLayout } from '../product-detail-modal-layout';
import { ProductIngredientList } from '../product-ingredient-list';

import { PizzaImage } from './pizza-image';
import { PizzaOptions } from './pizza-options';

export const PizzaDetail: FC<{ id: string }> = ({ id }) => {
  const navigate = useNavigate();

  const { data } = useGetProductDetail(id);
  const [activeOptionSize, setActiveOptionSize] = useState('30');

  const activeOption = data?.options.find(
    (option) => option.size.toString() === activeOptionSize,
  );

  const imageUrl = getProductImageUrl({
    id: data?.imageId || '',
    size: 'big',
  }).toString();

  const onCloseModal = (open: boolean) => {
    !open && navigate('/');
  };

  const addToCart = () => {
    const item = {
      productId: data?.id,
      optionId: activeOption?.id,
      // ingredientIds: [...selectedIngredientsIds],
    };
    // eslint-disable-next-line no-console
    console.log(item);
  };

  if (!data) return null;

  return (
    <ProductDetailModalLayout
      onCloseModal={onCloseModal}
      title={data.name}
      image={<PizzaImage size={activeOption?.size} imageUrl={imageUrl} />}
      action={
        <Button onClick={addToCart} className='h-12 w-full text-base'>
          В корзину за 299 ₽
        </Button>
      }>
      <div className='mb-2 text-muted-foreground'>
        {activeOption?.size} см, {activeOption?.weight} гр
      </div>
      <div className='mb-4 text-sm leading-none'>{data?.contents}</div>
      <PizzaOptions
        options={data.options}
        activeOptionSize={activeOptionSize}
        setActiveOptionSize={setActiveOptionSize}
      />

      <h4 className='mb-2 text-[24px] font-medium'>Добавить по вкусу</h4>
      {data.ingredients.length > 0 && <ProductIngredientList productId={id} />}
    </ProductDetailModalLayout>
  );
};
