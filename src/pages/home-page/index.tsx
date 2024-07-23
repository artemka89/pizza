import { FC } from 'react';

import { getPizzaImageUrl } from '@/entities/product';
import { ProductCard } from '@/entities/product';
import { CategoryList } from '@/features/category-list';
import { ProductList, ProductLists } from '@/features/product-list';
import { Button } from '@/shared/ui/button';

import { Layout } from './ui/layout';

export const HomePage: FC = () => {
  return (
    <Layout topBar={<CategoryList />}>
      <ProductLists
        renderCategoriesWithProducts={(category) => (
          <ProductList
            key={category.id}
            items={category.products}
            category={category}
            renderProducts={(product) => (
              <ProductCard
                key={product.id}
                item={product}
                imageUrl={() => getPizzaImageUrl({ id: product.imageId })}
                action={<Button variant='outline'>Добавить</Button>}
              />
            )}
          />
        )}
      />
    </Layout>
  );
};
