import { FC } from 'react';

import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { RangeSlider } from '@/shared/ui/range-slider';
import { Title } from '@/shared/ui/title';

import { FilterCheckbox } from './filter-checkbox';
import { FilterCheckboxGroup } from './filter-checkbox-list';

const items = [
  {
    name: 'Мясо',
    value: 'мясо',
  },
  {
    name: 'Помидоры',
    value: 'помидоры',
  },
  {
    name: 'Лук',
    value: 'лук',
  },
  {
    name: 'Перец',
    value: 'перец',
  },
  {
    name: 'Грибы',
    value: 'грибы',
  },
];

interface FilterSideBarProps {
  className?: string;
}

export const FilterSideBar: FC<FilterSideBarProps> = ({ className }) => {
  return (
    <div className={cn('w-[250px]', className)}>
      <div>
        <Title size='sm' className='mb-2'>
          Фильтрация
        </Title>
        <FilterCheckbox text='Новинки' value='Новинки' />
      </div>
      <div className='mt-4'>
        <Title size='xs' className='mb-2'>
          Цена от и до:
        </Title>
        <div className='mb-5 flex gap-3'>
          <Input type='number' placeholder='0' min={0} max={30000} />
          <Input type='number' placeholder='1500' min={100} max={30000} />
        </div>
        <RangeSlider min={0} max={1500} step={10} />
      </div>
      <div className='mt-10'>
        <Title size='xs' className='mb-2'>
          Ингредиенты:
        </Title>
        <FilterCheckboxGroup items={items} />
        <Button variant='link' className='mt-2 h-auto p-0'>
          + Показать еще
        </Button>
      </div>
      <div className='mt-4'>
        <Title size='xs' className='mb-2'>
          Тип теста:
        </Title>
        <FilterCheckboxGroup
          items={[
            { name: 'Тонкое', value: 'тонкое' },
            { name: 'Толстое', value: 'толстое' },
          ]}
        />
      </div>
    </div>
  );
};
