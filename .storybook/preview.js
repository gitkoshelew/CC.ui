import * as NextImage from "next/image";
import 'tailwindcss/tailwind.css';
import '../src/styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';
import { CssBaseline, ThemeProvider } from "@mui/material";
import {defaultTheme} from "../src/styles/theme/defaultTheme";
export const withMuiTheme = (Story) => (
    <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Story />
    </ThemeProvider>
);

export const decorators = [withMuiTheme];



const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
    configurable: true,
    value: (props) => <OriginalNextImage {...props} unoptimized/>,
});


export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}
