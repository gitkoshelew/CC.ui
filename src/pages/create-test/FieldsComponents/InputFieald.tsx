import { FormGroup, TextField, Typography } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'next-i18next';

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
  const { t } = useTranslation('SwitchSelector');
  return (
    <FormGroup sx={{ marginY: '1rem' }}>
      <Typography typography='inputTitle'>{t(`${nameTitle}`)}</Typography>
      <Controller
        render={({ field }) => <TextField {...field} />}
        name={nameControl}
        control={control}
      />
    </FormGroup>
  );
}
