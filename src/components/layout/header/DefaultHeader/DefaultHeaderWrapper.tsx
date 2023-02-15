import { Card } from '@mui/material';
import { WithChild } from '../../../../Types/types';

export const DefaultHeaderWrapper = ({ children }: WithChild) => (
  <Card
    sx={{
      display: 'flex',
      background:
        'linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255,' +
        " 0.1)), url('https://i.imgur.com/LAyoKOG.png')",
      backgroundSize: 'cover',
      bgcolor: 'primary.main',
      color: 'primary.contrastText',
      borderRadius: 0,
    }}
  >
    {children}
  </Card>
);
