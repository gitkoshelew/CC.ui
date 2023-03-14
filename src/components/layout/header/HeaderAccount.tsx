import { Box } from '@mui/material';
import Link from 'next/link';
import { useAppSelector } from '../../../store/store';
import { AvatarImage } from './AvatarImage';

export const HeaderAccount = () => {
  const profileData = useAppSelector((state) => state.profile.profileData);

  if (profileData.nickname) {
    return (
      <>
        <Link href='/profilePage'>
          <AvatarImage width={38} height={37} />
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

  return null;
};
