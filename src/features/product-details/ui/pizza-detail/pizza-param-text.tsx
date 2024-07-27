import { FC } from 'react';

import { cn } from '@/shared/lib/cn';

import { useSelectedItems } from '../../model/selected-items-store';
import { PizzaOption } from '../../model/types/pizza';

interface PizzaParamTextProps {
  options: PizzaOption[];
  className?: string;
}

export const PizzaParamText: FC<PizzaParamTextProps> = ({
  options,
  className,
}) => {
  const [activeSize] = useSelectedItems((state) => [state.size, state.setSize]);

  const activeOption = options.find(
    (option) => option.size.toString() === activeSize,
  );

  return (
    <div className={cn(className)}>
      {activeOption?.size} см, ${activeOption?.weight} гр
    </div>
  );
};
