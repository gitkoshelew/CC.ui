import { createTheme, Shadows } from '@mui/material';
import commonDefaultTheme from './commonDefaultTheme.js';

const commonTheme = {
  palette: { ...commonDefaultTheme.palette, mode: 'light' },
  typography: { ...commonDefaultTheme.typography },
  shape: { ...commonDefaultTheme.shape },
  breakpoints: { ...commonDefaultTheme.breakpoints },
  shadows: { ...commonDefaultTheme.shadows },
} as const;

export const defaultTheme = createTheme({
  palette: commonTheme.palette,
  typography: commonTheme.typography,
  shape: commonTheme.shape,
  breakpoints: {
    values: commonTheme.breakpoints,
  },
  shadows: commonTheme.shadows as Shadows,

  components: {
    MuiButton: {
      defaultProps: {
        size: 'large',
        variant: 'contained',
        sx: {
          px: { xs: 2.3, md: 4 },
          py: { xs: 0.4, md: 0.9 },
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
            height: '3px',
          },
          '& .MuiTabs-flexContainer': { justifyContent: 'space-between' },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 1,
        sx: {
          bgcolor: 'background.paper',
          borderRadius: 'shape.borderRadius',
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        MenuProps: {
          PaperProps: {
            sx: {
              p: 0,
              borderRadius: '10px',
              '& .MuiMenuItem-root.Mui-selected': {
                backgroundColor: 'background.default',
              },
              '& .MuiMenuItem-root:hover': {
                backgroundColor: 'background.default',
              },
              '& .MuiMenuItem-root.Mui-selected:hover': {
                backgroundColor: 'background.default',
              },
              '& .MuiList-root': {
                p: 0,
              },
              '& .MuiButtonBase-root': {
                p: '0 15px',
              },
            },
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          height: '100%',
        },
      },
      defaultProps: {
        sx: {
          maxWidth: {
            xs: 1,
            sm: 1,
            md: 1,
            lg: 1,
            xl: '1320px',
          },
        },
      },
    },
  },
});
