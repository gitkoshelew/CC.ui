import { SyntheticEvent, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Paper } from '@mui/material';
import { useTranslation } from 'next-i18next';

type CategoryType = {
  categories: string[];
};

export const Category = ({ categories }: CategoryType) => {
  const [value, setValue] = useState(3);
  const { t } = useTranslation('home');

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{
        borderRadius: '15px',
        p: { xs: '0 20px', sm: '0 50px', md: '0 20%' },
        '& .MuiTab-root': {
          p: '16px 4px',
        },
      }}
      role='slider'
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant='scrollable'
        scrollButtons='auto'
        aria-label='scrollable auto tabs example'
      >
        {categories.map((category) => (
          <Tab label={t(category)} key={category} />
        ))}
      </Tabs>
    </Paper>
  );
};
