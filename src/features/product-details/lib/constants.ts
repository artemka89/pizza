export const PIZZA_SIZES: Record<
  number,
  { name: string; isDefault?: boolean }
> = {
  25: { name: 'Маленькая' },
  30: { name: 'Средняя', isDefault: true },
  35: { name: 'Большая' },
} as const;
