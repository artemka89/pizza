import { FC } from 'react';

import { cn } from '@/shared/lib/cn';
import { CATEGORY_TYPE } from '@/shared/lib/constants/category-type';

interface TextOptionParamsLayoutProps {
  params: { size?: number; weight?: number };
  sizeName?: string;
  weightName?: string;
  className?: string;
}

const TextOptionParamsLayout: FC<TextOptionParamsLayoutProps> = ({
  params,
  sizeName,
  weightName,
  className,
}) => {
  return (
    <span className={cn('text-muted-foregrounds', className)}>
      {sizeName && params.size} {sizeName}
      {weightName && ', ' + params.weight} {weightName}
    </span>
  );
};

export const TextOptionParams = ({
  category,
  params,
}: {
  category: string;
  params: { size?: number; weight?: number };
}) => {
  switch (category) {
    case CATEGORY_TYPE.PIZZA:
      return (
        <TextOptionParamsLayout params={params} sizeName='см' weightName='г' />
      );
    case CATEGORY_TYPE.COFFEE:
      return (
        <TextOptionParamsLayout params={params} sizeName='л' weightName='г' />
      );
    case CATEGORY_TYPE.DRINK:
      return <TextOptionParamsLayout params={params} sizeName='л' />;

    default:
      return null;
  }
};
