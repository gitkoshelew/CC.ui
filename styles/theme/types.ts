import {defaultTheme} from "./defaultTheme";
import {darkTheme} from "./darkTheme";

export enum ThemeKey {
    LIGHT = "LIGHT",
    DARK = "DARK"
}

export type ThemesType = {
    [key in ThemeKey]: DefaultThemeType
}

export const GlobalThemes: ThemesType = {
    [ThemeKey.LIGHT]: defaultTheme,
    [ThemeKey.DARK]: darkTheme
}

export type DefaultThemeType = typeof defaultTheme
