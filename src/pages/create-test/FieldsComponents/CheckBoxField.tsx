import { Box, FormControlLabel, FormGroup, Radio, Stack } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { BasketIcon } from '../../../assets/icons/BasketIcon';
import { SuperInput } from '../../../components/new-test/SuperInput';

export function CheckBoxField() {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <FormGroup>
      <Stack direction='row' alignItems='center'>
        <FormControlLabel
          control={
            <Radio
              sx={{
                '&, &.Mui-checked': {
                  color: 'secondary.main',
                },
              }}
            />
          }
          label=''
        />
        <Stack>
          <BasketIcon />
        </Stack>
      </Stack>
    </FormGroup>
  );
}
