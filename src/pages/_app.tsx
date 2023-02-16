import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { Suspense, useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { GlobalThemes } from '../styles/theme/types';
import { useAppDispatch, wrapper } from '../store/store';
import { ErrorSnackbar } from '../components/ErrorHandler/ErrorHandler';
import { Preloader } from '../components/common/Preloader/Preloader';
import { checkAuthAC } from '../store/reducers/auth-reducer';
import { getFromLocalStorage } from '../utils/getFromLocalStorage';

function App({ Component, pageProps }: AppProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    const storedData = getFromLocalStorage('token');
    if (storedData) {
      dispatch(checkAuthAC());
      router.push('profilePage');
    } else {
      router.push('login');
    }
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider theme={GlobalThemes.LIGHT}>
        <Preloader />
        <Component {...pageProps} />
        <ErrorSnackbar />
      </ThemeProvider>
    </Suspense>
  );
}

export default appWithTranslation(wrapper.withRedux(App));
