import { FormGroup, TextField, Typography } from '@mui/material';
import React from 'react';
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form';
import { QuestionFormType } from '../../../Types/QuestionFormType';

type InputFieldType = {
  
  name: string;
  placeholderInput: string;
  register: string;
}

export function InputField({ name, placeholderInput, register }: InputFieldType) {
  return (
    <FormGroup>
      <Typography typography='inputTitle'>{name}</Typography>
      <TextField
        {...register(register, { required: true })}
        placeholder={placeholderInput}
      />
      
    </FormGroup>
  );
}
