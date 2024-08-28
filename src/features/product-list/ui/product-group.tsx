import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

import { SectionTitle } from '@/shared/ui/section-title';

import { Product } from '../model/types';

interface ProductGroupProps {
  items: Product[];
  category: { id: string; name: string; type: string };
  setCategory: (categoryId: string) => void;
  renderProduct: (product: Product) => JSX.Element;
}

export const ProductGroup: FC<ProductGroupProps> = ({
  items,
  category,
  renderProduct,
  setCategory,
}) => {
  const { ref } = useInView({
    threshold: 1,
    onChange: (inView) => inView && setCategory(category.id),
  });

  return (
    <div className='space-y-4'>
      <SectionTitle text={category.name} />
      <div
        ref={ref}
        id={category.type}
        className='grid w-full grid-cols-[repeat(auto-fill,288px)] justify-center gap-4'>
        {items.map((product) => renderProduct(product))}
      </div>
    </div>
  );
};
