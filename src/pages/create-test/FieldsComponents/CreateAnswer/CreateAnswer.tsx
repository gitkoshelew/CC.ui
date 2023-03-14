import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  Path,
  useFieldArray,
} from 'react-hook-form';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { BasketIcon } from '../../../../assets/icons/BasketIcon';

type CreateAnswerPropsType<T extends FieldValues> = {
  control: any;
  name: any;
};

const CreateAnswer = <T extends FieldValues>({
  control,
  name,
}: CreateAnswerPropsType<T>) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <Stack>
      <Typography>Answer choice :</Typography>
      {fields.map((field, index) => (
        <Stack
          sx={{ marginY: '0.7rem' }}
          direction='row'
          flexWrap='wrap'
          key={field.id}
        >
          <Box sx={{ flexGrow: 0.1, verticalAlign: 'middle' }}>
            <Typography>{`${index + 1}.`}</Typography>
          </Box>
          <Controller
            control={control}
            name={`${name}.${index}.name`}
            defaultValue=''
            rules={{ required: true }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Box sx={{ flexGrow: 2 }}>
                <TextField
                  fullWidth
                  InputLabelProps={{ color: 'primary' }}
                  label=''
                  variant='outlined'
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? 'This field is required' : ''}
                />
              </Box>
            )}
          />
          <Controller
            control={control}
            name={`${name}.${index}.checked`}
            defaultValue={false}
            render={({ field: { onChange, value } }) => (
              <Box
                sx={{
                  flexGrow: 0.1,
                  backgroundColor: 'background.default',
                  marginX: '1rem',
                  borderRadius: '2rem',
                  textAlign: 'center',
                }}
              >
                <FormControlLabel
                  sx={{ marginX: '0' }}
                  control={
                    <Checkbox
                      color='primary'
                      size='small'
                      checked={value}
                      onChange={onChange}
                    />
                  }
                  label=''
                />
              </Box>
            )}
          />
          <Box sx={{ flexGrow: 0.1 }}>
            <Button
              sx={{ backgroundColor: 'background.default' }}
              onClick={() => remove(index)}
              size='medium'
            >
              <BasketIcon />
            </Button>
          </Box>
        </Stack>
      ))}
      <Box sx={{ flexGrow: 0.1, marginY: '0.5rem' }}>
        <Button
          variant='contained'
          color='primary'
          onClick={() => append({ name: '', checked: false })}
        >
          Add Answer
        </Button>
      </Box>
    </Stack>
  );
};

export default CreateAnswer;
