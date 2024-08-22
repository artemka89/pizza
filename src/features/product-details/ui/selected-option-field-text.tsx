import { FC } from 'react';

import { formatOptionFieldText, useSelectedItems } from '@/entities/product';

export const SelectedOptionFieldText: FC = () => {
  const [selectedField] = useSelectedItems((state) => [state.option]);

  const text = formatOptionFieldText({
    size: selectedField?.size,
    weight: selectedField?.weight,
    volume: selectedField?.volume,
  });

  return <span className='text-muted-foregrounds'>{text}</span>;
};
