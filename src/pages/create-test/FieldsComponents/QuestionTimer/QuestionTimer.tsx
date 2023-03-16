import { Controller, useForm } from 'react-hook-form';
import React from 'react';
import { Box, Stack, TextField, Typography } from '@mui/material';

type TimerProps = {
  name: string;
  control: any;
};

export const QuestionTimer: React.FC<TimerProps> = ({ name, control }) => (
  <Stack direction='row' spacing={2}>
    <Controller
      control={control}
      name={`${name}.minutes`}
      defaultValue={0}
      render={({ field }) => (
        <Box sx={{ flexGrow: 1, width: '5rem', textAlign: 'center' }}>
          <TextField
            {...field}
            type='number'
            InputProps={{ inputProps: { min: 0 } }}
            fullWidth
          />
          <Typography>Minutes</Typography>
        </Box>
      )}
    />
    <Controller
      control={control}
      name={`${name}.seconds`}
      defaultValue={0}
      render={({ field }) => (
        <Box sx={{ flexGrow: 1, width: '5rem', textAlign: 'center' }}>
          <TextField
            {...field}
            type='number'
            InputProps={{ inputProps: { min: 0, max: 59 } }}
            fullWidth
          />
          <Typography>Seconds</Typography>
        </Box>
      )}
    />
  </Stack>
);
