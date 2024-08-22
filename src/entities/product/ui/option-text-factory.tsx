import { cn } from '@/shared/lib/cn';
import { CATEGORY_TYPE } from '@/shared/lib/constants/category-type';

import { getOptionText } from '../lib/get-option-text';

interface OptionTextLayoutProps {
  option: { size?: number; weight?: number };
  sizeName?: string;
  weightName?: string;
  className?: string;
}

export const OptionTextFactory = ({
  category,
  option,
}: {
  category: string;
  option: { size?: number; weight?: number };
}) => {
  switch (category) {
    case CATEGORY_TYPE.PIZZA:
      return <OptionTextLayout option={option} sizeName='см' weightName='г' />;
    case CATEGORY_TYPE.COFFEE:
      return <OptionTextLayout option={option} sizeName='л' weightName='г' />;
    case CATEGORY_TYPE.DRINK:
      return <OptionTextLayout option={option} sizeName='л' />;

    default:
      return null;
  }
};

function OptionTextLayout({
  option,
  sizeName,
  weightName,
  className,
}: OptionTextLayoutProps) {
  const optionText = getOptionText(option, sizeName, weightName);

  return (
    <span className={cn('text-muted-foregrounds', className)}>
      {optionText}
    </span>
  );
}
