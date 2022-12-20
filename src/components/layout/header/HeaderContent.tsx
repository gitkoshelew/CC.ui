import { Avatar, IconButton, Stack, Tab, Tabs } from '@mui/material';
import { AvatarIcon } from '../../../assets/icons/AvatarIcon';
import { MoonIcon } from '../../../assets/icons/MoonIcon';
import { HeaderName } from './HeaderName';
import { HeaderStack } from './HeaderStack';

const userData = {
  avatar: 'https://i.imgur.com/XBQQHe9.png',
  name: 'Design',
};

export const HeaderContent = () => {
  const { avatar, name } = userData;

  return (
    <HeaderStack>
      <Stack direction='row' alignItems='center' spacing={2}>
        {avatar ? (
          <Avatar sx={{ width: 38, height: 37 }} src={avatar} alt='Avatar' />
        ) : (
          <AvatarIcon />
        )}
        <HeaderName>{name}</HeaderName>
        <IconButton>
          <MoonIcon />
        </IconButton>
      </Stack>
      <Tabs
        value='test list'
        scrollButtons='auto'
        variant='scrollable'
        aria-label='secondary tabs example'
      >
        <Tab label='Users' value='users' />
        <Tab label='Live coding' value='live coding' />
        <Tab label='Test list' value='test list' />
      </Tabs>
    </HeaderStack>
  );
};
