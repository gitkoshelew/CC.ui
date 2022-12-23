import { FC } from 'react';
import { Box } from '@mui/material';
import { Header, HeaderTypes } from './header/Header';

type LayoutPropsType = {
  children: React.ReactNode;
  headerType?: HeaderTypes;
};

export const Layout: FC<LayoutPropsType> = ({ children, headerType }) => (
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
    <Header headerType={headerType} />
    {children}
  </Box>
);
