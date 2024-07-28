import { FC, useEffect } from 'react';

import { SwitchButtons } from '@/shared/ui/switch-buttons';

import { PIZZA_SIZES } from '../../lib/constants';
import { mapOptions } from '../../lib/map-options';
import { useSelectedItems } from '../../model/selected-items-store';
import { PizzaOption } from '../../model/types/pizza';

interface PizzaSwitchOptionsProps {
  options: PizzaOption[];
}

export const PizzaSwitchOptions: FC<PizzaSwitchOptionsProps> = ({
  options,
}) => {
  const [setOption] = useSelectedItems((state) => [state.setOption]);

  useEffect(() => {
    if (options[1]) {
      setSize(options[1].size.toString());
    } else {
      setSize(options[0].size.toString());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setSize = (size: string) => {
    const selectedOption = options.find(
      (option) => option.size.toString() === size,
    );
    if (selectedOption) {
      setOption(selectedOption);
    }
  };

  const mappedSizes = mapOptions(options, PIZZA_SIZES, 'size');

  return (
    <SwitchButtons
      values={mappedSizes}
      initialKey={'30'}
      onChangeValue={setSize}
    />
  );
};
