import { Theme } from '@mui/material';
import { defaultTheme } from './defaultTheme';
import { darkTheme } from './darkTheme';

export enum ThemeKey {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export type ThemesType = {
  [key in ThemeKey]: Theme;
};

export const GlobalThemes: ThemesType = {
  [ThemeKey.LIGHT]: defaultTheme,
  [ThemeKey.DARK]: darkTheme,
};

// <Remark>
// Why use typeof, if the @mui/material already provides type of Theme?
// Rule of thumb: use library's types.
// Naming was ambiguous as DefaultThemeType means the type for default theme
// If you use dark theme for example, that becomes not default

// export type DefaultThemeType = typeof defaultTheme;
