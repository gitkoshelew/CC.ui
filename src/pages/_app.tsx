import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { Suspense, useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { GlobalThemes } from '../styles/theme/types';
import { useAppDispatch, useAppSelector, wrapper } from '../store/store';
import { ErrorSnackbar } from '../components/ErrorHandler/ErrorHandler';
import { Preloader } from '../components/common/Preloader/Preloader';
import { initializeApp, setIsInitialize } from '../store/reducers/app-reducer';
import { getTokenFromStorage } from '../utils/token';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isInitialize = useAppSelector((state) => state.app.isInitialize);

  useEffect(() => {
    const token = getTokenFromStorage();
    if (token) {
      dispatch(initializeApp());
    } else {
      dispatch(setIsInitialize(true));
      router.push('/login');
    }
  }, []);

  if (!isInitialize) {
    return (
      <Box
        sx={{
          position: 'fixed',
          width: '100%',
          top: '30%',
          textAlign: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

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
