import { Button, Typography } from '@mui/material';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { AuthorType } from '../../../Types/CardTypes';

type PropsCardType = {
  title: string;
  author: AuthorType;
};

export const Card = ({ title, author }: PropsCardType) => {
  const { t } = useTranslation('home');
  return (
    <div className='flex flex-col text-center bg-background-paper shadow border rounded-2xl px-5 pt-11 pb-7 relative text-sm'>
      <div className='absolute -top-2 right-7 py-0.5 px-4 rounded-2xl text-xs font-light bg-secondary-main text-secondary-contrastText'>
        verified{author.status}
      </div>
      <div className='flex flex-col justify-between items-center h-full'>
        <Typography fontWeight={600} mb={3}>
          NodeJs
        </Typography>
        <div className='flex flex-col gap-1.5 justify-center mb-7'>
          <p className='m-0'>{title}</p>
          <p className='m-0'>
            <span className='text-text-primaryAlpha300'>By </span>
            {author.name}
          </p>
        </div>
        <div className='flex flex-col text-center items-center gap-4'>
          <Link href='/testPage'>
            <Button>{t('start')}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
