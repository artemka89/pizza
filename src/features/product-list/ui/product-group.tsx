import { FC, useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';

import { useCategoryStore } from '@/entities/category';
import { ProductListLayout } from '@/shared/ui/layouts/product-list-layout';

import { Product } from '../model/types';

interface ProductGroupProps {
  items: Product[];
  category: { id: string; name: string };
  renderProducts: (product: Product) => React.ReactNode;
}

export const ProductGroup: FC<ProductGroupProps> = ({
  items,
  category,
  renderProducts,
}) => {
  const [setActiveCategoryId] = useCategoryStore((state) => [
    state.setActiveCategoryId,
  ]);

  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 1,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(category.id);
    }
  }, [category.id, intersection?.isIntersecting, setActiveCategoryId]);

  return (
    <ProductListLayout title={category.name} ref={intersectionRef}>
      {items.map(renderProducts)}
    </ProductListLayout>
  );
};
