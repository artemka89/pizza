import { CategoryDto } from '@/shared/api/models/category/category-schemas';

import { Category } from '../model/types';

export const mapCategory = (data: CategoryDto): Category => {
  const products = data.products.map((product) => ({
    id: product.$id,
    name: product.name,
    imageId: product.imageId,
    startPrice: product.options[0].price,
    contents: product.contents,
    ingredients: product.ingredients?.map((ingredient) => ({
      id: ingredient.$id,
      name: ingredient.name,
      imageId: ingredient.imageId,
      price: ingredient.price,
    })),
  }));

  return {
    id: data.$id,
    name: data.name,
    products,
  };
};
