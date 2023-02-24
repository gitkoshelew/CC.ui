import { FormGroup, TextField, Typography } from '@mui/material';
import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type InputFieldType = {
  register: UseFormRegister<FieldValues>;
  name: string;
  placeholderInput: string;
  registerName: string;
};

export function InputField({
  name,
  placeholderInput,
  register,
  registerName,
}: InputFieldType) {
  return (
    <FormGroup>
      <Typography typography='inputTitle'>{name}</Typography>
      <TextField
        {...register(registerName, { required: true })}
        placeholder={placeholderInput}
      />
    </FormGroup>
  );
}
