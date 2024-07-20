import { PizzaDto, PizzaWithStartPrice, SearchProduct } from '../model/types';

export const mapPizza = (data: PizzaDto): PizzaWithStartPrice => {
  return {
    id: data.$id,
    name: data.name,
    description: data.description,
    imageId: data.imageId,
    startPrice: data.pizzaOptions[0].price,
    category: data.category,
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
