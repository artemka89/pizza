import { ProductDetailDto } from '@/shared/api/models/product/product-schemas';

import { getProductImageUrl } from '../../lib/get-product-image-url';
import { ProductDetail } from '../model/types.ts';

export function mapProductDetail(data: ProductDetailDto): ProductDetail {
  const category = {
    id: data.categories.$id,
    type: data.categories.type,
    name: data.categories.name,
  };

  const options = data.options.map((option) => ({
    id: option.$id,
    size: option.size || 0,
    weight: option.weight || 0,
    price: option.price,
  }));

  const ingredients = data.ingredients.map((ingredient) => ({
    id: ingredient.$id,
    name: ingredient.name,
    price: ingredient.price,
    imageId: ingredient.imageId,
  }));

  const imageUrl = getProductImageUrl({ id: data.imageId, size: 'big' });

  return {
    id: data.$id,
    name: data.name,
    imageId: data.imageId,
    imageUrl,
    contents: data.contents || '',
    category,
    options,
    ingredients,
  };
}
