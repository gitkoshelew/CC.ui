import { Stack } from '@mui/material';
import { Category } from './Category';
import { Sorting } from './sorting/Sorting';

type NavigationType = {
  categories: string[];
  sorts: string[];
};

export const Navigation = ({ categories, sorts }: NavigationType) => (
  <Stack direction='column' spacing={3}>
    <Category categories={categories} />
    <Sorting sorts={sorts} />
  </Stack>
);
