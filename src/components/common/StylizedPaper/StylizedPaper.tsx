import { Paper, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { useTranslation } from 'next-i18next';

type StylizedPaperType = {
  children: ReactNode;
  title: string;
  i18nName: string;
  maxWidth?: string;
};

export const StylizedPaper = ({
  children,
  title,
  i18nName,
  maxWidth = '850px',
}: StylizedPaperType) => {
  const { t } = useTranslation(i18nName);

  return (
    <Stack direction='row' justifyContent='center' my='auto'>
      <Paper
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          maxWidth,
          width: 1,
          mx: 2,
          p: { xs: '20px 30px 20px', sm: '40px 50px 30px' },
        }}
      >
        <Typography align='center'>{t(title)}</Typography>
        {children}
      </Paper>
    </Stack>
  );
};
