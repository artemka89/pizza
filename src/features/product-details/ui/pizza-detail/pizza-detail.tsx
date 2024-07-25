import { FC, useState } from 'react';

import { getProductImageUrl, useGetProductDetail } from '@/entities/products';
import { Button } from '@/shared/ui/button';

import { ProductDetailModalLayout } from '../product-detail-modal-layout';

import { PizzaImage } from './pizza-image';
import { PizzaOptions } from './pizza-options';

const tags = Array.from({ length: 50 }).map((_, i) => `Ингридиент - ${i + 1}`);

export const PizzaDetail: FC<{ id: string }> = ({ id }) => {
  const { data } = useGetProductDetail(id || '');
  const [activeOptionSize, setActiveOptionSize] = useState('30');

  const activeOption = data?.options.find(
    (option) => option.size.toString() === activeOptionSize,
  );

  const imageUrl = getProductImageUrl({
    id: data?.imageId || '',
    size: 'big',
  }).toString();

  if (!data) return null;

  return (
    <ProductDetailModalLayout
      title={data.name}
      image={<PizzaImage size={activeOption?.size} imageUrl={imageUrl} />}
      action={
        <Button className='h-12 w-full text-base'>В корзину за 299 ₽</Button>
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

      {tags.map((tag) => (
        <div key={tag} className='text-sm'>
          {tag}
        </div>
      ))}
    </ProductDetailModalLayout>
  );
};
