import { ProductDetailDto } from '@/shared/api/models/product/product-schemas';

import { getProductImageUrl } from '../../lib/get-product-image-url';
import { mapIngredient } from '../../product-ingredient/lib/map-ingredient';

export function mapPizzaDetail(data: ProductDetailDto) {
  const category = {
    id: data.categories.$id,
    type: data.categories.type,
    name: data.categories.name,
  };

  const options = data.options.map((option) => ({
    id: option.$id,
    volume: option.volume || 0,
    weight: option.weight || 0,
    price: option.price,
  }));

  const ingredients = data.ingredients.map(mapIngredient);

  const imageUrl = getProductImageUrl({
    id: data.imageId,
    size: 'big',
  });

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
