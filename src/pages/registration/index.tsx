import Stack from '@mui/material/Stack';
import { FormGroup, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { StylizedPaper } from '../../components/common/StylizedPaper/StylizedPaper';
import { Layout } from '../../components/layout/Layout';
import { wrapper } from '../../store/store';

const SignUpPage = () => {
  const { t } = useTranslation('home');
  return (
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
        <StylizedPaper title='Sign Up'>
          <FormGroup className='text-sm'>
            <span>Email</span>
            <TextField type='email' className='mb-4' />
            <span>Password</span>
            <TextField type='password' className='mb-4' />
            <span>Confirm Password</span>
            <TextField type='password' />
          </FormGroup>
          <div className='flex justify-center'>
            <Button>Sign Up</Button>
          </div>
          <hr className='h-px w-80 bg-neutral-300' />
          <span className=' flex justify-center text-slate-500'>
            Already registered?
          </span>
          <Link href='/login' className='flex justify-center'>
            Login
          </Link>
        </StylizedPaper>
      </Stack>
    </Layout>
  );
};

export default SignUpPage;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(() => async ({ locale }) => ({
    props: {
      ...(await serverSideTranslations(locale as string, ['home', 'testPage'])),
    },
  }));
