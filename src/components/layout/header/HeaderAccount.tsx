import { Avatar, Box } from '@mui/material';
import Link from 'next/link';
import { useAppSelector } from '../../../store/store';

export const HeaderAccount = () => {
  const profileData = useAppSelector((state) => state.profile.profileData);

  if (profileData.name) {
    return (
      <>
        <Link href='/profilePage'>
          <Avatar
            sx={{ width: 38, height: 37 }}
            src='https://i.imgur.com/XBQQHe9.png'
            alt='Avatar'
          />
        </Link>
        <Box
          maxWidth={240}
          display={{ xs: 'none', sm: 'initial' }}
          color='primary.contrastText'
        >
          {profileData.nickname}
        </Box>
      </>
    );
  }

  return <Box />;
};
