import React, { ChangeEvent, FC, useState } from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { TestQuestionsType } from '../../Mocs/QuizMock';

type PropsType = {
  testQuestions: TestQuestionsType[];
};

const TestQuestions: FC<PropsType> = ({ testQuestions }) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <div>
      {testQuestions.map((t) => (
        <div key={t.id}>
          <RadioGroup
            name='use-radio-group'
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value={t.title}
              label={t.title}
              control={<Radio size='small' />}
              sx={{
                width: 1,
                background: '#F2F2F2',
                mb: 2.5,
                border: '1px solid rgba(0, 0, 0, 0.2)',
                borderRadius: 0.75,
              }}
            />
          </RadioGroup>
        </div>
      ))}
    </div>
  );
};

export default TestQuestions;
