import { Pizza, PizzaDto } from '../model/types';

export const mapPizza = (data: PizzaDto): Pizza => {
  const mapOptions = data.pizzaOptions.map((option) => ({
    id: option.$id,
    size: option.size,
    weight: option.weight,
    price: option.price,
  }));

  return {
    id: data.$id,
    name: data.name,
    description: data.description,
    imageId: data.imageId,
    options: mapOptions,
  };
};
