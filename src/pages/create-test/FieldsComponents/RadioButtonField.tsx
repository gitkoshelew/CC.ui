import {
  Button,
  ButtonGroup,
  FormGroup,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { UseFormRegister , FieldValues } from 'react-hook-form';

import { ArrowSuccessIcon } from '../../../assets/icons/ArrowSuccessIcon';
import { QuestionFormType } from '../../../Types/QuestionFormType';

type RadioButtonType = {
  registerName: string
  register: UseFormRegister<FieldValues>;
  name: string;
  active: string;
  value: string;
  items: string[] | number[];
  onChange: (event: string) => void;
};

export function RadioButtonField({
  name,
  items,
  value,
  active,
  onChange,
  register,
  registerName
}: RadioButtonType) {
  return (
    <FormGroup>
      <Stack >
        <Typography typography='inputTitle'>{name}</Typography>
        <select
          value={active}
          {...register(registerName)}
          style={{display:"none"}}
        >
          {items.map((item, index) => (
            <option value={index}>{item}</option>
          ))}
        </select>
        <ButtonGroup
          variant='outlined'
          sx={{
            maxWidth: '260px',
            '& .MuiButtonGroup-grouped': {
              color: 'text.primary',
              bgcolor: 'background.paperAccent2',
              py: '7px',
              textTransform: 'none',
              borderColor: 'background.border',
            },
            mt: '0px'
          }}
        >
          {items.map((item, index) => (
            <Button
              sx={{
                typography: 'inputTitle',
                ...(active === String(index) && {
                  '.MuiButtonGroup-grouped': {
                    bgcolor: 'secondary.main',
                    color: 'primary.contrastText',
                  },
                }),
              }}
              key={index}
              value={index}
              startIcon={active === String(index) && <ArrowSuccessIcon />}
              onClick={() => onChange(String(index))}
            >
              {item}
            </Button>
          ))}
        </ButtonGroup>
      </Stack>
    </FormGroup>
  );
}
