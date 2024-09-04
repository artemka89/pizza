import { ProductIngredientDto } from '@/shared/api/models/product/product-schemas';

import { ProductIngredient } from '../model/types';

import { getIngredientImageUrl } from './get-ingredient-image-url';

export function mapIngredient(data: ProductIngredientDto): ProductIngredient {
  const imageUrl = getIngredientImageUrl(data.imageId);
  return {
    id: data.$id,
    name: data.name,
    price: data.price,
    imageUrl,
  };
}
