import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';
import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { TypeSwitchSelect } from '../../../../../types/SelectorType';
import { SwitchSelectorType } from './SwitchSelectorType';

type SelectorFieldType<T extends FieldValues> = {
  name: FieldPath<T>;
  type: TypeSwitchSelect;
  label?: string | null;
  rules?: object;
  control: Control<T>;
};

export const SelectorFieldType = <T extends FieldValues>({
  name,
  label,
  type,
  rules,
  control,
}: SelectorFieldType<T>) => {
  const { t } = useTranslation('selectorField');
  return (
    <Box>
      {label && (
        <Typography typography='inputTitle'>{t(`${label}`)}</Typography>
      )}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <SwitchSelectorType
            type={type}
            onPressType={onChange}
            valueType={value}
            name={name}
          />
        )}
      />
    </Box>
  );
};
