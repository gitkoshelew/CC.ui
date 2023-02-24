import { Avatar, IconButton, Link } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { AvatarIcon } from '../../../assets/icons/AvatarIcon';
import { userData } from '../../../Mocs/HeaderMoc';
import { useAppSelector } from '../../../store/store';
import { isAuthAC, logOutAC } from '../../../store/reducers/auth-reducer';
import {
  getTokenFromStorage,
  removeTokenFromStorage,
} from '../../../utils/token';

export const HeaderAccount = () => {
  const isAuth = useAppSelector((state) => state.regis.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const { avatar, name } = userData;

  useEffect(() => {
    const storedData = getTokenFromStorage();
    if (storedData) {
      dispatch(isAuthAC());
    }
  }, []);

  const onLogOutHandler = () => {
    removeTokenFromStorage();
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
        <IconButton onClick={onLogOutHandler} color='inherit'>
          <LogoutIcon fontSize='small' />
        </IconButton>
      )}
    </>
  );
};
