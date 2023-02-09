import { Button, ButtonProps, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { quizzesApi } from '../../api/quizzesApi';
import { postQuizesAc } from '../../store/reducers/quizes-reducer';

// <Remark>
// To make it more flexible and easy to work with props, you can import library's types and put them here.
// Editor's autocompletion (intellisense) will help you with editing the component and passing the props from the parent component

// <Remark>
// Naming of the components matter. Here is SaveTestButton.tsx file
// The main thing here not the test, but the button. This is button component
// And the purpose of it is Saving the test. That is why it is better to use following naming convention
// <Difference/Purpose/Action><MainComponent>
// Which means: SaveTestButton.tsx or TestSaveButton.tsx
const SaveTestButton = ({ onClick, ...props }: ButtonProps) => (
  // const dispatch = useDispatch();

  // <Remark>
  // Try not to use api requests inside the UI components. This is the rule of container pattern.
  // The component SaveTestButton does not need to know about any API requests. Its job is to simply render the button
  // and do 'something' on click. What to do on click decides parent component

  // const sendData = async () => {
  //   const postRes = await quizzesApi.postQuizzes();
  //   dispatch(postQuizesAc(postRes.data));
  // };

  <Stack alignItems='center'>
    <Button onClick={onClick} {...props}>
      Save test
    </Button>
  </Stack>
);
// <Remark>
// use Default exports

export default SaveTestButton;
