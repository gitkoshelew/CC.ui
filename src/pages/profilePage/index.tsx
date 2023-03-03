import {Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';
import { Layout } from '../../components/layout/Layout';
import { ButtonBackHome } from '../../components/common/ButtonBackHome';
import { StylizedPaper } from '../../components/common/StylizedPaper/StylizedPaper';
import { ExitIcon } from '../../assets/icons/ExitIcon';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setProfileData } from '../../store/reducers/profile-reducer';
import { removeTokenFromStorage } from '../../utils/token';
import { AvatarImage } from '../../components/layout/header/AvatarImage';

const ProfilePage = () => {
  const profileData = useAppSelector((state) => state.profile.profileData);
  const dispatch = useAppDispatch();
  const { push } = useRouter();

  const logoutHandler = () => {
    removeTokenFromStorage();
    dispatch(setProfileData({}));
    destroyCookie(null, 'refreshToken');
    push('/login');
  };

  if (profileData.name) {
    return (
      <Layout>
        <ButtonBackHome />
        <StylizedPaper title='Profile Page'>
          <Stack alignItems='center' spacing={3}>
            <Stack
              direction='row'
              spacing={2}
              position='absolute'
              right={25}
              top={25}
              onClick={logoutHandler}
            >
              <ExitIcon />
            </Stack>
            <AvatarImage width={200} height={200} />
            <Typography>{profileData.name}</Typography>
            <Typography typography='subtitle1'>{profileData.email}</Typography>
          </Stack>
        </StylizedPaper>
      </Layout>
    );
  }

  return null;
};
export default ProfilePage;
