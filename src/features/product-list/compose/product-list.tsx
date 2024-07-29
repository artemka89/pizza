import { FC } from 'react';

import { useGetProducts } from '@/entities/products';

import { ProductGroup } from '../ui/product-group';

export const ProductList: FC = () => {
  const { data } = useGetProducts();

  const categoryWithProducts = data?.filter((item) => item.products.length > 0);

  return (
    <div className='space-y-10'>
      {categoryWithProducts?.map((productCategory) => (
        <ProductGroup
          key={productCategory.id}
          items={productCategory.products}
          category={productCategory}
        />
      ))}
    </div>
  );
};
