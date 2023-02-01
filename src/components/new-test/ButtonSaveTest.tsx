import { Button, SelectChangeEvent, Stack } from '@mui/material';

type ButtonSaveText = {
  sendData: (event: SelectChangeEvent) => void;
};

export const ButtonSaveTest = ({ sendData }: ButtonSaveText) => (
  <Stack alignItems='center'>
    <Button onClick={sendData}>Save test</Button>
  </Stack>
);
