import { FC, ReactNode } from 'react';
import { Header } from './header/Header/Header';
import { FullHeader } from './header/FullHeader/FullHeader';
import { Box } from '@mui/material';

type LayoutPropsType = {
  children: ReactNode;
  header?: 'full' | 'default';
};
export const Layout: FC<LayoutPropsType> = ({
  children,
  header = 'default',
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        fontSize: { xs: 'small', sm: 'medium' },
        minHeight: '100vh',
        bgcolor: 'background.default',
        gap: 3,
        p: 2,
      }}
    >
      {header === 'default' ? <Header /> : <FullHeader />}
      {children}
    </Box>
  );
};
