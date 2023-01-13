import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { GlobalThemes } from '../styles/theme/types';
// eslint-disable-next-line import/named
import { wrapper } from '../store/store';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={GlobalThemes.LIGHT}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(App);
