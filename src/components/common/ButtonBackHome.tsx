import Link from 'next/link';
import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { ArrowLeftIcon } from '../../assets/icons/ArrowLeftIcon';

export const ButtonBackHome = () => {
  const { t } = useTranslation('home');

  return (
    <Link href='/'>
      <Stack direction='row' alignItems='center' spacing={2} paddingLeft={6}>
        <ArrowLeftIcon />
        <Typography color='text.primaryAlpha300' typography='subtitle1'>
          {t('Back to tests')}
        </Typography>
      </Stack>
    </Link>
  );
};
