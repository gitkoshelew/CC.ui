import { FC } from 'react';
import { Stack } from '@mui/material';
import { Category } from './Category';
import { Sorting } from './Sorting';

type NavigationType = {
  categories: string[];
  sort: string[];
};

export const Navigation: FC<NavigationType> = ({ categories, sort }) => (
  <Stack direction='column' spacing={3}>
    <Category categories={categories} />
    <Sorting sort={sort} />
  </Stack>
);
