import { Avatar, Typography } from '@mui/material';
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

  return (
    <Layout>
      <ButtonBackHome />
      <StylizedPaper title='Profile Page'>
        <Stack direction='row' spacing={2} position='absolute' right={40}>
          <Stack onClick={logoutHandler}>
            <ExitIcon />
          </Stack>
        </Stack>
        <Stack alignItems='center' spacing={3}>
          <Avatar
            sx={{ width: 200, height: 200 }}
            src='https://i.imgur.com/XBQQHe9.png'
            alt='Avatar'
          />
          <Typography>
            {profileData.name ? profileData.name : 'name'}
          </Typography>
          <Typography typography='subtitle1'>
            {profileData.email ? profileData.email : 'email'}
          </Typography>
        </Stack>
      </StylizedPaper>
    </Layout>
  );
};

export default ProfilePage;
