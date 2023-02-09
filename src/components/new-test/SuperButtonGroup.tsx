import { Button, ButtonGroup, Stack, Typography } from '@mui/material';
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
      // <Remark>
      // use sx for minor things, like color, display and etc
      // if there are more stuff, like nested classes, conditions, many lines of css
      // then in the majority of types, use styled-components
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
        <Button
          sx={{
            typography: 'inputTitle',
          }}
          key={index}
          startIcon={item === 'Easy' && <ArrowSuccessIcon />}
        >
          {item}
        </Button>
      ))}
    </ButtonGroup>
  </Stack>
);
