import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { FC, useState } from 'react';

type SortingType = {
  sort: string[];
};

export const Sorting: FC<SortingType> = ({ sort }) => {
  const [value, setValue] = useState('1');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        gap: 2.5,
      }}
    >
      <Typography
        sx={{
          typography: 'subtitle1',
          color: 'text.primaryAlpha300',
        }}
      >
        Sorting
      </Typography>
      <Select
        color={'info'}
        sx={{
          minWidth: 142,
          bgcolor: 'background.paper',
          borderRadius: 0.5,
          typography: 'subtitle1',
          '& .MuiOutlinedInput-notchedOutline': {
            border: 0,
          },
          '& .MuiSelect-select': {
            py: 0,
          },
          '& .MuiSvgIcon-root': {
            color: 'text.primaryAlpha300',
          },
        }}
        value={value}
        onChange={handleChange}
      >
        {sort.map((item, index) => (
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
    </Box>
  );
};
