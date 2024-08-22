export function getOptionText(
  option: { size?: number; weight?: number },
  sizeName?: string,
  weightName?: string,
) {
  const size = `${option.size} ${sizeName}`;
  const weight = `${option.weight} ${weightName}`;

  return `${sizeName ? size : ''}${weightName ? ', ' + weight : ''}`;
}
