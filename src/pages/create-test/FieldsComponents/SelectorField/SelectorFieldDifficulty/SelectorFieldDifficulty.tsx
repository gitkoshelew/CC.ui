import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';
import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { TypeSwitchSelect } from '../../../../../types/SelectorType';
import { SwitchSelectorDifficulty } from './SwitchSelectorDifficulty';

type SelectorFieldType<T extends FieldValues> = {
  name: FieldPath<T>;
  type: TypeSwitchSelect;
  label?: string | null;
  rules?: object;
  control: Control<T>;
};

export const SelectorFieldDifficulty = <T extends FieldValues>({
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
          <SwitchSelectorDifficulty
            type={type}
            onPressDifficulty={onChange}
            valueDifficulty={value}
          />
        )}
      />
    </Box>
  );
};
