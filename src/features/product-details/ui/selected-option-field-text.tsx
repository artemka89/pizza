import { FC } from 'react';

import { useSelectedItems } from '@/entities/product';

import { formatFieldText } from '../lib/format-field-text';

export const SelectedOptionFieldText: FC = () => {
  const [selectedField] = useSelectedItems((state) => [state.option]);

  const text = formatFieldText({
    size: selectedField?.size,
    weight: selectedField?.weight,
    volume: selectedField?.volume,
  });

  return <span className='text-muted-foregrounds'>{text}</span>;
};
