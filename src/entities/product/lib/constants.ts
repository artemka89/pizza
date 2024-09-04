type PizzaSizes = 25 | 30 | 35;

export const PIZZA_SIZE_FIELD_VALUES: Record<
  PizzaSizes,
  { name: string; isDefault?: boolean }
> = {
  25: { name: 'Маленькая' },
  30: { name: 'Средняя', isDefault: true },
  35: { name: 'Большая' },
} as const;
