import { FC } from 'react';

interface SearchProductCardProps {
  name: string;
  imageUrl: string;
}

export const SearchProductCard: FC<SearchProductCardProps> = ({
  name,
  imageUrl,
}) => {
  return (
    <div className='flex w-full cursor-pointer items-center gap-3 px-3 py-2 hover:bg-primary/10'>
      <img src={imageUrl} alt={name} className='size-10' />
      <span>{name}</span>
    </div>
  );
};
