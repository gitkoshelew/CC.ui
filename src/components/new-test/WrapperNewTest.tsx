import { Paper, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { WrapperNewTestType } from '../../Types/NewTestTypes';

export const WrapperNewTest: FC<WrapperNewTestType> = ({ children }) => (
  <Stack direction='row' justifyContent='center'>
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        height: '665px',
        width: '853px',
        p: '40px 52px 30px',
      }}
    >
      <Typography
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        Create test
      </Typography>
      {children}
    </Paper>
  </Stack>
);
