import { FormGroup, TextField, Typography } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

type InputFieldType = {
  nameTitle: string;
  nameControl: string;
  control: any;
};

export function InputField({
  nameTitle,
  nameControl,
  control,
}: InputFieldType) {
  return (
    <FormGroup>
      <Typography typography='inputTitle'>{nameTitle}</Typography>
      <Controller
        render={({ field }) => <TextField {...field} />}
        name={nameControl}
        control={control}
      />
    </FormGroup>
  );
}
