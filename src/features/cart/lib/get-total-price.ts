interface CartItem {
  amount: number;
  option: {
    price: number;
  };
  ingredients: {
    price: number;
  }[];
}

export function getTotalPrice(items?: CartItem[]) {
  if (!items) return 0;

  const totalPrice = items.reduce((acc, item) => {
    const totalIngredientPrice = getTotalIngredientPrice(item.ingredients);
    return acc + item.amount * item.option.price + totalIngredientPrice;
  }, 0);

  return totalPrice;
}

export function getTotalIngredientPrice(items?: { price: number }[]) {
  if (!items) return 0;

  const totalPrice = items.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return totalPrice;
}
