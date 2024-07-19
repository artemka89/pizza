import { cn } from '../lib/cn';

type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface Props {
  size?: TitleSize;
  className?: string;
  children: React.ReactNode;
}

export const Title: React.FC<Props> = ({
  children,
  size = 'sm',
  className,
}) => {
  const mapTagBySize = {
    xs: 'h5',
    sm: 'h4',
    md: 'h3',
    lg: 'h2',
    xl: 'h1',
    '2xl': 'h1',
  } as const;

  const TitleTag = mapTagBySize[size];

  return (
    <TitleTag
      className={cn(
        {
          xs: 'text-[16px]',
          sm: 'text-[22px]',
          md: 'text-[26px]',
          lg: 'text-[32px]',
          xl: 'text-[40px]',
          '2xl': 'text-[48px]',
        }[size],
        'font-bold',
        className,
      )}>
      {children}
    </TitleTag>
  );
};
