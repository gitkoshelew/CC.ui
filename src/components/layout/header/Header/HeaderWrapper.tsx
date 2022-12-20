import { FC } from 'react';
import { Card } from '@mui/material';
import { WithChild } from '../../../common/types';

export const HeaderWrapper: FC<WithChild> = ({ children }) => (
  <Card
    sx={{
      background:
        'linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255,' +
        " 0.1)), url('https://i.imgur.com/LAyoKOG.png')",
      backgroundSize: 'cover',
      bgcolor: 'primary.main',
      color: 'primary.contrastText',
    }}
  >
    {children}
  </Card>
);
