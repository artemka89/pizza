import { useSelectedItems } from '@/entities/product';
import { cn } from '@/shared/lib/cn';

interface PizzaImageProps {
  imageUrl: string;
}

export const PizzaImage: React.FC<PizzaImageProps> = ({ imageUrl }) => {
  const [selectedOption] = useSelectedItems((state) => [state.option]);

  return (
    <div className='relative flex w-full flex-1 items-center justify-center'>
      <img
        src={imageUrl}
        alt={`${selectedOption?.size}`}
        className={cn(
          'relative left-0 top-0 z-10 transition-all duration-300',
          {
            25: 'size-[300px]',
            30: 'size-[380px]',
            35: 'size-[460px]',
          }[selectedOption?.size as number],
        )}
      />
      <div className='absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-border' />
      <div className='absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dotted border-border' />
    </div>
  );
};
