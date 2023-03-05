import { Button, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { quizesApi } from '../../api/quizesApi';
import { postQuizes } from '../../store/reducers/quizes-reducer';

export const ButtonSaveTest = () => {
  const dispatch = useDispatch();
  const sendData = async () => {
    const postRes = await quizesApi.postQuizes();
    dispatch(postQuizes(postRes.data));
  };
  return (
    <Stack alignItems='center'>
      <Button onClick={sendData}>Save test</Button>
    </Stack>
  );
};
