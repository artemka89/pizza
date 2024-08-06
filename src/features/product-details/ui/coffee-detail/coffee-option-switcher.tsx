import { FC } from 'react';

import { SwitchButtons } from '@/shared/ui/switch-buttons';

import { CoffeeOption } from '../../model/types/coffee';
import { useMappedOptionToParam } from '../../model/use-mapped-option-to-param';

interface CoffeeOptionSwitcherProps {
  options: CoffeeOption[];
}

export const CoffeeOptionSwitcher: FC<CoffeeOptionSwitcherProps> = ({
  options,
}) => {
  const { mappedOptions, setOptionParam } = useMappedOptionToParam(
    options,
    'size',
  );

  return (
    <SwitchButtons
      values={mappedOptions}
      onChangeValue={setOptionParam}
      quantityType='л'
    />
  );
};
