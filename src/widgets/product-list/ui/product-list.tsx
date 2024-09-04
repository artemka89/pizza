import { FC } from 'react';

import { useCategoryStore } from '@/entities/category';
import { ProductCard, useGetProducts } from '@/entities/product';
import { Button } from '@/shared/ui/button';

import { ProductGroup } from '../ui/product-group';

export const ProductList: FC = () => {
  const { data = [] } = useGetProducts();
  const categoryWithProducts = data.filter((item) => item.products.length > 0);

  const [setActiveCategoryId] = useCategoryStore((state) => [
    state.setActiveCategoryId,
  ]);

  const setActiveCategory = (categoryId: string) => {
    setActiveCategoryId(categoryId);
  };

  return (
    <div className='space-y-10'>
      {categoryWithProducts?.map((productCategory) => (
        <ProductGroup
          key={productCategory.id}
          items={productCategory.products}
          category={productCategory}
          setCategory={setActiveCategory}
          renderProduct={(product) => (
            <ProductCard
              key={product.id}
              item={product}
              actionSlot={<Button onClick={() => {}}>Выбрать</Button>}
            />
          )}
        />
      ))}
    </div>
  );
};
