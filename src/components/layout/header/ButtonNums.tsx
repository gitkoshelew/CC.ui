import { FC } from 'react';
import { Box } from '@mui/material';

type ButtonNumsPropsType = {
  value: number;
};
export const ButtonNums: FC<ButtonNumsPropsType> = (props) => (
  <Box
    sx={{
      fontSize: '12px!important',
      bgcolor: 'primary.main',
      color: 'primary.contrastText',
      width: { xs: 36, md: 46 },
      ml: { xs: 0.3, md: 2 },
      borderRadius: '5px',
      display: { xs: 'none', sm: 'initial' },
    }}
  >
    {props.value}
  </Box>
);
