import { FC } from 'react';
import { AddressSuggestions } from 'react-dadata';
import { Controller, useFormContext } from 'react-hook-form';

import { cn } from '@/shared/lib/cn';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';

import 'react-dadata/dist/react-dadata.css';

interface CheckoutAddressFormProps {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const CheckoutAddressForm: FC<CheckoutAddressFormProps> = ({
  name,
  label,
  required,
  className,
}) => {
  const { control } = useFormContext();
  // TODO: fix ref error
  return (
    <Controller
      control={control}
      name='address'
      render={({ field: { onChange }, fieldState }) => (
        <>
          <div className={cn(className, 'relative mb-5')}>
            <Label htmlFor={name} className='mb-2 ml-2 font-semibold'>
              {label} {required && <span className='text-red-500'>*</span>}
            </Label>
            <AddressSuggestions
              token='ef0310ff8bd6631ed82bc0558d92fd3817e5104b'
              onChange={(data) => onChange(data?.value)}
              customInput={(props) => <Input {...props} />}
            />
            {fieldState.error?.message && (
              <p
                className={cn(
                  'absolute ml-2 mt-1 text-sm text-red-500',
                  className,
                )}>
                {fieldState.error?.message}
              </p>
            )}
          </div>
        </>
      )}
    />
  );
};
