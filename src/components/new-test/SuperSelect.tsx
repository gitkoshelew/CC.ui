import { MenuItem, Select, Stack, Typography } from '@mui/material';
import { SuperSelectType } from '../../Types/NewTestTypes';

export const SuperSelect = ({
  title,
  value,
  items,
  handleChange,
}: SuperSelectType) => (
  <Stack direction='column' spacing={1}>
    <Typography
      sx={{
        typography: 'subtitle1',
        pl: '14px',
      }}
    >
      {title}
    </Typography>
    <Select
      sx={{
        width: 266,
        height: 42,
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        borderRadius: '15px',
        typography: 'subtitle1',
        '& .MuiOutlinedInput-notchedOutline': {
          border: 0,
        },
        '& .MuiSvgIcon-root': {
          color: 'text.secondaryAlpha500',
        },
      }}
      value={value}
      onChange={handleChange}
    >
      {items.map((item, index) => (
        <MenuItem
          sx={{
            typography: 'subtitle1',
          }}
          key={index}
          value={index}
        >
          {item}
        </MenuItem>
      ))}
    </Select>
  </Stack>
);
