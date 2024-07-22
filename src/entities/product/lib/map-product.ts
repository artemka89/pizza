import {
  ProductDto,
  ProductWithStartPrice,
  SearchProduct,
} from '../model/types';

export const mapProduct = (data: ProductDto): ProductWithStartPrice => {
  return {
    id: data.$id,
    name: data.name,
    category: data.category,
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
