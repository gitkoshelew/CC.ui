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
import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { BasketIcon } from '../../../../assets/icons/BasketIcon';

type CreateAnswerPropsType<T extends FieldValues> = {
  control: any;
  name: string;
  // typeOfQuestion: string; // for single multi
};

const CreateAnswer = <T extends FieldValues>({
  control,
  name,
  // typeOfQuestion // for single multi
}: CreateAnswerPropsType<T>) => {
  const { t } = useTranslation('createAnswer');
  // const [correctAnswers, setCorrectAnswers] = useState<string[]>([]); // for single multi
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  const handleAppendNewAnswer = () => {
    if (fields.length < 4) {
      append({ name: '', checked: false });
    }
  };
  // const handleCheckboxChange = (index: number) => {  // for single multi
  //   const questionAnswer = fields[index].id;
  //   if (correctAnswers.includes(questionAnswer)) {
  //     setCorrectAnswers((prevAnswers) =>
  //       prevAnswers.filter((answer) => answer !== questionAnswer)
  //     );
  //   } else {
  //     setCorrectAnswers((prevAnswers) => [...prevAnswers, questionAnswer]);
  //   }
  // };
  // const checkCorrect = () => {
  //   if (typeOfQuestion === 'single' && correctAnswers.length === 1) {  // for single multi
  //     return true
  //   }
  //   if (typeOfQuestion === 'multi' && correctAnswers.length === 2) {
  //     return true
  //   }
  //   return false;
  // };
  return (
    <Stack>
      <Typography>{t('Answer choice :')}</Typography>
      {fields.map((field, index) => {
        if (index < 4) {
          return (
            <Stack
              sx={{ marginY: '0.7rem' }}
              direction='row'
              flexWrap='wrap'
              key={field.id}
            >
              <Box sx={{ flexGrow: 0.1, verticalAlign: 'middle' }}>
                <Typography>{t(`${index + 1}.`)}</Typography>
              </Box>
              <Controller
                control={control}
                name={`${name}.${index}.name`}
                defaultValue=''
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <Box sx={{ flexGrow: 2 }}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ color: 'primary' }}
                      label=''
                      variant='outlined'
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? t('This field is required') : ''}
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
                          // disabled={checkCorrect()}                    // for single multi
                          // checked={correctAnswers.includes(field.id)}
                          // onChange={() => handleCheckboxChange(index)}
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
          );
        }
        return null;
      })}
      {fields.length < 4 ? (
        <Box sx={{ flexGrow: 0.1, marginY: '0.5rem' }}>
          <Button
            variant='contained'
            color='primary'
            onClick={handleAppendNewAnswer}
          >
            {t('Add Answer')}
          </Button>
        </Box>
      ) : (
        <Box sx={{ margin: '1rem' }}>
          <Typography>Maximum 4 answers !</Typography>
        </Box>
      )}
    </Stack>
  );
};

export default CreateAnswer;
