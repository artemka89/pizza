import { FC, useEffect } from 'react';

import { SwitchButtons } from '@/shared/ui/switch-buttons';

import { mapOptions } from '../../lib/map-options';
import { useSelectedItems } from '../../model/selected-items-store';
import { PizzaOption } from '../../model/types/pizza';

export const SIZES: Record<number, string> = {
  25: 'Маленькая',
  30: 'Средняя',
  35: 'Большая',
} as const;

interface PizzaSwitchOptionsProps {
  options: PizzaOption[];
}

export const PizzaSwitchOptions: FC<PizzaSwitchOptionsProps> = ({
  options,
}) => {
  const [setOption] = useSelectedItems((state) => [state.setOption]);

  useEffect(() => {
    setSize('30');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setSize = (size: string) => {
    const selectedOption = options.find(
      (option) => option.size.toString() === size,
    );
    setOption(selectedOption);
  };

  const mappedSizes = mapOptions(options, SIZES, 'size');

  return (
    <SwitchButtons
      values={mappedSizes}
      initialKey={'30'}
      onChangeValue={setSize}
    />
  );
};
