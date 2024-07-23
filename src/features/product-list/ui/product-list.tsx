import { FC } from 'react';

import { ProductListLayout } from '@/shared/ui/layouts/product-list-layout';

import { Product } from '../model/types';

interface ProductListProps {
  items: Product[];
  category: string;
  renderProducts: (product: Product) => React.ReactNode;
}

export const ProductList: FC<ProductListProps> = ({
  items,
  category,
  renderProducts,
}) => {
  return (
    <ProductListLayout title={category}>
      {items.map(renderProducts)}
    </ProductListLayout>
  );
};
