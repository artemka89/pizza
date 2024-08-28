import { ProductDetailDto } from '@/shared/api/models/product/product-schemas';

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
    category,
    options,
    ingredients,
  };
}
