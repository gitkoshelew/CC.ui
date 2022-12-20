import { FC } from 'react';
import { Stack } from '@mui/material';
import { WithChild } from '../../common/types';

export const HeaderButtons: FC<WithChild> = ({ children }) => (
  <Stack
    spacing={{ xs: 2, sm: 4 }}
    direction='row'
    sx={{ '& .MuiButton-contained': { px: { xs: 2, md: 5 } } }}
  >
    {children}
  </Stack>
);
