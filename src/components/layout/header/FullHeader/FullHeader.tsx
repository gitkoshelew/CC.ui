import Box from '@mui/system/Box';
import { Button, Stack, Typography } from '@mui/material';
import { HeaderContent } from '../HeaderContent';
import { FullHeaderWrapper } from './FullHeaderWrapper';
import { ListIcon } from '../../../../assets/icons/ListIcon';
import { ButtonNums } from '../ButtonNums';
import { HeaderStatistic } from '../HeaderStatistic';
import { HeaderButtons } from '../HeaderButtons';

export const FullHeader = () => (
  <FullHeaderWrapper>
    <Stack height={1} bgcolor='rgba(0, 0, 0, 0.5)'>
      <Box bgcolor='rgba(255, 255, 255, 0.05)'>
        <HeaderContent />
      </Box>
      <Stack
        p={4}
        direction='column'
        justifyContent='space-between'
        flexGrow={1}
      >
        <Typography sx={{ typography: { xs: 'h5', sm: 'h4' } }}>
          Some text
        </Typography>
        <HeaderStatistic />
        <HeaderButtons>
          <Button color='info' variant='contained'>
            Create test
          </Button>
          <Button
            color='info'
            variant='contained'
            startIcon={<ListIcon />}
            endIcon={<ButtonNums value={99} />}
          >
            My tests
          </Button>
        </HeaderButtons>
      </Stack>
    </Stack>
  </FullHeaderWrapper>
);
