import {
  FormGroup,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import React from 'react';
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form';

type DropDownFieldType = {
  register: UseFormRegister<FieldValues>
  registerName: string
  name: string;
  value: string;
  items: string[];
  handleChange: (event: SelectChangeEvent) => void;
};

export function DropDownField({
  register,
  registerName,
  name,
  value,
  items,
  handleChange,
}: DropDownFieldType) {
  return (
    <FormGroup>
      <Typography typography='inputTitle'>{name}</Typography>
      <Select
        value={value}
        {...register(registerName)}
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
    </FormGroup>
  );
}
