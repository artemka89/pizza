import { ProductsDto } from '@/shared/api/models/product/product-schemas';
import { CATEGORY_TYPE } from '@/shared/lib/constants/category-type';

import { getProductImageUrl } from '../../lib/get-product-image-url';
import { ProductCategory } from '../model/types';

export const mapProduct = (data: ProductsDto): ProductCategory => {
  const products = data.products.map((product) => ({
    id: product.$id,
    name: product.name,
    imageId: product.imageId,
    imageUrl: getProductImageUrl({ id: product.imageId }),
    contents: product.contents || undefined,
    option: {
      id: product.options[0].$id,
      price: product.options[0].price,
    },
  }));

  return {
    id: data.$id,
    name: data.name,
    type: data.type as CATEGORY_TYPE,
    products,
  };
};
