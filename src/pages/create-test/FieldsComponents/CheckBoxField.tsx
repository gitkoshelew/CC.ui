import { FormGroup } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

export function CheckBoxField(name: string) {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <FormGroup>
      <label>{name}</label>
      <input {...register('example', { required: true })} defaultValue='test' />
      {errors.exampleRequired && <p>Обязательное поле</p>}
    </FormGroup>
  );
}
