import { Avatar, Link } from '@mui/material';
import { AvatarIcon } from '../../../assets/icons/AvatarIcon';
import { useAppSelector } from '../../../store/store';

export const HeaderAccount = () => {
  const profileData = useAppSelector((state) => state.profile.profileData);

  return (
    <>
      {profileData.name ? (
        <Avatar
          sx={{ width: 38, height: 37 }}
          src='https://i.imgur.com/XBQQHe9.png'
          alt='Avatar'
        />
      ) : (
        <AvatarIcon />
      )}
      {profileData.nickname ? (
        <Link
          textOverflow='ellipsis'
          overflow='hidden'
          whiteSpace='nowrap'
          maxWidth={240}
          href='/profilePage'
          underline='hover'
          display={{ xs: 'none', sm: 'initial' }}
          color='primary.contrastText'
          sx={{ cursor: 'pointer' }}
        >
          {profileData.nickname}
        </Link>
      ) : (
        ''
      )}
    </>
  );
};
