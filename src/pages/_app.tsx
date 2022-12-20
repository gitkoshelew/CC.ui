import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalThemes } from '../styles/theme/types';
import { ThemeProvider } from '@mui/material';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={GlobalThemes['LIGHT']}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
