import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';

type SortingType = {
  sort: string[];
};
export const Sorting = ({ sort }: SortingType) => {
  const [value, setValue] = useState('1');
  const { t } = useTranslation('home');

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

      {/* <Remark>
        use separate component, as this Select becomes very complicated.
        Take it out to another component, for instance "SortingSelectField"
        There, use styled components instead of sx prop
      */}
      <Select
        color='info'
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
        {/*
          <Remark>
          use custom component of MenuItem with translation
        */}
        {t<string, string[]>('sortNavigation', {
          returnObjects: true,
        }).map((item, index) => (
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
