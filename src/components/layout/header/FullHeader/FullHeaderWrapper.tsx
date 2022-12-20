import { Card } from '@mui/material';
import { WithChild } from '../../../common/types';
import { FC } from 'react';

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
