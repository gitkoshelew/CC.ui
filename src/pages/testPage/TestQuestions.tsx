import { ChangeEvent, useState } from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Stack } from '@mui/material';

type PropsType = {
  answers: string[];
};

export const TestQuestions = ({ answers }: PropsType) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // <Remark>
    // why duplicate typing
    // setValue((event.target as HTMLInputElement).value);
    setValue(event.target.value);
  };
  return (
    <Stack direction='column' spacing={0.4}>
      {answers.map((t, index) => (
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
