interface Field {
  size?: number;
  weight?: number;
  volume?: number;
}

export function formatOptionFieldText(field: Field) {
  const { size, weight, volume } = field;

  const sizeString = size ? `${size} см` : '';
  const volumeString = volume ? `${volume} л` : '';
  const weightString = weight ? `${weight} г` : '';

  const strings = [sizeString, volumeString, weightString];

  return strings.filter(Boolean).join(', ');
}
