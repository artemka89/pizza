import { ProductDto } from '@/shared/api/models/product/product-schemas';

import { ProductWithStartPrice, SearchProduct } from '../model/types';

export const mapProduct = (data: ProductDto): ProductWithStartPrice => {
  const ingredients = data.ingredients.map((ingredient) => ({
    id: ingredient.$id,
    name: ingredient.name,
    imageId: ingredient.imageId,
    price: ingredient.price,
  }));

  return {
    id: data.$id,
    name: data.name,
    ingredients,
    contents: data.contents,
    imageId: data.imageId,
    startPrice: data.options[0].price,
  };
};

export const mapSearchProduct = (data: {
  $id: string;
  name: string;
  imageId: string;
}): SearchProduct => {
  return {
    id: data.$id,
    name: data.name,
    imageId: data.imageId,
  };
};
