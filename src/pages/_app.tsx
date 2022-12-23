import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { GlobalThemes } from '../styles/theme/types';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={GlobalThemes.LIGHT}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
