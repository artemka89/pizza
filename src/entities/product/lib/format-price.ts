const currency = new Intl.NumberFormat('ru', {
  currency: 'RUB',
  style: 'currency',
  minimumFractionDigits: 0,
});

export function formatPrice(value: number) {
  const formattedValue = currency.format(value);
  return formattedValue;
}
