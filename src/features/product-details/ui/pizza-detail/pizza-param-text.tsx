import { FC } from 'react';

import { useSelectedItems } from '../../model/selected-items-store';

export const PizzaParamText: FC = () => {
  const [selectedOption] = useSelectedItems((state) => [state.option]);

  return (
    <>
      {selectedOption?.size} см, {selectedOption?.weight} гр
    </>
  );
};
