import { styled } from '@mui/material';
import Select, { selectClasses } from '@mui/material/Select';

export const SelectStyled = styled(Select)(({ theme }) => ({
  color: theme.palette.info.contrastText,
  minWidth: theme.spacing(18),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(1.25),
  typography: theme.typography.subtitle1,
  [`& .${selectClasses.select}`]: {
    padding: theme.spacing(0.5, 0),
  },
  [`& .${selectClasses.icon}`]: {
    color: theme.palette.text.disabled,
  },
}));
