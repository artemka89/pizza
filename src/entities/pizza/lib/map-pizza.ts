import { Pizza, PizzaDto } from '../model/types';

export const mapPizza = (data: PizzaDto): Pizza => {
  const mapCategories = data.pizzaCategories.map((category) => ({
    id: category.$id,
    name: category.name,
  }));

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
    category: data.category,
    imageId: data.imageId,
    categories: mapCategories,
    options: mapOptions,
    categoryIds: data.categoryIds,
    rating: data.rating,
  };
};
