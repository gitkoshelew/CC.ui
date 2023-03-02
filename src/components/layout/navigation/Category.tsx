import { SyntheticEvent, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import { Paper } from '@mui/material';
import { Tab } from './Tab';

type CategoryType = {
  categories: string[];
};

export const Category = ({ categories }: CategoryType) => {
  const [value, setValue] = useState(3);

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
          <Tab key={category} label={category} />
        ))}
      </Tabs>
    </Paper>
  );
};
