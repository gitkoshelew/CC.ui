import { Paper, Stack, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

type WrapperNewTestType = {
  children: ReactNode;
  title: string;
};

export const StylizedPaper: FC<WrapperNewTestType> = ({ children, title }) => (
  <Stack direction='row' justifyContent='center'>
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        maxWidth: '850px',
        width: 1,
        mx: 2,
        p: { xs: '20px 30px 20px', sm: '40px 50px 30px' },
      }}
    >
      <Typography align='center'>{title}</Typography>
      {children}
    </Paper>
  </Stack>
);
