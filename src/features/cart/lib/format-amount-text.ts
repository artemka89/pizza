export function formatAmountText(amount: number): string {
  const cases = [
    { min: 0, max: 1, text: 'товар' },
    { min: 2, max: 4, text: 'товара' },
    { min: 5, max: 99, text: 'товаров' },
  ];

  for (const { min, max, text } of cases) {
    if (amount >= min && amount <= max) {
      return `${amount} ${text}`;
    }
  }

  return `${amount} товаров`;
}
