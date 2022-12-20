import { FC } from 'react';
import { Stack } from '@mui/material';
import { WithChild } from '../../common/types';

export const HeaderStack: FC<WithChild> = ({ children }) => (
  <Stack
    direction='row'
    justifyContent='space-between'
    alignItems='center'
    spacing={1}
    px={3}
    py={1}
    sx={{ '& .MuiTab-root': { mx: { xs: 0.5, md: 2 } } }}
  >
    {children}
  </Stack>
);
