import { Controller, useForm } from 'react-hook-form';
import React from 'react';
import { Box, TextField } from '@mui/material';

type TimerProps = {
  name: string;
  control: any;
};

export const QuestionTimer: React.FC<TimerProps> = ({ name, control }) => (
  <Box>
    <Controller
      control={control}
      name={`${name}.minutes`}
      defaultValue={0}
      render={({ field }) => (
        <TextField
          {...field}
          label='Minutes'
          type='number'
          InputProps={{ inputProps: { min: 0 } }}
          fullWidth
          margin='normal'
        />
      )}
    />
    <Controller
      control={control}
      name={`${name}.seconds`}
      defaultValue={0}
      render={({ field }) => (
        <TextField
          {...field}
          label='Seconds'
          type='number'
          InputProps={{ inputProps: { min: 0, max: 59 } }}
          fullWidth
          margin='normal'
        />
      )}
    />
  </Box>
);
