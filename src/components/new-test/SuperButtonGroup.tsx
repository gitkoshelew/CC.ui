import { Button, ButtonGroup, Stack, TextField, Typography } from '@mui/material';
import { ArrowSuccessIcon } from '../../assets/icons/ArrowSuccessIcon';

type SuperButtonType = {
  items: string[] | number[];
  title: string;
};

export const SuperButtonGroup = ({ items, title }: SuperButtonType) => (
  <Stack spacing={1}>
    <Typography typography='inputTitle'>{title}</Typography>
    <ButtonGroup
      variant='outlined'
      sx={{
        maxWidth: '260px',
        '& .MuiButtonGroup-grouped': {
          color: 'text.primary',
          bgcolor: 'background.paperAccent2',
          py: '7px',
          textTransform: 'none',
          borderColor: 'background.border',
        },
        '& .MuiButtonGroup-grouped: first-of-type': {
          bgcolor: 'secondary.main',
          color: 'primary.contrastText',
        },
      }}
    >
      {items.map((item, index) => (
        <TextField
          sx={{
            typography: 'inputTitle',
          }}
          key={index}
          
        >
          {item}
        </TextField>
      ))}
    </ButtonGroup>
  </Stack>
);
