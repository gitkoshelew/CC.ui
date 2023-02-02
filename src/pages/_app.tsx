import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { Suspense } from 'react';
import { appWithTranslation } from 'next-i18next';
import LinearProgress from '@mui/material/LinearProgress';
import { GlobalThemes } from '../styles/theme/types';
import { useAppSelector, wrapper } from '../store/store';

function App({ Component, pageProps }: AppProps) {
  const status = useAppSelector((state) => state.app.status);
  console.log(status);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider theme={GlobalThemes.LIGHT}>
        {status === 'loading' && <LinearProgress />}
        <Component {...pageProps} />
      </ThemeProvider>
    </Suspense>
  );
}

export default appWithTranslation(wrapper.withRedux(App));
