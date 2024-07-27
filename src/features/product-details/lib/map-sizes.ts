interface Option {
  key: string;
  name: string;
  disabled: boolean;
}
const SIZES: Record<number, string> = {
  25: 'Маленькая',
  30: 'Средняя',
  35: 'Большая',
} as const;

export const mapSizes = (options: { size: number }[]): Option[] => {
  return Object.entries(SIZES).map(([sizeKey, sizeName]): Option => {
    const matchingOption = options.find(
      (option) => option.size === Number(sizeKey),
    );

    const isDisabled = matchingOption === undefined;

    const name = isDisabled ? sizeName : SIZES[matchingOption.size];

    return {
      key: sizeKey,
      name,
      disabled: isDisabled,
    };
  });
};
