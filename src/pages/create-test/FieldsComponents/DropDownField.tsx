import { Box, MenuItem, Select, Typography } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

type DropDownFieldType = {
  name: string;
  items: string[];
  controlName: string;
  control: any
};

export function DropDownField({
  name,
  items,
  controlName,
  control,
}: DropDownFieldType) {
  return (
    <Box>
      <Typography typography='inputTitle'>{name}</Typography>
      <Controller
        name={controlName}
        control={control}
        // rules = {rules}
        render={({field:{onChange, value}}) => (
          <Select
            value={value}
            onChange={onChange}
            >
            {items.map((item, index) => (
              <MenuItem
                sx={{
                  typography: 'subtitle1',
                }}
                key={index}
                value={item}
              >
                {item}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </Box>
  );
}
