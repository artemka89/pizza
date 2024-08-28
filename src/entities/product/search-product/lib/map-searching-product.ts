import { getProductImageUrl } from '../../lib/get-product-image-url';
import { SearchingProduct } from '../model/types';

export const mapSearchingProduct = (data: {
  $id: string;
  name: string;
  imageId: string;
}): SearchingProduct => {
  const imageUrl = getProductImageUrl({ id: data.imageId });

  return {
    id: data.$id,
    name: data.name,
    imageUrl,
  };
};
