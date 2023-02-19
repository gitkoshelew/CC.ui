import { FormGroup, TextField, Typography } from '@mui/material';
import React from 'react';
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form';
import { QuestionFormType } from '../../../Types/QuestionFormType';

type InputFieldType = {
  register: UseFormRegister<FieldValues>
  name: string;
  placeholderInput: string;
}

export function InputField({ name, placeholderInput, register }: InputFieldType) {
  return (
    <FormGroup>
      <Typography typography='inputTitle'>{name}</Typography>
      <TextField
        {...register("title", { required: true })}
        placeholder={placeholderInput}
      />
      
    </FormGroup>
  );
}
