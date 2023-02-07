import { styled, Theme } from '@mui/material';

export type TabColorType = 'secondary' | 'error' | 'hidden';

// use the function for getting values, without extra brackets and etc.
// just return the result
const tabColors = (theme: Theme, colorKey: TabColorType = 'secondary'): string => {
  const colors = {
    secondary: theme.palette.secondary.main,
    error: theme.palette.error.main,
    hidden: theme.palette.primary.main,
  };

  return colors[colorKey];
};

type RectangleProgressBarItemPropsType = {
  color?: TabColorType;
  isActive: boolean;
};
export const RectangleProgressTabsItem = styled(
  'div'
)<RectangleProgressBarItemPropsType>(({ theme, ...props }) => ({
  backgroundColor: tabColors(theme, props.color),
  height: 6,
  flexGrow: 1,
  borderRadius: 5,
  minWidth: '1.7rem',
  position: 'relative',
  transition: '0.2s',
  ...(props.isActive && {
    opacity: 0.7,
    transform: 'scale(1, 1.7)',
    pointerEvents: 'none',
  }),
  '&:hover': {
    transform: 'scale(1, 1.7)',
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    top: -10,
    bottom: -10,
    left: 0,
    right: 0,
    cursor: 'pointer',
  },
  [theme.breakpoints.down('sm')]: {
    height: 13,
    minWidth: 13,
    flexGrow: 'initial',
    width: 13,
    borderRadius: 50,
    '&:hover': {
      transform: 'scale(1.5)',
    },
    ...(props.isActive && {
      transform: 'scale(1.5)',
    }),
  },
}));
