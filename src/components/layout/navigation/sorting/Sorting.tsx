import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { SelectChangeEvent } from '@mui/material/Select';
import { SortingSelectField } from './SortingSelectField';

type SortingType = {
  sorts: string[];
};

export const Sorting = ({ sorts }: SortingType) => {
  const [value, setValue] = useState('Date');
  const { t } = useTranslation('home');

  const handleChange = (event: SelectChangeEvent<any>) => {
    setValue(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        gap: 2.5,
      }}
    >
      <Typography typography='subtitle1' color='text.primaryAlpha300'>
        {t('sorting')}
      </Typography>
      <SortingSelectField
        sorts={sorts}
        value={value}
        handleChange={handleChange}
      />
    </Box>
  );
};
