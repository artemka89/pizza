export interface ProductIngredient {
  id: string;
  name: string;
  price: number;
  imageId: string;
}

export interface FieldValue {
  key: string;
  name: string;
  disabled: boolean;
  isDefault?: boolean;
}
