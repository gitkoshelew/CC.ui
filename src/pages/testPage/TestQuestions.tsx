import React, { ChangeEvent, useState } from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Stack } from '@mui/material';
import { TestQuestionsType } from '../../Mocs/QuizMock';

type PropsType = {
  testQuestions: TestQuestionsType[];
};

const TestQuestions = ({ testQuestions }: PropsType) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <Stack direction='column' spacing={0.4}>
      {testQuestions.map((t) => (
        <RadioGroup
          key={t.id}
          name='use-radio-group'
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value={t.title}
            className='Contained'
            label={t.title}
            control={<Radio size='small' />}
          />
        </RadioGroup>
      ))}
    </Stack>
  );
};

export default TestQuestions;
