import { FC } from 'react';

import { useSelectedItems } from '@/entities/products';

interface SelectedOptionTextProps {
  sizeName?: string;
  weightName?: string;
}

export const SelectedOptionText: FC<SelectedOptionTextProps> = ({
  sizeName,
  weightName,
}) => {
  const [selectedOption] = useSelectedItems((state) => [state.option]);

  return (
    <span className='text-muted-foregrounds'>
      {sizeName && selectedOption?.size} {sizeName}
      {weightName && ', ' + selectedOption?.weight} {weightName}
    </span>
  );
};
