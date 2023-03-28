import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Layout } from '../../components/layout/Layout';
import { ButtonBackHome } from '../../components/common/ButtonBackHome';
import { StylizedPaper } from '../../components/common/StylizedPaper/StylizedPaper';
import { ExitIcon } from '../../assets/icons/ExitIcon';
import { useAppDispatch, useAppSelector, wrapper } from '../../store/store';
import { setProfileData } from '../../store/reducers/profile-reducer';
import { removeTokenFromStorage } from '../../utils/token';
import { AvatarImage } from '../../components/layout/header/AvatarImage';

const ProfilePage = () => {
  const profileData = useAppSelector((state) => state.profile.profileData);
  const dispatch = useAppDispatch();
  const { push } = useRouter();

  const logoutHandler = async () => {
    removeTokenFromStorage();
    destroyCookie(null, 'refreshToken');
    await push('/login');
    dispatch(setProfileData({}));
  };

  if (profileData.name) {
    return (
      <Layout>
        <ButtonBackHome />
        <StylizedPaper title='Profile Page' i18nName='profile'>
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

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(() => async ({ locale }) => ({
    props: {
      ...(await serverSideTranslations(locale as string, ['home', 'profile'])),
    },
  }));
