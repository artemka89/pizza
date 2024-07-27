import { FC, useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';

import { useCategoryStore } from '@/entities/category';
import { getProductImageUrl, ProductCard } from '@/entities/products';
import { Button } from '@/shared/ui/button';
import { ProductListLayout } from '@/shared/ui/layouts/product-list-layout';

import { Product } from '../model/types';

interface ProductGroupProps {
  items: Product[];
  category: { id: string; name: string };
}

export const ProductGroup: FC<ProductGroupProps> = ({ items, category }) => {
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
      {items.map((product) => (
        <ProductCard
          key={product.id}
          item={product}
          imageUrl={() => getProductImageUrl({ id: product.imageId })}
          action={
            // eslint-disable-next-line no-console
            <Button onClick={() => console.log(product.option.id)}>
              Выбрать
            </Button>
          }
        />
      ))}
    </ProductListLayout>
  );
};
