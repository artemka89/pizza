import { Pizza, PizzaDto } from '../model/types';

export const mapPizza = (data: PizzaDto): Pizza => {
  return {
    id: data.$id,
    name: data.name,
    description: data.description,
    imageId: data.imageId,
    startPrice: data.pizzaOptions[0].price,
  };
};
