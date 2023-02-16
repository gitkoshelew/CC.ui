import {
  FormGroup,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

type DropDownFieldType = {
  name: string;
  value: string;
  items: string[];
  handleChange: (event: SelectChangeEvent) => void;
};

export function DropDownField({
  name,
  value,
  items,
  handleChange,
}: DropDownFieldType) {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <FormGroup>
      <Typography typography='inputTitle'>{name}</Typography>
      <Select
        value={value}
        {...register('dropDownField')}
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
      {errors.exampleRequired && <p>Обязательное поле</p>}
    </FormGroup>
  );
}
