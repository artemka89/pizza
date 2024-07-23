import { FC } from 'react';

import { getProductImageUrl, ProductCard } from '@/entities/products';
import { CategoryList } from '@/features/category-list';
import { ProductList, ProductLists } from '@/features/product-list';
import { Button } from '@/shared/ui/button';
import { PageContainer } from '@/shared/ui/layouts/page-container';

import { Layout } from './ui/layout';

export const HomePage: FC = () => {
  return (
    <PageContainer>
      <Layout topBar={<CategoryList />}>
        <ProductLists
          renderProducts={(productCategory) => (
            <ProductList
              key={productCategory.id}
              items={productCategory.products}
              category={productCategory}
              renderProducts={(product) => (
                <ProductCard
                  key={product.id}
                  item={product}
                  imageUrl={() => getProductImageUrl({ id: product.imageId })}
                  action={<Button variant='outline'>Добавить</Button>}
                />
              )}
            />
          )}
        />
      </Layout>
    </PageContainer>
  );
};
