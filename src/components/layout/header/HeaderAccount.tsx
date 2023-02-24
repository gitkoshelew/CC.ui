import { Avatar, IconButton, Link } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { AvatarIcon } from '../../../assets/icons/AvatarIcon';
import { userData } from '../../../Mocs/HeaderMoc';
import { useAppSelector } from '../../../store/store';
import { logOutAC } from '../../../store/reducers/auth-reducer';

export const HeaderAccount = () => {
  const isAuth = useAppSelector((state) => state.regis.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const { avatar, name } = userData;

  const check = () => {
    localStorage.removeItem('token');
    dispatch(logOutAC());
    router.push('/login');
  };

  return (
    <>
      {avatar ? (
        <Avatar sx={{ width: 38, height: 37 }} src={avatar} alt='Avatar' />
      ) : (
        <AvatarIcon />
      )}
      <Link
        textOverflow='ellipsis'
        overflow='hidden'
        whiteSpace='nowrap'
        maxWidth={240}
        href='/'
        underline='hover'
        display={{ xs: 'none', sm: 'initial' }}
        color='primary.contrastText'
        sx={{ cursor: 'pointer' }}
      >
        {name}
      </Link>
      {isAuth && (
        <IconButton onClick={check} color='inherit'>
          <LogoutIcon />
        </IconButton>
      )}
    </>
  );
};
