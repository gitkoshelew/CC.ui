import { Box, Stack, Typography } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { PlusIcon } from '../../assets/icons/PlusIcon';
import { SuperSelect } from './SuperSelect';
import { SuperInput } from './SuperInput';
import { Timer } from './Timer';

type QuestionBlockType = {
  value: string;
  handleTypeChange: (event: SelectChangeEvent) => void;
  items: string[];
};

export const QuestionBlock = ({
  value,
  handleTypeChange,
  items,
}: QuestionBlockType) => (
  <Stack spacing={2}>
    <Stack direction='row' flexWrap='wrap' spacing={3}>
      <Box sx={{ flexGrow: 1 }}>
        <SuperInput
          title='1. Question'
          value='Which core module in Node can you use for testing?'
        />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <SuperSelect
          title='Questions type:'
          value={value}
          items={items}
          handleChange={handleTypeChange}
        />
      </Box>
      <Box sx={{ maxWidth: '114px' }}>
        <Timer />
      </Box>
    </Stack>
    <Stack spacing={2}>
      <SuperInput title='Answer choice' value='jest' checkbox />
      <SuperInput value='assert' checkbox />
      <Stack direction='row' alignItems='center' paddingLeft={3}>
        <PlusIcon />
        <Typography typography='inputTitle'>Add answer</Typography>
      </Stack>
    </Stack>
  </Stack>
);
