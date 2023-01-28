import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { Suspense } from 'react';
import { appWithTranslation } from 'next-i18next';
import { GlobalThemes } from '../styles/theme/types';
import { wrapper } from '../store/store';
import { ErrorSnackbar } from '../components/ErrorHandler/ErrorHandler';

function App({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider theme={GlobalThemes.LIGHT}>
        <Component {...pageProps} />
        <ErrorSnackbar />
      </ThemeProvider>
    </Suspense>
  );
}

export default appWithTranslation(wrapper.withRedux(App));
