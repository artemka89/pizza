import { FC } from 'react';

import { useGetProducts } from '@/entities/products';

import { Products } from '../model/types';

interface ProductListProps {
  renderProducts: (products: Products) => React.ReactNode;
}

export const ProductList: FC<ProductListProps> = ({ renderProducts }) => {
  const { data } = useGetProducts();

  const categoryWithProducts = data?.filter((item) => item.products.length > 0);

  return (
    <div className='space-y-10'>
      {categoryWithProducts?.map(renderProducts)}
    </div>
  );
};
