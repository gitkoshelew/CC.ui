import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { Suspense, useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';

import { useRouter } from 'next/router';
import { GlobalThemes } from '../styles/theme/types';
import { useAppDispatch, useAppSelector, wrapper } from '../store/store';
import { ErrorSnackbar } from '../components/ErrorHandler/ErrorHandler';
import { Preloader } from '../components/common/Preloader/Preloader';
import { checkAuth } from '../store/reducers/auth-reducer';

function App({ Component, pageProps }: AppProps) {
  const isAuth = useAppSelector((state) => state.regis.token);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (isAuth) dispatch(checkAuth());
  }, []);

  useEffect(() => {
    if (!isAuth) router.push('login');
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
