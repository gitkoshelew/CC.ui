import { FormGroup, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

type InputFieldType = {
  name: string;
  placeholderInput: string;
  inputFieldReg:string
}

export function InputField({ name, placeholderInput,inputFieldReg }: InputFieldType) {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <FormGroup>
      <Typography typography='inputTitle'>{name}</Typography>
      <TextField
        {...register(inputFieldReg, { required: true })}
        placeholder={placeholderInput}
      />
      {errors.exampleRequired && <p>Обязательное поле</p>}
    </FormGroup>
  );
}
