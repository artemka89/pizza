import { PizzaOptionType } from '../model/types/pizza';

interface Option {
  value: string;
  name: string;
  disabled: boolean;
}
const SIZES: Record<number, string> = {
  25: 'Маленькая',
  30: 'Средняя',
  35: 'Большая',
};

export const mapSizes = (options?: PizzaOptionType[]): Option[] => {
  return Object.entries(SIZES).map(([sizeKey, sizeName]) => {
    const matchingOption = options?.find(
      (option) => option.size === Number(sizeKey),
    );
    const isDisabled = matchingOption === undefined;
    const value = isDisabled ? sizeKey : matchingOption.size.toString();
    const name = isDisabled ? sizeName : SIZES[matchingOption.size];

    return {
      value,
      name,
      disabled: isDisabled,
    };
  });
};
