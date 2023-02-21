import { ChangeEvent, useState } from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Stack } from '@mui/material';
import {
  NewQuestionType,
  TestQuestionsType,
} from '../../Types/TestQuestionsType';
import { useAppSelector } from '../../store/store';

type PropsType = {
  answers: string[];
};

export const TestQuestions = ({ answers }: PropsType) => {
  const [value, setValue] = useState('');
  // const youiy = useAppSelector((state) =>
  //   state.quizes.oneQuizes.question.map((m) => m.content)
  // );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <Stack direction='column' spacing={0.4}>
      {answers &&
        answers.map((t, index) => (
          <RadioGroup
            key={index}
            name='use-radio-group'
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value={t}
              className='Contained'
              label={t}
              control={<Radio size='small' />}
            />
          </RadioGroup>
        ))}
    </Stack>
  );
};
