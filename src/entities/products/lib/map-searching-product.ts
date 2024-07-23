import { SearchProduct } from '../model/types';

export const mapSearchingProduct = (data: {
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
