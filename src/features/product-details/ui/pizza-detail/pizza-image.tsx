import { cn } from '@/shared/lib/cn';

interface Props {
  className?: string;
  imageUrl: string;
  size?: number;
}

export const PizzaImage: React.FC<Props> = ({ className, imageUrl, size }) => {
  return (
    <div
      className={cn(
        'relative flex w-full flex-1 items-center justify-center',
        className,
      )}>
      <img
        src={imageUrl}
        alt='Logo'
        className={cn(
          'relative left-0 top-0 z-10 transition-all duration-300',
          {
            'size-[300px]': size === 25,
            'size-[380px]': size === 30,
            'size-[460px]': size === 35,
          },
        )}
      />

      <div className='absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-border' />
      <div className='absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dotted border-border' />
    </div>
  );
};
