import { createTheme, Shadows } from '@mui/material';
import commonDefaultTheme from './commonDefaultTheme';

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
          boxShadow: 'none',
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
          borderRadius: 0.5,
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
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        color: 'primary',
        sx: {
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          borderRadius: 0.75,
          typography: 'inputTitle',
          '& .MuiSelect-select': {
            p: '10px 0',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 0,
          },
          '& .MuiSvgIcon-root': {
            color: 'text.secondaryAlpha500',
          },
        },
        MenuProps: {
          PaperProps: {
            sx: {
              mt: 1.25,
              borderRadius: 0.5,
              boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
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
                p: '0 14px',
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
    MuiTextField: {
      defaultProps: {
        InputProps: {
          sx: {
            borderRadius: 0.75,
            bgcolor: 'background.paperAccent1',
          },
        },
        sx: {
          '& .MuiInputBase-input': {
            typography: 'inputTitle',
            py: '10px',
            color: 'info',
          },
        },
      },
    },
    MuiFormControlLabel: {
      defaultProps: {
        sx: {
          '&.Contained': {
            width: '100%',
            bgcolor: 'background.paperAccent1',
            px: 3.5,
            py: 2.5,
            mb: 2.5,
            border: '1px solid rgba(0, 0, 0, 0.2)',
            borderRadius: 0.75,
            '& .MuiRadio-root': {
              mr: 2,
            },
          },
          '& .MuiRadio-root': {
            p: 0,
            color: 'background.border',
          },
          '& .MuiCheckbox-root': {
            color: 'primary.main',
            mr: 2,
          },
          '& .MuiRadio-root.Mui-checked': {
            color: 'primary.main',
          },
          '& .MuiTypography-root': {
            fontSize: 'medium',
          },
        },
      },
    },
    MuiCircularProgress: {
      defaultProps: {
        thickness: 6,
      },
    },
  },
});
