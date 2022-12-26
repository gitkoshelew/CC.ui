import React, { ChangeEvent, useState } from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { ButtonBackHome } from '../../components/common/ButtonBackHome';
import { Layout } from '../../components/layout/Layout';
import { WrapperNewTest } from '../../components/new-test/WrapperNewTest';

const Quiz = () => {
  const [value, setValue] = useState('');

  const test = [
    {
      id: 1,
      title: 'document.getElementById("demo").innerHTML = "Hello World!"',
      isDone: false,
    },
    {
      id: 2,
      title: 'document.getElement("p").innerHTML = "Hello World!"',
      isDone: false,
    },
    {
      id: 3,
      title: 'document.getElementByName("p").innerHTML = "Hello World!"',
      isDone: false,
    },
    { id: 4, title: 'demo.innerHTML = "Hello World!"', isDone: true },
  ];

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Layout>
      <ButtonBackHome />
      <WrapperNewTest>
        <span className=' mx-auto text-base '>“Node.js” question</span>

        <span className=' mx-auto text-base '>
          What is the correct JavaScript syntax to change the content of the
          HTML element below?
        </span>

        {test.map((t) => (
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
                  width: '100%',
                  background: '#F2F2F2',
                  marginBottom: '20px',
                  border: '1px solid rgba(0, 0, 0, 0.2)',
                  borderRadius: '15px',
                }}
              />
            </RadioGroup>
          </div>
        ))}
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={2}
        >
          <Button color='info'>Skip</Button>
          <Button>Next</Button>
        </Stack>
      </WrapperNewTest>
    </Layout>
  );
};

export default Quiz;
