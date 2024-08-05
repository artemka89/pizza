export function getTotalAmount(items?: { amount: number }[]) {
  if (!items) return 0;

  const totalAmount = items.reduce((acc, item) => acc + item.amount, 0);
  return totalAmount;
}
