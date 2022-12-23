import { IconButton, Stack } from '@mui/material';
import { MoonIcon } from '../../../assets/icons/MoonIcon';
import { HeaderNavigation } from './HeaderNavigation';
import { HeaderAccount } from './HeaderAccount';

export const HeaderContent = () => (
  <Stack
    direction='row'
    justifyContent='space-between'
    alignItems='center'
    spacing={1}
    width={1}
    px={3}
    py={1}
    sx={{ '& .MuiTab-root': { mx: { xs: 0.5, md: 2 } } }}
  >
    <Stack direction='row' alignItems='center' spacing={2}>
      <HeaderAccount />
      <IconButton>
        <MoonIcon />
      </IconButton>
    </Stack>
    <HeaderNavigation />
  </Stack>
);
