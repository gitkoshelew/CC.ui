import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';
import { Header, HeaderTypes } from './header/Header';

type LayoutPropsType = {
  children: ReactNode;
  headerType?: HeaderTypes;
};

export const Layout: FC<LayoutPropsType> = ({ children, headerType }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      fontSize: { xs: 'small', md: 'medium' },
      minHeight: '100vh',
      bgcolor: 'background.default',
      pb: 3,
      gap: 3,
    }}
  >
    <Header headerType={headerType} />
    {children}
  </Box>
);
