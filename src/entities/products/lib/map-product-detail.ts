import { ProductDetailDto } from '@/shared/api/models/product/product-schemas';

import { ProductDetail } from '../model/types';

export function mapProductDetail(data: ProductDetailDto): ProductDetail {
  const options = data.options.map((option) => ({
    id: option.$id,
    size: option.size,
    weight: option.weight,
    price: option.price,
  }));

  const ingredients = data.ingredients.map((ingredient) => ({
    id: ingredient.$id,
    name: ingredient.name,
    price: ingredient.price,
    imageId: ingredient.imageId,
  }));

  return {
    id: data.$id,
    name: data.name,
    imageId: data.imageId,
    contents: data.contents || '',
    options,
    ingredients,
  };
}
