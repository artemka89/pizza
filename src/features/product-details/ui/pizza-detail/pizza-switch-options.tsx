import { FC } from 'react';

import { SwitchButtons } from '@/shared/ui/switch-buttons';

import { mapSizes } from '../../lib/map-sizes';
import { useSelectedItems } from '../../model/selected-items-store';

interface PizzaSwitchOptionsProps {
  options: { size: number }[];
}

export const PizzaSwitchOptions: FC<PizzaSwitchOptionsProps> = ({
  options,
}) => {
  const [activeSize, setSize] = useSelectedItems((state) => [
    state.size,
    state.setSize,
  ]);

  const mappedSizes = mapSizes(options);

  return (
    <SwitchButtons
      values={mappedSizes}
      initialKey={activeSize}
      onChangeValue={setSize}
    />
  );
};
