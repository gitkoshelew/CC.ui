import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';
import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { TypeSwitchSelect } from '../../../../Types/SelectorType';
import { SwitchSelectors } from './SwitchSelector';

type SelectorFieldType<T extends FieldValues> = {
  name: FieldPath<T>;
  type: TypeSwitchSelect;
  label?: string | null;
  rules?: object;
  control: Control<T>;
};

export const SelectorField =<T extends FieldValues> ({
  name,
  label,
  type,
  rules,
  control,
}: SelectorFieldType<T>) => (
  <Box>
    {label && <Typography typography='inputTitle'>{label}</Typography>}
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <SwitchSelectors type={type} onPress={onChange} value={value} />
      )}
    />
  </Box>
);
