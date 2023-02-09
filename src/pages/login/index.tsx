import Stack from '@mui/material/Stack';
import { Checkbox, FormGroup, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SubmitHandler, useForm } from 'react-hook-form';
import { bgcolor } from '@mui/system';
import { pattern } from '@redux-saga/is';
import { StylizedPaper } from '../../components/common/StylizedPaper/StylizedPaper';
import { Layout } from '../../components/layout/Layout';
import { wrapper } from '../../store/store';

export type LoginFormType = {
  login: string;
  password: string;
  rememberMe: boolean;
};
const LoginPage = () => {
  const { t } = useTranslation('home');
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<LoginFormType>({ mode: 'onBlur' });
  const onSubmit: SubmitHandler<LoginFormType> = (data) => console.log(data);
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
        <StylizedPaper title='Log in'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup className='text-sm'>
              <span>Email</span>
              <div className='mb-4'>
                <TextField
                  {...register('login', {
                    required: 'Login is required',
                    pattern: {
                      value:
                        /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                      message: 'Invalid email',
                    },
                  })}
                  type='email'
                  className='w-full'
                />
                {errors?.login && (
                  <span className='text-error-main'>
                    {errors?.login?.message}
                  </span>
                )}
              </div>
              <span>Password</span>
              <div className='mb-4'>
                <TextField
                  {...register('password', {
                    required: 'Password is required',
                  })}
                  type='password'
                  className='w-full'
                />
                {errors?.login && (
                  <span className='text-error-main'>
                    {errors?.password?.message}
                  </span>
                )}
              </div>
              <div className='flex justify-between items-center'>
                <Checkbox
                  sx={{
                    bgcolor: 'background.paperAccent1',
                  }}
                  {...register('rememberMe')}
                  size='small'
                />
                <span>Remember me</span>
                <a href=' '>Forgotten password?</a>
              </div>
            </FormGroup>
            <div className='flex justify-center'>
              <Button disabled={!isValid} type='submit'>
                Login
              </Button>
            </div>
            <hr className='h-px w-80 bg-neutral-300' />
            <span className='flex justify-center text-slate-500'>
              Dont you have an account?
            </span>
            <Link href='/registration' className='flex justify-center'>
              Create new account?
            </Link>
          </form>
        </StylizedPaper>
      </Stack>
    </Layout>
  );
};

export default LoginPage;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(() => async ({ locale }) => ({
    props: {
      ...(await serverSideTranslations(locale as string, ['home', 'testPage'])),
    },
  }));
