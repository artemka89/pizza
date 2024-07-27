import { FC } from 'react';

import { SwitchButtons } from '@/shared/ui/switch-buttons';

import { mapSizes } from '../../lib/map-sizes';

interface PizzaSwitchOptionsProps {
  options: { size: number }[];
  setOption: (value: string) => void;
}

export const PizzaSwitchOptions: FC<PizzaSwitchOptionsProps> = ({
  options,
  setOption,
}) => {
  const mappedSizes = mapSizes(options);

  return (
    <SwitchButtons
      values={mappedSizes}
      initialKey='30'
      onChangeValue={setOption}
    />
  );
};
