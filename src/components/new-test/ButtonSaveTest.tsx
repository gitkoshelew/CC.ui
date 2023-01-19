import { Button, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { quizesApi } from '../../api/quizesApi';
import { postQuizesAc } from '../../store/reducers/quizes-reducer';

export const ButtonSaveTest = () => {
  const dispatch = useDispatch();
  const sendData = async () => {
    const postRes = await quizesApi.postQuizes();
    dispatch(postQuizesAc(postRes.data));
  };
  return (
    <Stack alignItems='center'>
      <Button onClick={sendData}>Save test</Button>
    </Stack>
  );
};
