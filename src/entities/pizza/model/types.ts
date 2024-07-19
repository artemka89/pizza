export interface Pizza {
  id: string;
  name: string;
  description: string;
  imageId: string;
  options: PizzaOption[];
}

export interface PizzaOption {
  id: string;
  size: number;
  weight: number;
  price: number;
}

export interface PizzaDto {
  $id: string;
  name: string;
  imageId: string;
  category: string;
  description: string;
  categoryIds: string[];
  pizzaOptions: {
    $id: string;
    size: number;
    weight: number;
    price: number;
  }[];
  pizzaCategories: {
    $id: string;
    name: string;
  }[];
}
