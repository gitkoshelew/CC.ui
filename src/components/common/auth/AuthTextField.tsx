import React from 'react';
import { TextField } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { FieldError } from 'react-hook-form';

type AuthTextFieldType = {
  register: any;
  error: FieldError | undefined;
  name: string;
  required: string;
};

export const AuthTextField = ({
  register,
  error,
  name,
  required,
}: AuthTextFieldType) => {
  const { t } = useTranslation('login');
  const isPassword = () => (name === 'password' ? 8 : 2);
  const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const validation = {
    ...register(name, {
      required: `${t(required)}`,
      pattern: {
        value: name === 'email' ? emailValidation : null,
        message: `${t('emailMessage')}`,
      },
      minLength: {
        value: name === 'email' ? null : isPassword(),
        message:
          name === 'password'
            ? `${t('passwordMessage')}`
            : `${t('warningMessage')}`,
      },
    }),
  };

  return (
    <>
      <span>{t(name)}</span>
      <div className='mb-6 relative'>
        <TextField type={name} className='w-full' {...validation} />
        <div className='absolute left-2.5'>
          {error && (
            <span className='text-error-main'>{error.message || 'Error'}</span>
          )}
        </div>
      </div>
    </>
  );
};
