export function getIngredientsText(ingredients: { name: string }[]) {
  if (!ingredients.length) return undefined;
  const text = ingredients
    .map((ingredient) => {
      const result =
        ingredient.name.charAt(0).toLowerCase() + ingredient.name.slice(1);
      return result;
    })
    .join(', ');

  return text;
}
