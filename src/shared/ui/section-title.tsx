import { FC } from 'react';

interface SectionTitleProps {
  text: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({ text }) => {
  return <h2 className='text-[32px] font-bold'>{text}</h2>;
};
