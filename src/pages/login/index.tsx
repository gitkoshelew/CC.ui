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
import { LoginFormType } from '../../Types/AuthTypes';
import { logIn } from '../../store/reducers/auth-reducer';

const LoginPage = () => {
  const { t } = useTranslation('login');
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<LoginFormType>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
    const response = await dispatch(logIn(data));
    if (response.payload) router.push('/profilePage');
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
        <StylizedPaper title={t('title')}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup className='text-sm'>
              <span>{t('email')}</span>
              <div className='mb-6 relative'>
                <TextField
                  {...register('email', {
                    required: `${t('loginRequired')}`,
                    pattern: {
                      value:
                        /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                      message: `${t('loginMessage')}`,
                    },
                  })}
                  type='email'
                  className='w-full'
                />

                <div className='absolute left-2.5'>
                  {errors?.email && (
                    <span className='text-error-main'>
                      {errors?.email?.message}
                    </span>
                  )}
                </div>
              </div>
              <span>{t('password')}</span>
              <div className='mb-6 relative'>
                <TextField
                  {...register('password', {
                    required: `${t('passwordRequired')}`,
                    minLength: {
                      value: 8,
                      message: `${t('passwordMessage')}`,
                    },
                  })}
                  type='password'
                  className='w-full'
                />
                <div className='absolute left-2.5'>
                  {' '}
                  {errors?.password && (
                    <span className='text-error-main'>
                      {errors?.password?.message}
                    </span>
                  )}
                </div>
              </div>
              <div
              // className='flex justify-between items-center'
              >
                {/* <Checkbox */}
                {/*  sx={{ */}
                {/*    bgcolor: 'background.paperAccent1', */}
                {/*  }} */}
                {/*  {...register('rememberMe')} */}
                {/*  size='small' */}
                {/* /> */}
                {/* <span>Remember me</span> */}
                <div className='text-center'>
                  <a href=' '>{t('forgottenPassword')}</a>
                </div>
              </div>
            </FormGroup>
            <div className='flex justify-center'>
              <Button disabled={!isValid} type='submit'>
                {t('buttonLogin')}
              </Button>
            </div>
            <hr className='h-px w-80 bg-neutral-300' />
            <span className='flex justify-center text-slate-500'>
              {t('dontHaveAcc')}
            </span>
            <Link href='/registration' className='flex justify-center'>
              {t('registration')}
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
      ...(await serverSideTranslations(locale as string, [
        'home',
        'testPage',
        'login',
      ])),
    },
  }));
