import { FC } from 'react';
import { Link } from '@mui/material';
import { WithChild } from '../../common/types';

export const HeaderName: FC<WithChild> = ({ children }) => (
  <Link
    href='/home'
    underline='hover'
    sx={{
      color: 'primary.contrastText',
      cursor: 'pointer',
      display: { xs: 'none', sm: 'initial' },
    }}
  >
    {children}
  </Link>
);
