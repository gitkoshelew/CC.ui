import * as NextImage from 'next/image';
import 'tailwindcss/tailwind.css';
import '../src/styles/globals.css';
import '@fontsource/material-icons';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { defaultTheme } from '../src/styles/theme/defaultTheme';
import { I18nextProvider } from 'next-i18next';
import i18n from './i18n';

export const withMuiTheme = (Story) => (
  <I18nextProvider i18n={i18n}>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  </I18nextProvider>
);

export const decorators = [withMuiTheme];

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};
