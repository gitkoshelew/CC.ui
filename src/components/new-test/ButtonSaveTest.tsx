import { Button, Stack } from '@mui/material';
import { MouseEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import { quizesApi } from '../../api/quizesApi';
import { postQuizesAc } from '../../store/reducers/quizes-reducer';

export const ButtonSaveTest = () => {
  const sendData: MouseEventHandler<Element> =  (e) => {
    e.preventDefault()
    console.log(e)
    quizesApi.postQuizes();
  };
  return (
    <Stack alignItems='center'>
      <Button type='submit'>Save test</Button>
    </Stack>
  );
};
