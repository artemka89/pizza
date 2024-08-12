import { FC } from 'react';

import { CheckoutAddressForm } from '@/features/checkout';
import { FormInput } from '@/shared/ui/form/form-input';
import { FormPhoneInput } from '@/shared/ui/form/form-phone-input';
import { FormTextarea } from '@/shared/ui/form/form-textarea';

export const CheckoutInfo: FC = () => {
  return (
    <>
      <FormInput
        name='name'
        placeholder='Введите ваше имя'
        type='name'
        label='Имя'
        autoComplete='name'
        required
        disabled={false}
      />
      <div className='flex gap-4'>
        <FormInput
          name='email'
          placeholder='name@example.com'
          type='email'
          label='Email'
          autoComplete='email'
          required
          disabled={false}
          className='w-full'
        />
        <FormPhoneInput
          name='phone'
          placeholder='+7 (999) 999-99-99'
          type='tel'
          label='Телефон'
          autoComplete='tel'
          required
          disabled={false}
          className='w-full'
        />
      </div>
      <CheckoutAddressForm name='address' label='Адрес' required />
      <FormTextarea
        name='comment'
        label='Комментарий к заказу'
        placeholder='Укажите тут дополнительную информацию для курьера'
      />
    </>
  );
};
