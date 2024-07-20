export interface PizzaWithStartPrice {
  id: string;
  name: string;
  description: string;
  imageId: string;
  startPrice: number;
  category: string;
}

export interface Pizza {
  id: string;
  name: string;
  description: string;
  imageId: string;
  options: PizzaOption[];
}

export interface SearchProduct {
  id: string;
  name: string;
  imageId: string;
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
  pizzaOptions: {
    $id: string;
    size: number;
    weight: number;
    price: number;
  }[];
}
