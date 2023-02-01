import { Button, Stack } from '@mui/material';

type ButtonSaveTestType = {
  sendData: any;
};

export const ButtonSaveTest = ({ sendData }: ButtonSaveTestType) => (
  <Stack alignItems='center'>
    <Button onClick={()=> sendData}>Save test</Button>
  </Stack>
);
