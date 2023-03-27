import { FormGroup } from '@mui/material';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import React from 'react';
import { StylizedPaper } from '../../components/common/StylizedPaper/StylizedPaper';
import { Layout } from '../../components/layout/Layout';
import { useAppDispatch, wrapper } from '../../store/store';
import { LoginFormType } from '../../types/AuthTypes';
import { logIn } from '../../store/reducers/auth-reducer';
import { initializeApp } from '../../store/reducers/app-reducer';
import { getTokenFromStorage } from '../../utils/token';
import { AuthTextField } from '../../components/common/auth/AuthTextField';
import { AuthButtonsGroup } from '../../components/common/auth/AuthButtonsGroup';
import { ButtonBackHome } from '../../components/common/ButtonBackHome';

const LoginPage = () => {
  const token = getTokenFromStorage();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<LoginFormType>({ mode: 'onBlur' });
  const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
    const response = await dispatch(logIn(data));
    if (response?.meta.requestStatus === 'fulfilled') {
      await dispatch(initializeApp());
      router.push('/');
    }
  };

  if (token) {
    router.push('/');
    return null;
  }

  return (
    <Layout>
      <ButtonBackHome />
      <StylizedPaper title='LogIn' i18nName='login' maxWidth='450px'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup className='text-sm'>
            <AuthTextField
              register={register}
              error={errors.email}
              name='email'
              required='loginMessage'
            />
            <AuthTextField
              register={register}
              error={errors.password}
              name='password'
              required='passwordRequired'
            />
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
            </div>
          </FormGroup>
          <AuthButtonsGroup
            nameButton='Login'
            isValid={isValid}
            href='registration'
          />
        </form>
      </StylizedPaper>
    </Layout>
  );
};

export default LoginPage;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(() => async ({ locale }) => ({
    props: {
      ...(await serverSideTranslations(locale as string, ['home', 'login'])),
    },
  }));
