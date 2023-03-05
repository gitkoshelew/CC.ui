import { FormControlLabel, FormGroup, Radio, Stack } from '@mui/material';
import React from 'react';
import { BasketIcon } from '../../../assets/icons/BasketIcon';

export function CheckBoxField() {
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
