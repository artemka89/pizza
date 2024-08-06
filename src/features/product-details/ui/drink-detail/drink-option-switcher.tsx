import { FC } from 'react';

import { SwitchButtons } from '@/shared/ui/switch-buttons';

import { DrinkOption } from '../../model/types/drink';
import { useMappedOptionToParam } from '../../model/use-mapped-option-to-param';

interface DrinkOptionSwitcherProps {
  options: DrinkOption[];
}

export const DrinkOptionSwitcher: FC<DrinkOptionSwitcherProps> = ({
  options,
}) => {
  const { mappedOptions, setOptionParam } = useMappedOptionToParam(
    options,
    'size',
  );

  return (
    <SwitchButtons values={mappedOptions} onChangeValue={setOptionParam} />
  );
};
