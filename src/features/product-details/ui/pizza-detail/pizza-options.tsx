import { FC, useEffect } from 'react';

import { PizzaOptionType } from '../../model/types/pizza';
import { OptionSwitcher } from '../option-switcher';

const sizeName: Record<string, string> = {
  '25': 'Маленькая',
  '30': 'Средняя',
  '35': 'Большая',
};

interface PizzaOptionsProps {
  options: PizzaOptionType[];
  activeOptionSize: string;
  setActiveOptionSize: (size: string) => void;
  className?: string;
}

export const PizzaOptions: FC<PizzaOptionsProps> = ({
  options,
  activeOptionSize,
  setActiveOptionSize,
}) => {
  const optionWithName = Object.entries(sizeName).map(([key]) => {
    const option = options.find((option) => option.size === Number(key));
    if (!option)
      return {
        value: key,
        name: sizeName[key],
        disabled: true,
      };
    return {
      value: option.size.toString(),
      name: sizeName[option.size],
      disabled: false,
    };
  });

  const onSetOption = (size: string) => {
    setActiveOptionSize(size);
  };

  useEffect(() => {
    onSetOption('30');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <OptionSwitcher
        options={optionWithName}
        setOptionValue={onSetOption}
        activeOptionValue={activeOptionSize.toString()}
      />
    </>
  );
};
