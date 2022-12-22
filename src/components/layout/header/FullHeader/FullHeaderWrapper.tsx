import { Card } from '@mui/material';
import { FC } from 'react';
import { WithChild } from '../../../common/types';

export const FullHeaderWrapper: FC<WithChild> = ({ children }) => (
  <Card
    sx={{
      backgroundColor: 'primary.main',
      backgroundImage: "url('https://i.imgur.com/BanONvM.png')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: { xs: 310, sm: 360 },
      overflow: 'hidden',
      color: 'primary.contrastText',
    }}
  >
    {children}
  </Card>
);
