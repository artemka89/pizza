import { FC } from 'react';

import { getPizzaImageUrl } from '@/entities/product';
import { ProductCard } from '@/entities/product';
import { ProductList, ProductLists } from '@/features/product-list';
import { Button } from '@/shared/ui/button';

import { Layout } from './ui/layout';
import { CategoryList } from './category-list';

export const HomePage: FC = () => {
  return (
    <Layout topBar={<CategoryList />}>
      <ProductLists
        renderCategoriesWithProducts={(category) => (
          <ProductList
            key={category.id}
            items={category.products}
            category={category.name}
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
