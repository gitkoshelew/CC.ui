import { Paper, Stack, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

type WrapperNewTestType = {
  children: ReactNode;
  title?: string;
};

export const WrapperNewTest: FC<WrapperNewTestType> = ({ children, title }) => (
  <Stack direction='row' justifyContent='center'>
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        maxWidth: '850px',
        width: 1,
        p: '40px 52px 30px',
      }}
    >
      {title && <Typography align='center'>{title}</Typography>}
      {children}
    </Paper>
  </Stack>
);
