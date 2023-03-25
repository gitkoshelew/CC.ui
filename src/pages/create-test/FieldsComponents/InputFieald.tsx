import { FormGroup, TextField, Typography } from '@mui/material';
import React from 'react';
import { Control, Controller, FieldValues } from "react-hook-form";
import { useTranslation } from 'next-i18next';

type InputFieldType = {
  nameTitle: string;
  nameControl: string;
  control: any;
  placeholder: string
};

export function InputField({
  nameTitle,
  nameControl,
  control,
  placeholder
}: InputFieldType) {
  const { t } = useTranslation('SwitchSelector');
  return (
    <FormGroup sx={{ marginY: '1rem' }}>
      <Typography typography='inputTitle'>{t(`${nameTitle}`)}</Typography>
      <Controller
        name={nameControl}
        rules={{ required: true }}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            error={!!error}
            placeholder={placeholder}
            helperText={error ? t('This field is required') : ''}
          />
        )}
      />
    </FormGroup>
  );
}
