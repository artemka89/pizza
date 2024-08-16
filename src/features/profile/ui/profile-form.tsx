import { FC, useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/shared/ui/button';
import { FormInput } from '@/shared/ui/form/form-input';
import { FormPhoneInput } from '@/shared/ui/form/form-phone-input';
import { Title } from '@/shared/ui/title';

import {
  ProfileFormSchema,
  ProfileFormType,
} from '../model/profile-form-schema';
import { useUpdateEmail } from '../model/use-update-email';
import { useUpdateName } from '../model/use-update-name';
import { useUpdatePhone } from '../model/use-update-phone';

import { ProfileModal } from './profile-modal';

function getDefaultValues(data: {
  name: string;
  email: string;
  phone: string;
}) {
  return {
    fullName: data.name,
    email: data.email,
    phone: data.phone,
    password: '',
  };
}

interface ProfileFormProps {
  data: { name: string; email: string; phone: string };
}

export const ProfileForm: FC<ProfileFormProps> = ({ data }) => {
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);

  const updateName = useUpdateName();
  const updateEmail = useUpdateEmail();
  const updatePhone = useUpdatePhone();

  const methods = useForm<ProfileFormType>({
    mode: 'onBlur',
    defaultValues: getDefaultValues(data),
    resolver: zodResolver(ProfileFormSchema),
  });

  useEffect(() => {
    methods.reset(getDefaultValues(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const unmaskValue = (value: string) => {
    return value.replace(/[^\d+]/g, '');
  };

  const { dirtyFields } = methods.formState;

  const onSubmitHandler: SubmitHandler<ProfileFormType> = (formData) => {
    if (dirtyFields.fullName) {
      updateName.mutate(formData.fullName, {
        onSuccess: () => setIsOpenConfirmModal(false),
      });
    }
    if (dirtyFields.email) {
      updateEmail.mutate(
        { email: formData.email, password: formData.password },
        {
          onSuccess: () => setIsOpenConfirmModal(false),
        },
      );
    }
    if (data.phone !== unmaskValue(formData.phone)) {
      updatePhone.mutate(
        {
          phone: unmaskValue(formData.phone),
          password: formData.password,
        },
        {
          onSuccess: () => setIsOpenConfirmModal(false),
        },
      );
    }
  };

  const onClickSave = () => {
    setIsOpenConfirmModal(true);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form className='max-w-[500px]'>
          <FormInput name='fullName' label='Полное имя' required />
          <FormInput name='email' label='Email' required />
          <FormPhoneInput name='phone' label='Телефон' required />
          <Button
            type='button'
            disabled={!methods.formState.isDirty}
            onClick={onClickSave}
            className='mb-4 mt-2 w-full'>
            Сохранить
          </Button>
          <ProfileModal
            isOpen={isOpenConfirmModal}
            onClose={() => setIsOpenConfirmModal(false)}>
            <Title size='sm' className='text-center'>
              Введите пароль для подтверждения
            </Title>
            <FormInput name='password' />
            <Button
              type='button'
              onClick={methods.handleSubmit(onSubmitHandler)}
              disabled={updatePhone.isPending}
              className='w-full'>
              Подтвердить
            </Button>
          </ProfileModal>
        </form>
      </FormProvider>
    </>
  );
};
