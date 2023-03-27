import Stack from '@mui/material/Stack';
import Link from 'next/link';
import { Typography } from '@mui/material';
import { StylizedPaper } from '../../components/common/StylizedPaper/StylizedPaper';
import { Layout } from '../../components/layout/Layout';

const GuestPage = () => (
  <Layout>
    <Stack
      spacing={2}
      direction='column'
      sx={{
        width: 1,
        maxWidth: '450px',
        mx: 'auto',
        my: 'auto',
      }}
    >
      <StylizedPaper title='You are not authorized' i18nName=''>
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={3}
        >
          <Typography>
            Please,
            <Link href='/login'> authorize </Link>
            yourself
          </Typography>
        </Stack>
      </StylizedPaper>
    </Stack>
  </Layout>
);

export default GuestPage;
