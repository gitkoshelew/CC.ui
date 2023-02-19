import { FormGroup, TextField, Typography } from '@mui/material';
import React from 'react';
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form';
import { QuestionFormType } from '../../../Types/QuestionFormType';

type InputFieldType = {
  register: UseFormRegister<FieldValues>
  name: string;
  placeholderInput: string;
  registerName: string
}

export function InputField({ name, placeholderInput, register, registerName }: InputFieldType) {
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
