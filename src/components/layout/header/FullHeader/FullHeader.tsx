import Box from '@mui/system/Box';
import { Button, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Link from 'next/link';
import { HeaderContent } from '../HeaderContent';
import { FullHeaderWrapper } from './FullHeaderWrapper';
import { ListIcon } from '../../../../assets/icons/ListIcon';
import { ButtonNums } from '../ButtonNums';
import { HeaderStatistic } from '../HeaderStatistic';

export const FullHeader = () => (
  <FullHeaderWrapper>
    <Stack height={1} bgcolor='rgba(0, 0, 0, 0.5)'>
      <Box bgcolor='rgba(255, 255, 255, 0.05)'>
        <HeaderContent />
      </Box>
      <Container>
        <Stack
          direction='column'
          justifyContent='space-between'
          flexGrow={1}
          height={1}
          py={4}
          role='article'
        >
          <Typography sx={{ typography: { xs: 'h5', sm: 'h4' } }}>
            Some text
          </Typography>
          <HeaderStatistic />
          <Stack
            spacing={{ xs: 2, sm: 4 }}
            direction='row'
            sx={{ '& .MuiButton-contained': { px: { xs: 2, md: 5 } } }}
            role='menubar'
          >
            <Link href='/create-test'>
              <Button color='info' variant='contained'>
                Create test
              </Button>
            </Link>
            <Button
              color='info'
              variant='contained'
              startIcon={<ListIcon />}
              endIcon={<ButtonNums value={99} />}
            >
              My tests
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  </FullHeaderWrapper>
);
