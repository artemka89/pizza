import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { PizzaDetail } from '@/features/product-details';

export const ProductDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return null;

  return <PizzaDetail id={id} />;
};
