import Stack from '@mui/material/Stack';
import { FormGroup, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { StylizedPaper } from '../../components/common/StylizedPaper/StylizedPaper';
import { Layout } from '../../components/layout/Layout';
import { useAppDispatch, wrapper } from '../../store/store';
import { registration } from '../../store/reducers/auth-reducer';
import { RegistrationType } from '../../Types/types';

const SignUpPage = () => {
  const { t } = useTranslation('home');
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegistrationType>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      nickname: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<RegistrationType> = async (data) => {
    await dispatch(registration(data));
    router.push('/');
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup className='text-sm'>
              <span>Name</span>
              <TextField
                type='name'
                className='mb-1'
                {...register('name', {
                  required: 'Name is required ',
                  minLength: {
                    value: 2,
                    message: 'minimum 2 characters',
                  },
                })}
              />
              {errors.name && (
                <span className='text-red-600 text-center'>
                  {errors.name.message || 'Error'}
                </span>
              )}
              <span>Nickname</span>
              <TextField
                type='nickname'
                className='mb-1'
                {...register('nickname', {
                  required: 'Nickname is required ',
                  minLength: {
                    value: 2,
                    message: 'minimum 2 characters',
                  },
                  maxLength: {
                    value: 30,
                    message: 'maximum 30 characters',
                  },
                })}
              />
              {errors.nickname && (
                <span className='text-red-600 text-center'>
                  {errors.nickname.message || 'Error'}
                </span>
              )}
              <span>Email</span>
              <TextField
                type='email'
                className='mb-1'
                {...register('email', {
                  required: 'Email is required ',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'invalid email',
                  },
                })}
              />
              {errors.email && (
                <span className='text-red-600 text-center'>
                  {errors.email.message || 'Error'}
                </span>
              )}
              <span>Password</span>
              <TextField
                type='password'
                className='mb-3'
                {...register('password', {
                  required: 'Password is required ',
                  minLength: {
                    value: 8,
                    message: 'minimum 8 characters',
                  },
                })}
              />
              {errors.password && (
                <span className='text-red-600 text-center mb-1'>
                  {errors.password.message || 'Error'}
                </span>
              )}
            </FormGroup>
            <div className='flex justify-center'>
              <Button type='submit' disabled={!isValid}>
                Sign Up
              </Button>
            </div>
            <hr className='h-px w-80 bg-neutral-300 mb-3' />
            <span className=' flex justify-center text-slate-500 mb-3'>
              Already registered?
            </span>
            <Link href='/login' className='flex justify-center'>
              Login
            </Link>
          </form>
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
