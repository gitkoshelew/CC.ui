import React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

type Props = {
  isValid: boolean;
  nameButton: string;
  href: string;
};

export const AuthButtonsGroup = ({ isValid, nameButton, href }: Props) => {
  const { t } = useTranslation('login');
  const isNameLogin = nameButton === 'Login';

  return (
    <div className='flex flex-col items-center gap-2'>
      {/* {isNameLogin && <Link href=' '>{t('forgottenPassword')}</Link>} */}
      <Button disabled={!isValid} type='submit'>
        {t(nameButton)}
      </Button>
      <hr className='h-px w-80 bg-neutral-300' />
      <span className='text-slate-500'>
        {t(isNameLogin ? 'dontHaveAcc' : 'Already registered?')}
      </span>
      <Link href={`/${href}`}>{t(isNameLogin ? 'registration' : 'Login')}</Link>
    </div>
  );
};
