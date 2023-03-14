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
import { RegistrationFormType } from '../../types/AuthTypes';
import { initializeApp } from '../../store/reducers/app-reducer';

const SignUpPage = () => {
  const { t } = useTranslation('home');
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegistrationFormType>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      nickname: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<RegistrationFormType> = async (data) => {
    await dispatch(registration(data));
    await dispatch(initializeApp());
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
              <div className='mb-6 relative'>
                <span>Name</span>
                <TextField
                  type='name'
                  className='w-full'
                  {...register('name', {
                    required: 'Name is required ',
                    minLength: {
                      value: 2,
                      message: 'minimum 2 characters',
                    },
                  })}
                />
                <div className='absolute left-2.5'>
                  {errors.name && (
                    <span className='text-red-600 text-center'>
                      {errors.name.message || 'Error'}
                    </span>
                  )}
                </div>
              </div>
              <span>Nickname</span>
              <div className='mb-6 relative'>
                <TextField
                  type='nickname'
                  className='w-full'
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
                <div className='absolute left-2.5'>
                  {errors.nickname && (
                    <span className='text-red-600 text-center'>
                      {errors.nickname.message || 'Error'}
                    </span>
                  )}
                </div>
              </div>
              <span>Email</span>
              <div className='mb-6 relative'>
                <TextField
                  type='email'
                  className='w-full'
                  {...register('email', {
                    required: 'Email is required ',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'invalid email',
                    },
                  })}
                />
                <div className='absolute left-2.5'>
                  {errors.email && (
                    <span className='text-red-600 text-center'>
                      {errors.email.message || 'Error'}
                    </span>
                  )}
                </div>
              </div>
              <span>Password</span>
              <div className='mb-6 relative'>
                <TextField
                  type='password'
                  className='w-full'
                  {...register('password', {
                    required: 'Password is required ',
                    minLength: {
                      value: 8,
                      message: 'minimum 8 characters',
                    },
                  })}
                />
                <div className='absolute left-2.5'>
                  {errors.password && (
                    <span className='text-red-600 text-center mb-1'>
                      {errors.password.message || 'Error'}
                    </span>
                  )}
                </div>
              </div>
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
