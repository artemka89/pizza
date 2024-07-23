import { ProductsDto } from '@/shared/api/models/product/product-schemas';

import { Products } from '../model/types';

export const mapProduct = (data: ProductsDto): Products => {
  const products = data.products.map((product) => ({
    id: product.$id,
    name: product.name,
    imageId: product.imageId,
    contents: product.contents,
    option: {
      id: product.options[0].$id,
      price: product.options[0].price,
    },
  }));

  return {
    id: data.$id,
    name: data.name,
    type: data.type,
    products,
  };
};
