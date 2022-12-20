import { createTheme } from '@mui/material';
import commonDefaultTheme from './commonDefaultTheme';

const commonTheme = {
  palette: { ...commonDefaultTheme.palette, mode: 'light' },
  typography: { ...commonDefaultTheme.typography },
  shape: { ...commonDefaultTheme.shape },
  breakpoints: { ...commonDefaultTheme.breakpoints },
} as const;

export const defaultTheme = createTheme({
  palette: commonTheme.palette,
  typography: commonTheme.typography,
  shape: commonTheme.shape,
  breakpoints: {
    values: commonTheme.breakpoints,
  },

  components: {
    MuiButton: {
      defaultProps: {
        size: 'small',
        sx: {
          px: { xs: 2, md: 3 },
          py: { xs: 0.4, md: 0.75 },
          textTransform: 'initial',
          fontSize: 'inherit',
          svg: {
            width: { xs: 12, md: 16 },
            height: { xs: 12, md: 16 },
          },
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        sx: {
          bgcolor: 'rgba(255, 255, 255, 0.1)',
          p: 0.8,
        },
      },
    },
    MuiTab: {
      defaultProps: {
        sx: {
          textTransform: 'initial',
          borderRadius: '10px',
          px: { xs: 0.5, md: 1 },
          fontSize: 'inherit',
          '&:hover': {
            opacity: 0.8,
          },
        },
      },
    },
    MuiTabs: {
      defaultProps: {
        textColor: 'inherit',
        sx: {
          '& .MuiTabs-indicator': {
            bgcolor: 'secondary.main',
          },
        },
      },
    },
  },
});
