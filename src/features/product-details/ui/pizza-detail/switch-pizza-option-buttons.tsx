import { FC } from 'react';

import { SwitchButtons } from '@/shared/ui/switch-buttons';

import { ACTIVE_PIZZA_SIZE, PIZZA_SIZES } from '../../lib/constants';
import { PizzaOption } from '../../model/types/pizza';
import { useMappedOptionToParam } from '../../model/use-mapped-option-to-param';

interface SwitchPizzaOptionButtonsProps {
  options: PizzaOption[];
}

export const SwitchPizzaOptionButtons: FC<SwitchPizzaOptionButtonsProps> = ({
  options,
}) => {
  const { mappedOptions, setOptionParam } = useMappedOptionToParam(
    options,
    'size',
    ACTIVE_PIZZA_SIZE,
    PIZZA_SIZES,
  );

  return (
    <SwitchButtons
      values={mappedOptions}
      activeParam={ACTIVE_PIZZA_SIZE}
      onChangeValue={setOptionParam}
    />
  );
};
